'use client';

import { cn } from '@/lib/cn';
import { ContainerProps } from '@/types';

/**
 * Container Component
 * Max-width wrapper with consistent padding
 */
export function Container({ className, children }: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto px-6 md:px-8 max-w-7xl w-full',
        className
      )}
    >
      {children}
    </div>
  );
}
