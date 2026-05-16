'use client';

import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { partners } from '@/content/oasis';

/**
 * Partners Section Component
 */
export function PartnersSection() {
  return (
    <section className="py-20 md:py-32 bg-sand">
      <Container>
        {/* Heading */}
        <div className="text-center mb-12">
          <SectionHeading
            eyebrow="شركاؤنا"
            title="الشركات والمؤسسات الداعمة"
            align="center"
          />
        </div>

        {/* Partners Logos */}
        <div className="flex flex-wrap gap-6 justify-center items-center">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="bg-white border border-gray-300 rounded-lg px-8 py-6 hover:border-green hover:text-green transition-all cursor-pointer"
            >
              <p className="font-semibold text-sm">{partner.name}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
