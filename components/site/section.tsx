import * as React from 'react';
import { cn } from '@/lib/utils';

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  variant?: 'default' | 'navy' | 'navy-light' | 'off-white';
  id?: string;
};

const variantClasses: Record<NonNullable<SectionProps['variant']>, string> = {
  default: 'bg-white',
  navy: 'bg-navy-950 text-white',
  'navy-light': 'bg-navy-800 text-white',
  'off-white': 'bg-navy-50',
};

export function Section({
  children,
  className,
  containerClassName,
  variant = 'default',
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn('py-16 md:py-20', variantClasses[variant], className)}
    >
      <div className={cn('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', containerClassName)}>
        {children}
      </div>
    </section>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  variant?: 'default' | 'light';
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  variant = 'default',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'mb-12 max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            'mb-3 text-[11px] font-semibold uppercase tracking-[0.18em]',
            variant === 'light' ? 'text-navy-200' : 'text-navy-500'
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          'text-2xl font-bold leading-tight tracking-tight md:text-[28px]',
          variant === 'light' ? 'text-white' : 'text-navy-950'
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 text-[13px] leading-relaxed',
            variant === 'light' ? 'text-navy-200' : 'text-navy-400'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
