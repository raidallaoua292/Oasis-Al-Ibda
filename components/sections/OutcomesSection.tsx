'use client';

import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { outcomeStats, outcomeCards } from '@/content/oasis';

/**
 * Outcomes Section Component
 */
export function OutcomesSection() {
  return (
    <section className="py-20 md:py-32 bg-sand">
      <Container>
        {/* Heading */}
        <div className="text-center mb-16">
          <SectionHeading
            eyebrow="ما يبنيه المشاركون"
            title="المخرجات الحقيقية"
            align="center"
          />
        </div>

        {/* Stats Row */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {outcomeStats.map((stat) => (
            <Card key={stat.label} variant="stat" className="text-center">
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-2xl font-black text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Banner */}
        <div className="bg-green rounded-3xl p-12 text-center text-white mb-8">
          <h3 className="text-2xl font-bold mb-3">
            في نهاية البرنامج، تمتلك ملفاً تكوينياً حقيقياً
          </h3>
          <p className="text-white/70">
            لا شهادة فارغة — بل مشاريع فعلية تُثبت أثرك وتُعزّز مسيرتك.
          </p>
        </div>

        {/* Outcome Details */}
        <div className="grid md:grid-cols-4 gap-6">
          {outcomeCards.map((card) => (
            <Card key={card.title} variant="default" className="text-center">
              <div className="text-5xl mb-4">{card.emoji}</div>
              <h4 className="font-bold text-lg text-gray-900 mb-2">
                {card.title}
              </h4>
              <p className="text-sm text-gray-600">{card.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
