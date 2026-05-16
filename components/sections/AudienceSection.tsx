'use client';

import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { IconBadge } from '@/components/ui/IconBadge';
import { personas } from '@/content/oasis';

/**
 * Audience Section Component
 */
export function AudienceSection() {
  const colorMap = { green: 'green', orange: 'orange', purple: 'purple' } as const;

  return (
    <section className="py-20 md:py-32 bg-white">
      <Container>
        {/* Heading */}
        <div className="text-center mb-16">
          <SectionHeading
            eyebrow="من نخدم"
            title="الفئة المستهدفة"
            align="center"
          />
        </div>

        {/* Personas Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {personas.map((persona) => (
            <Card key={persona.title} variant="persona" className="text-center">
              <IconBadge
                icon={persona.icon}
                color={colorMap[persona.color]}
                size="lg"
              />
              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
                {persona.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {persona.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
