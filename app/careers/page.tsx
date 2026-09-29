'use client';

import { useState, type FormEvent } from 'react';

import { CheckCircle2, Upload, Send } from 'lucide-react';

import { PageHero } from '@/components/site/page-hero';
import { Section, SectionHeading } from '@/components/site/section';
import { Card } from '@/components/site/card';
import { Reveal } from '@/components/site/reveal';
import { Icon } from '@/components/site/icon';
import { Button } from '@/components/site/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { whyJoinUs } from '@/lib/data/site';
import { cn } from '@/lib/utils';

type FormState = {
  name: string;
  email: string;
  phone: string;
  country: string;
  skills: string;
  cv: File | null;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

export default function CareersPage() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    country: '',
    skills: '',
    cv: null,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validate = (): boolean => {
    const e: FormErrors = {};

    if (!form.name.trim()) {
      e.name = 'Please enter your name';
    }

    if (!form.email.trim()) {
      e.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Please enter a valid email';
    }

    if (!form.phone.trim()) {
      e.phone = 'Please enter your phone number';
    }

    if (!form.country.trim()) {
      e.country = 'Please enter your country';
    }

    if (!form.skills.trim()) {
      e.skills = 'Please tell us about your skills';
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    setSubmitError('');

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const formData = new FormData();

      formData.append('name', form.name.trim());
      formData.append('email', form.email.trim());
      formData.append('phone', form.phone.trim());
      formData.append('country', form.country.trim());
      formData.append('skills', form.skills.trim());

      // Honeypot field for bot protection.
      formData.append('website', '');

      // Send the actual CV file, not just its filename.
      if (form.cv) {
        formData.append('cv', form.cv);
      }

      const response = await fetch('/api/careers', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok || !data.ok) {
        throw new Error(
          data.error || 'We could not send your application. Please try again.'
        );
      }

      setSubmitted(true);
    } catch (error) {
      console.error('Careers application error:', error);

      setSubmitError(
        error instanceof Error
          ? error.message
          : 'We could not send your application. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const update = (
    key: keyof Omit<FormState, 'cv'>,
    value: string
  ) => {
    setForm((f) => ({ ...f, [key]: value }));

    if (errors[key]) {
      setErrors((e) => ({ ...e, [key]: undefined }));
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setSubmitError('');
    setErrors({});

    setForm({
      name: '',
      email: '',
      phone: '',
      country: '',
      skills: '',
      cv: null,
    });
  };

  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Join Our Global Network of Certified Field Engineers"
        description="ApexTech works with skilled field engineers around the world on a flexible, project basis — connecting your expertise to real client tickets across Smart Hands, IMAC, Data Centre Support, and Wireless Survey work."
        backgroundImage="https://i.pinimg.com/736x/da/73/27/da7327aa015b59b43471a968bf1e14e3.jpg"
      />

      {/* Why Join Us */}
      <Section variant="default">
        <SectionHeading
          eyebrow="Why Engineers Work With Us"
          title="Project-based assignments that match your skills and location"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyJoinUs.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <Card className="group h-full hover:-translate-y-1 hover:card-shadow-hover">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-navy-50 text-navy-700 transition-colors group-hover:bg-navy-950 group-hover:text-white">
                  <Icon name={item.icon} className="h-5 w-5" />
                </div>

                <h3 className="text-[15px] font-semibold text-navy-950">
                  {item.title}
                </h3>

                <p className="mt-2 text-[13px] leading-relaxed text-navy-400">
                  {item.description}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Careers Banner */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl items-stretch lg:grid-cols-2">
          {/* Left - Image */}
          <Reveal>
            <div className="relative h-[320px] overflow-hidden rounded-2xl lg:h-[480px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/company-bg4.jpg"
                alt="Careers at ApexTech Solutions"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </Reveal>

          {/* Right - Content */}
          <Reveal delay={150}>
            <div className="flex h-full items-center bg-white px-6 py-14 sm:px-10 md:py-16 lg:px-14">
              <div className="max-w-xl">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500">
                  Build Your Future With Us
                </p>

                <h2 className="mt-4 text-3xl font-bold leading-tight text-black md:text-4xl">
                  Work with a global network that values your expertise
                </h2>

                <p className="mt-5 text-[14px] leading-relaxed text-gray-600 md:text-[15px]">
                  We match engineers to real client work across data centre,
                  networking, POS, and deskside projects — with clear briefs,
                  tools lists, and rates set before you commit.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href="/contact" variant="outline" size="lg">
                    Talk to Our Team
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Application Form */}
      <Section variant="off-white">
        <div className="mx-auto max-w-2xl">
          <SectionHeading
            eyebrow="Apply Now"
            title="Submit your application"
            description="Fill in the form below and our talent team will review your application."
            align="center"
          />

          <Reveal>
            {submitted ? (
              <Card className="p-8 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-navy-50">
                  <CheckCircle2 className="h-7 w-7 text-navy-700" />
                </div>

                <h3 className="mt-4 text-lg font-bold text-navy-950">
                  Application received!
                </h3>

                <p className="mx-auto mt-2 max-w-sm text-[14px] text-navy-400">
                  Thanks, {form.name.split(' ')[0] || 'there'}. Your application
                  has been sent to our talent team. We&apos;ll review your
                  details and reach out if there is a suitable opportunity.
                </p>

                <div className="mt-6">
                  <Button
                    variant="outline"
                    size="default"
                    onClick={resetForm}
                  >
                    Submit Another Application
                  </Button>
                </div>
              </Card>
            ) : (
              <Card className="p-6 md:p-8">
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  noValidate
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <FormField
                      label="Full Name"
                      error={errors.name}
                      required
                    >
                      <Input
                        value={form.name}
                        onChange={(e) =>
                          update('name', e.target.value)
                        }
                        placeholder="Jane Engineer"
                        className={cn(
                          errors.name && 'border-red-400'
                        )}
                      />
                    </FormField>

                    <FormField
                      label="Email"
                      error={errors.email}
                      required
                    >
                      <Input
                        type="email"
                        value={form.email}
                        onChange={(e) =>
                          update('email', e.target.value)
                        }
                        placeholder="jane@example.com"
                        className={cn(
                          errors.email && 'border-red-400'
                        )}
                      />
                    </FormField>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <FormField
                      label="Phone"
                      error={errors.phone}
                      required
                    >
                      <Input
                        value={form.phone}
                        onChange={(e) =>
                          update('phone', e.target.value)
                        }
                        placeholder="+44 7700 900000"
                        className={cn(
                          errors.phone && 'border-red-400'
                        )}
                      />
                    </FormField>

                    <FormField
                      label="Country"
                      error={errors.country}
                      required
                    >
                      <Input
                        value={form.country}
                        onChange={(e) =>
                          update('country', e.target.value)
                        }
                        placeholder="United Kingdom"
                        className={cn(
                          errors.country && 'border-red-400'
                        )}
                      />
                    </FormField>
                  </div>

                  <FormField
                    label="Skills & Certifications"
                    error={errors.skills}
                    required
                  >
                    <Textarea
                      value={form.skills}
                      onChange={(e) =>
                        update('skills', e.target.value)
                      }
                      placeholder="Tell us about your certifications, vendor experience, and the types of work you can handle..."
                      className={cn(
                        'min-h-[100px]',
                        errors.skills && 'border-red-400'
                      )}
                    />
                  </FormField>

                  <FormField label="CV Upload (optional)">
                    <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-dashed border-navy-200 bg-navy-50 px-4 py-3 transition-colors hover:border-navy-400 hover:bg-navy-100">
                      <Upload className="h-4 w-4 shrink-0 text-navy-500" />

                      <span className="min-w-0 truncate text-[13px] text-navy-500">
                        {form.cv?.name ||
                          'Click to select a file (PDF, DOC, DOCX)'}
                      </span>

                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0] || null;

                          setForm((f) => ({
                            ...f,
                            cv: file,
                          }));
                        }}
                      />
                    </label>

                    <p className="mt-1.5 text-[11px] text-navy-400">
                      Maximum file size: 4 MB
                    </p>
                  </FormField>

                  {/* Submission Error */}
                  {submitError && (
                    <div
                      role="alert"
                      className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-[13px] text-red-600"
                    >
                      {submitError}
                    </div>
                  )}

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Sending Application...'
                    ) : (
                      <>
                        Submit Application
                        <Send className="ml-1.5 h-3.5 w-3.5" />
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            )}
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
        {label}{' '}
        {required && <span className="text-red-500">*</span>}
      </Label>

      {children}

      {error && (
        <p className="mt-1 text-[11px] text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}