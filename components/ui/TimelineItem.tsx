'use client';

import { TimelineStep } from '@/types';

/**
 * TimelineItem Component
 * Single timeline step with number, title, and description
 */
interface TimelineItemProps extends TimelineStep {
  isLast?: boolean;
}

export function TimelineItem({
  step,
  title,
  description,
  isLast,
}: TimelineItemProps) {
  return (
    <div className="flex gap-6">
      {/* Left: Dot and Line */}
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-green text-white flex items-center justify-center font-black text-lg z-10">
          {step}
        </div>
        {!isLast && (
          <div className="w-0.5 bg-gray-300 flex-1 min-h-20" />
        )}
      </div>

      {/* Right: Content */}
      <div className="pb-8 pt-2">
        <div className="text-xs font-bold text-orange uppercase tracking-wide mb-1">
          خطوة {step}
        </div>
        <h4 className="text-lg font-bold text-gray-900 mb-2">{title}</h4>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
