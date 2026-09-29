import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Nodemailer needs the Node.js runtime (not Edge).
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const TO_EMAIL = process.env.CAREERS_TO_EMAIL || 'info@apextechsolutions.com';

// Keep at 4 MB: Vercel serverless functions reject request bodies above ~4.5 MB.
const MAX_CV_BYTES = 4 * 1024 * 1024;
const ALLOWED_CV_EXT = ['.pdf', '.doc', '.docx'];

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

// Strip CR/LF so user input can never inject email headers.
const oneLine = (s: string) => s.replace(/[\r\n]+/g, ' ').trim();

const fieldStr = (fd: FormData, key: string) => {
  const v = fd.get(key);
  return typeof v === 'string' ? v.trim() : '';
};

export async function POST(request: Request) {
  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json({ error: 'Invalid form submission.' }, { status: 400 });
  }

  // Honeypot: real users never fill this hidden field. Pretend success to bots.
  if (fieldStr(formData, 'website')) {
    return NextResponse.json({ ok: true });
  }

  const name = oneLine(fieldStr(formData, 'name'));
  const email = oneLine(fieldStr(formData, 'email'));
  const phone = oneLine(fieldStr(formData, 'phone'));
  const country = oneLine(fieldStr(formData, 'country'));
  const skills = fieldStr(formData, 'skills');

  // Server-side validation (mirrors the client-side rules).
  if (!name || !email || !phone || !country || !skills) {
    return NextResponse.json({ error: 'Please fill in all required fields.' }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
  }
  if (name.length > 200 || email.length > 200 || phone.length > 50 || country.length > 100 || skills.length > 5000) {
    return NextResponse.json({ error: 'One or more fields are too long.' }, { status: 400 });
  }

  // Optional CV
  let attachment: { filename: string; content: Buffer } | undefined;
  const cv = formData.get('cv');
  if (cv instanceof File && cv.size > 0) {
    const lower = cv.name.toLowerCase();
    if (!ALLOWED_CV_EXT.some((ext) => lower.endsWith(ext))) {
      return NextResponse.json({ error: 'CV must be a PDF, DOC or DOCX file.' }, { status: 400 });
    }
    if (cv.size > MAX_CV_BYTES) {
      return NextResponse.json({ error: 'CV file is too large (max 4 MB).' }, { status: 400 });
    }
    attachment = {
      filename: oneLine(cv.name).replace(/[\\/]/g, '_'),
      content: Buffer.from(await cv.arrayBuffer()),
    };
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_FROM } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error('Careers form: SMTP environment variables are not configured.');
    return NextResponse.json(
      { error: 'Our application system is temporarily unavailable. Please try again later.' },
      { status: 500 }
    );
  }

  const port = Number(SMTP_PORT) || 465;
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465, // true for 465, false for 587 (STARTTLS)
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const text = [
    'New Careers application',
    '',
    `Full Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Country: ${country}`,
    `CV attached: ${attachment ? attachment.filename : 'No'}`,
    '',
    'Skills & Certifications:',
    skills,
  ].join('\n');

  const html = `
    <h2>New Careers application</h2>
    <table cellpadding="6" style="border-collapse:collapse">
      <tr><td><strong>Full Name</strong></td><td>${escapeHtml(name)}</td></tr>
      <tr><td><strong>Email</strong></td><td>${escapeHtml(email)}</td></tr>
      <tr><td><strong>Phone</strong></td><td>${escapeHtml(phone)}</td></tr>
      <tr><td><strong>Country</strong></td><td>${escapeHtml(country)}</td></tr>
      <tr><td><strong>CV attached</strong></td><td>${attachment ? escapeHtml(attachment.filename) : 'No'}</td></tr>
    </table>
    <h3>Skills &amp; Certifications</h3>
    <p style="white-space:pre-wrap">${escapeHtml(skills)}</p>
  `;

  try {
    await transporter.sendMail({
      from: MAIL_FROM || SMTP_USER,
      to: TO_EMAIL,
      replyTo: `"${name.replace(/"/g, '')}" <${email}>`,
      subject: `New Careers Application: ${name} (${country})`,
      text,
      html,
      attachments: attachment ? [attachment] : [],
    });
  } catch (err) {
    console.error('Careers form: failed to send email', err);
    return NextResponse.json(
      { error: 'We could not send your application. Please try again.' },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}