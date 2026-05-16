'use client';

import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { IconBadge } from '@/components/ui/IconBadge';
import { whyUsCards } from '@/content/oasis';

/**
 * Why Us Section Component
 */
export function WhyUsSection() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Heading */}
          <div>
            <SectionHeading
              eyebrow="لماذا واحة الإبداع"
              title="هذا يهمك"
              subtitle="استكشف القيمة الحقيقية والتأثير المباشر."
            />
          </div>

          {/* Right: Cards */}
          <div className="space-y-4">
            {whyUsCards.map((card) => (
              <Card key={card.title} variant="default">
                <div className="flex gap-4">
                  <IconBadge
                    icon={card.icon}
                    color={card.color}
                    size="md"
                  />
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-1">
                      {card.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
