'use client';

import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { programsData } from '@/content/oasis';

/**
 * Programs Section Component
 */
export function ProgramsSection() {
  return (
    <section className="py-20 md:py-32 bg-sand">
      <Container>
        {/* Heading */}
        <div className="text-center mb-16">
          <SectionHeading
            eyebrow="المسارات التدريبية"
            title="مسارات البرنامج"
            align="center"
          />
        </div>

        {/* Program Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {programsData.map((program, index) => (
            <Card
              key={program.title}
              variant={program.accent ? 'highlight' : 'default'}
              className={`relative ${program.accent ? 'md:scale-105' : ''}`}
            >
              <div className="flex flex-col">
                <div className="text-xs font-bold text-gray-500 uppercase mb-3">
                  البرنامج {index + 1}
                </div>
                <div className="text-4xl mb-4">{program.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {program.description}
                </p>
              </div>
              {program.accent && (
                <div className="absolute bottom-0 right-0 w-1 h-3/5 bg-orange rounded-l-full transition-all duration-200 group-hover:h-4/5"/>
              )}
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
