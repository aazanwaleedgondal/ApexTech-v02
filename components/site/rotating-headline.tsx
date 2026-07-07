'use client';

import { useEffect, useState } from 'react';
import { heroRotatingHeadlines } from '@/lib/data/site';
import { cn } from '@/lib/utils';

export function RotatingHeadline() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [phase, setPhase] = useState<'typing' | 'holding' | 'deleting'>('typing');

  useEffect(() => {
    const current = heroRotatingHeadlines[index];
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === 'typing') {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1));
        }, 70);
      } else {
        timeout = setTimeout(() => setPhase('holding'), 1600);
      }
    } else if (phase === 'holding') {
      timeout = setTimeout(() => setPhase('deleting'), 200);
    } else if (phase === 'deleting') {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length - 1));
        }, 35);
      } else {
        setIndex((i) => (i + 1) % heroRotatingHeadlines.length);
        setPhase('typing');
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, phase, index]);

  return (
    <span className="relative inline-block">
      <span className="text-white">{displayed}</span>
      <span
        className={cn(
          'ml-1 inline-block h-[0.9em] w-[3px] translate-y-[2px] bg-navy-300',
          phase === 'holding' && 'animate-pulse'
        )}
      />
    </span>
  );
}
