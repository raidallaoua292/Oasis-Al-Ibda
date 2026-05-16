'use client';

import { cn } from '@/lib/cn';
import { CardProps } from '@/types';

/**
 * Card Component
 * Reusable card wrapper with multiple variants
 */
export function Card({
  variant = 'default',
  className,
  children,
}: CardProps) {
  const variantStyles = {
    default: 'bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg',
    highlight:
      'bg-white border-2 border-orange rounded-xl shadow-md hover:shadow-xl',
    stat: 'bg-white border border-gray-200 rounded-lg text-center shadow-sm',
    persona: 'bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg',
  };

  return (
    <div
      className={cn(
        'p-6 transition-all duration-200',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </div>
  );
}
