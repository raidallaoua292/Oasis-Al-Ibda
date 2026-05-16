'use client';

/**
 * IconBadge Component
 * Rounded icon container with color variants
 */
interface IconBadgeProps {
  icon: string;
  color?: 'green' | 'orange' | 'purple';
  size?: 'sm' | 'md' | 'lg';
}

export function IconBadge({
  icon,
  color = 'green',
  size = 'md',
}: IconBadgeProps) {
  const colorStyles = {
    green: 'bg-green/10',
    orange: 'bg-orange/10',
    purple: 'bg-purple-100',
  };

  const sizeStyles = {
    sm: 'w-10 h-10 text-lg',
    md: 'w-12 h-12 text-2xl',
    lg: 'w-16 h-16 text-4xl',
  };

  return (
    <div
      className={`${colorStyles[color]} ${sizeStyles[size]} rounded-2xl flex items-center justify-center`}
    >
      {icon}
    </div>
  );
}
