'use client';

import { Container } from '@/components/ui/Container';
import { founderInfo } from '@/content/oasis';

/**
 * Founder Section Component
 */
export function FounderSection() {
  const { name, role, bio, quote } = founderInfo;

  return (
    <section className="py-20 md:py-32 bg-green text-white">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Portrait */}
          <div className="hidden md:flex justify-center">
            <div className="w-64 h-80 bg-white/15 border-2 border-white/25 rounded-3xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4">👤</div>
                <p className="text-sm text-white/50">صورة المؤسس</p>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div>
            <div className="text-sm font-bold text-orange uppercase tracking-wide mb-4">
              عن المؤسس
            </div>
            <h2 className="text-4xl font-black mb-3">{name}</h2>
            <p className="text-lg text-white/75 mb-6">{role}</p>
            <p className="text-lg leading-relaxed mb-8">{bio}</p>

            {/* Quote */}
            <div className="bg-white/10 border-r-4 border-orange rounded-r-xl p-6">
              <p className="text-lg italic leading-relaxed text-white/90">
                &ldquo;{quote}&rdquo;
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
