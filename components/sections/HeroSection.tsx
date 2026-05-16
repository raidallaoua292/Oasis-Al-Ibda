'use client';

import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { heroSection } from '@/content/oasis';

import Image from 'next/image';
import Link from 'next/link';

/**
 * Hero Section Component
 */
export function HeroSection() {
  const { badge, title, subtitle, stats, cta } = heroSection;

  return (
    <section className="bg-green text-white py-20 md:py-32 overflow-hidden">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-end">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-orange rounded-full animate-pulse" />
              <span className="text-sm font-semibold">{badge}</span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              {/* {title}  */}
              واحة 
              <span className="text-orange">الإبداع </span> 
              تقرت
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-white/80 mb-10 leading-relaxed max-w-lg">
              {subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="#contact">
                <Button className='bg-orange hover:bg-orange/90 ' variant="primary">
                  {cta.primary}
                </Button>
              </Link>
              <Link href="#programs">
                <Button className='text-white bg-white/10 hover:bg-white/20 ' variant="ghost">{cta.secondary}</Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-black mb-1">
                    {stat.value}
                    {stat.suffix && <span className="text-orange">{stat.suffix}</span>}
                  </div>
                  <div className="text-xs text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual Placeholder */}
          <div className="hidden md:flex justify-center">
            {/* <div className="bg-white/10 rounded-3xl p-8 border border-white/15 w-full aspect-square flex items-center justify-center">
              <div className="text-center text-white/50">
                <div className="text-5xl mb-4">📱</div>
                <p>Hero Visual</p>
              </div>
            </div> */}
            <Image
              src="/images/hero/hero.png"
              alt="Hero Visual"
              width={500}
              height={500}
              className="rounded-3xl border border-white/15"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
