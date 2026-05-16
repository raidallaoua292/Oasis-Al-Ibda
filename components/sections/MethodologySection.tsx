'use client';

import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TimelineItem } from '@/components/ui/TimelineItem';
import { methodologySteps } from '@/content/oasis';

/**
 * Methodology Section Component
 */
export function MethodologySection() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <Container>
        <div className="grid md:grid-cols-3 gap-16 items-start">
          {/* Left: Heading */}
          <div>
            <SectionHeading
              eyebrow="كيفية عملنا"
              title="المنهجية"
              subtitle="خطوات واضحة نحو النجاح والتأثير."
            />
          </div>

          {/* Right: Timeline */}
          <div className="md:col-span-2">
            <div className="space-y-2">
              {methodologySteps.map((step, index) => (
                <TimelineItem
                  key={step.title}
                  step={String(index + 1)}
                  title={step.title}
                  description={step.description}
                  isLast={index === methodologySteps.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
