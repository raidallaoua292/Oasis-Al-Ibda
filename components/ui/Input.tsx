'use client';

import { cn } from '@/lib/cn';

/**
 * Input Component
 * Text input wrapper with consistent styling
 */
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({ label, error, className, ...props }: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-semibold text-gray-900 mb-2">
          {label}
        </label>
      )}
      <input
        className={cn(
          'w-full px-4 py-3 border border-gray-300 rounded-lg',
          'bg-sand focus:outline-none focus:border-green focus:ring-2 focus:ring-green/20',
          'font-tajawal text-gray-900 placeholder:text-gray-400',
          error && 'border-red-500 focus:border-red-500 focus:ring-red-100',
          className
        )}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}
