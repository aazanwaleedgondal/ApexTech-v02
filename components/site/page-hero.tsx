import { cn } from '@/lib/utils';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
  backgroundImage?: string;
  variant?: 'navy' | 'dark';
}

export function PageHero({
  eyebrow,
  title,
  description,
  backgroundImage,
  variant = 'navy',
}: PageHeroProps) {
  return (
    <section
      className={cn( 
        'relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20',
        variant === 'navy' ? 'bg-navy-950' : 'bg-navy-800'
      )}
    >
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0">
          <img
            src={backgroundImage}
            alt=""
            aria-hidden="true"
            className="
              h-full
              w-full
              object-cover
              object-center
              saturate-[0.65]
              contrast-[1.05]
            "
          />
        </div>
      )}

      {/* Dark Navy Overlay */}
      <div className="absolute inset-0 bg-navy-950/50" />

      {/* Blue Color Tint */}
      <div className="absolute inset-0 bg-blue-950/35 mix-blend-multiply " />

      {/* Left-to-Right Dark Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/75 to-navy-950/25" />

      {/* Bottom Fade */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-navy-950 to-transparent" />

      {/* Technical Grid */}
      <div className="absolute inset-0 opacity-[0.07]">
        <svg
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="hero-grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>

          <rect
            width="100%"
            height="100%"
            fill="url(#hero-grid)"
          />
        </svg>
      </div>

      {/* Blue Glow */}
      <div className="pointer-events-none absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/[0.08] blur-[100px]" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="animate-fade-up text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
            {eyebrow}
          </p>

          <h1 className="mt-4 animate-fade-up text-3xl font-bold leading-tight tracking-tight text-white md:text-[44px]">
            {title}
          </h1>

          {description && (
            <p
              className="mx-auto mt-5 max-w-2xl animate-fade-up text-[14px] leading-relaxed text-white"
              style={{ animationDelay: '100ms' }}
            >
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}