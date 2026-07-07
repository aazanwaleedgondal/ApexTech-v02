import { cn } from '@/lib/utils';

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  variant?: 'navy' | 'navy-light';
};

export function PageHero({
  eyebrow,
  title,
  description,
  variant = 'navy',
}: PageHeroProps) {
  return (
    <section
      className={cn(
        'relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20',
        variant === 'navy' ? 'bg-navy-950' : 'bg-navy-800'
      )}
    >
      <div className="absolute inset-0 opacity-[0.07]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>
      <div className="absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-navy-600/20 blur-[100px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="animate-fade-up text-[11px] font-semibold uppercase tracking-[0.2em] text-navy-300">
            {eyebrow}
          </p>
          <h1 className="mt-4 animate-fade-up text-3xl font-bold leading-tight tracking-tight text-white md:text-[44px]">
            {title}
          </h1>
          <p
            className="mx-auto mt-5 max-w-2xl animate-fade-up text-[14px] leading-relaxed text-navy-200"
            style={{ animationDelay: '100ms' }}
          >
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
