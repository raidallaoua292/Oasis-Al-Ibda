'use client';

import { cn } from '@/lib/cn';
import { SectionHeadingProps } from '@/types';

/**
 * SectionHeading Component
 * Reusable section header with eyebrow, title, subtitle, and divider
 */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className,
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : '';

  return (
    <div className={cn('mb-12', className)}>
      {eyebrow && (
        <div className={cn('text-orange text-sm font-bold uppercase tracking-wider mb-3', alignClass)}>
          {eyebrow}
        </div>
      )}

      <h2
        className={cn(
          'text-3xl md:text-4xl font-black text-gray-900 mb-4 leading-tight',
          alignClass
        )}
      >
        {title}
      </h2>

      <div className={cn('w-12 h-1 bg-orange rounded-full mb-6', align === 'center' ? 'mx-auto' : '')} />

      {subtitle && (
        <p
          className={cn(
            'text-lg text-gray-600 leading-relaxed max-w-lg',
            alignClass
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
