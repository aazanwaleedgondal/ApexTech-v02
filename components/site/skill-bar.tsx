'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

type SkillBarProps = {
  skill: string;
  level: number;
};

export function SkillBar({ skill, level }: SkillBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWidth(level);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div ref={ref}>
      <div className="mb-2 flex items-center justify-between">
        <span className="text-[13px] font-semibold text-navy-950">{skill}</span>
        <span className="text-[12px] font-medium text-navy-400">{level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-navy-100">
        <div
          className={cn(
            'h-full rounded-full bg-gradient-to-r from-navy-700 to-navy-500 transition-all duration-1000 ease-out'
          )}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}
