'use client';

import { cn } from '@/lib/cn';
import { ButtonProps } from '@/types';

/**
 * Button Component
 * Reusable button with primary, secondary, and ghost variants
 */
export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  disabled,
  type = 'button',
  ...props
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const baseStyles =
    'font-bold rounded-lg transition-all duration-200 cursor-pointer inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-green focus:ring-offset-2 disabled:cursor-not-allowed';

  const variantStyles = {
    primary:
      'bg-green text-white hover:bg-green-light shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-50',
    secondary:
      'bg-sand text-green border-2 border-green hover:bg-green hover:text-white disabled:opacity-50',
    ghost:
      'bg-transparent text-white border border-white/35 hover:bg-white/20 disabled:opacity-50',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-7 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      type={type}
      disabled={disabled}
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
