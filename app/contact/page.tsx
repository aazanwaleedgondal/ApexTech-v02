'use client';

import { useState, type FormEvent } from 'react';
import { CheckCircle2, Mail, Phone, MapPin, Send, Globe } from 'lucide-react';
import { PageHero } from '@/components/site/page-hero';
import { Section } from '@/components/site/section';
import { Card } from '@/components/site/card';
import { Reveal } from '@/components/site/reveal';
import { Button } from '@/components/site/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { offices } from '@/lib/data/site';
import { cn } from '@/lib/utils';

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  region: string;
  role: string;
  service: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const roles = ['Engineer', 'Customer', 'Business Owner'];


const serviceOptions = [
  'Smart Hands / Break-Fix',
  'IMAC / IMACD',
  'Data Centre Support',
  'Third-Party Maintenance',
  'Network Services',
  'Deskside / EUC Support',
  'Wireless Survey',
  'IT Asset Disposition',
  'Staff Augmentation',
  'Not sure yet',
];

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: '',
    company: '',
    email: '',
    phone: '',
    region: '',
    role: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = 'Please enter your name';
    if (!form.email.trim()) e.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Please enter a valid email';
    if (!form.region.trim()) e.region = 'Please select your region';
    if (!form.role.trim()) e.role = 'Please tell us who you are';
    if (!form.message.trim()) e.message = 'Please enter a message';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    console.log('Contact form submitted:', form);
    setSubmitted(true);
  };

  const update = (key: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk"
        description="Whether you need coverage in one country or fifty, we would love to hear from you. Fill in the form and our team will respond within one business day."
      />

      <Section variant="default">
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Form */}
          <Reveal className="lg:col-span-7">
            {submitted ? (
              <Card className="p-8 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-navy-50">
                  <CheckCircle2 className="h-7 w-7 text-navy-700" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-navy-950">
                  Message sent!
                </h3>
                <p className="mx-auto mt-2 max-w-sm text-[14px] text-navy-400">
                  Thanks, {form.name.split(' ')[0] || 'there'}. We have received
                  your message and will be in touch within one business day.
                </p>
                <div className="mt-6">
                  <Button
                    variant="outline"
                    size="default"
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        name: '',
                        company: '',
                        email: '',
                        phone: '',
                        region: '',
                        role: '',
                        service: '',
                        message: '',
                      });
                    }}
                  >
                    Send Another Message
                  </Button>
                </div>
              </Card>
            ) : (
            <Card className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField label="Full Name" error={errors.name} required>
                    <Input
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      placeholder="Jane Smith"
                      className={cn(errors.name && 'border-red-400')}
                    />
                  </FormField>
                  <FormField label="Company" error={errors.company}>
                    <Input
                      value={form.company}
                      onChange={(e) => update('company', e.target.value)}
                      placeholder="Acme Corp"
                    />
                  </FormField>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField label="Email" error={errors.email} required>
                    <Input
                      type="email"
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      placeholder="jane@acme.com"
                      className={cn(errors.email && 'border-red-400')}
                    />
                  </FormField>
                  <FormField label="Phone" error={errors.phone}>
                    <Input
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      placeholder="+44 7700 900000"
                    />
                  </FormField>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField label="Country / Region" error={errors.region} required>
                    <Select value={form.region} onValueChange={(v) => update('region', v)}>
                      <SelectTrigger className={cn('h-10', errors.region && 'border-red-400')}>
                        <SelectValue placeholder="Select region" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="north-america">North America</SelectItem>
                        <SelectItem value="south-america">South America</SelectItem>
                        <SelectItem value="emea">EMEA</SelectItem>
                        <SelectItem value="apac">APAC</SelectItem>
                        <SelectItem value="australia">Australia / NZ</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormField>
                  <FormField label="Which best describes you?" error={errors.role} required>
                    <Select value={form.role} onValueChange={(v) => update('role', v)}>
                      <SelectTrigger className={cn('h-10', errors.role && 'border-red-400')}>
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent>
                        {roles.map((r) => (
                          <SelectItem key={r} value={r.toLowerCase().replace(' ', '-')}>
                            {r}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormField>
                </div>
                <FormField label="Service Required" error={errors.service}>
                  <Select value={form.service} onValueChange={(v) => update('service', v)}>
                    <SelectTrigger className="h-10">
                      <SelectValue placeholder="Select a service (optional)" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceOptions.map((s) => (
                        <SelectItem key={s} value={s.toLowerCase().replace(/[^a-z]+/g, '-')}>
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormField>
                <FormField label="Message" error={errors.message} required>
                  <Textarea
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    placeholder="Tell us about your sites, your SLAs, and what you need..."
                    className={cn('min-h-[120px]', errors.message && 'border-red-400')}
                  />
                </FormField>
                <Button type="submit" variant="primary" size="lg" className="w-full">
                  Send Message <Send className="ml-1.5 h-3.5 w-3.5" />
                </Button>
              </form>
            </Card>
            )}
          </Reveal>

          {/* Contact details */}
          <Reveal delay={150} className="lg:col-span-5">
            <div className="space-y-4">
              <div className="rounded-2xl bg-navy-950 p-6 text-white">
                <h3 className="text-[15px] font-semibold">Get in touch directly</h3>
                <div className="mt-4 space-y-3">
                  <a href="mailto:hello@apextech.solutions" className="flex items-center gap-3 text-[13px] text-navy-200 hover:text-white">
                    <Mail className="h-4 w-4 text-navy-300" />
                    hello@apextech.solutions
                  </a>
                  <a href="tel:+442070000000" className="flex items-center gap-3 text-[13px] text-navy-200 hover:text-white">
                    <Phone className="h-4 w-4 text-navy-300" />
                    +44 20 7000 0000
                  </a>
                  <div className="flex items-center gap-3 text-[13px] text-navy-200">
                    <Globe className="h-4 w-4 text-navy-300" />
                    24/7 × 365 availability
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-navy-100 bg-white p-6 card-shadow">
                <h3 className="text-[15px] font-semibold text-navy-950">
                  Our offices
                </h3>
                <div className="mt-4 space-y-3">
                  {offices.map((o) => (
                    <div key={o.city} className="flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-navy-50">
                        <MapPin className="h-4 w-4 text-navy-600" />
                      </div>
                      <div>
                        <p className="text-[13px] font-semibold text-navy-950">
                          {o.city}, {o.country}
                        </p>
                        <p className="text-[12px] leading-snug text-navy-400">
                          {o.address}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}

function FormField({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Label className="mb-1.5 block text-[12px] font-medium text-navy-700">
        {label} {required && <span className="text-red-500">*</span>}
      </Label>
      {children}
      {error && <p className="mt-1 text-[11px] text-red-500">{error}</p>}
    </div>
  );
}
