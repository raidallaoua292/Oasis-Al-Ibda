'use client';

import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { navLinks } from '@/content/oasis';

import Link from 'next/link';

/**
 * Header / Navigation Component
 */
export function Header() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <Container className="flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="">
          <div className="flex items-center gap-2 ">
          <div className="w-10 h-10 bg-green rounded-lg flex items-center justify-center">
            <span className="text-white text-lg font-bold">◈</span>
          </div>
          <div className="font-bold text-lg text-green">
            واحة الإبداع <span className="text-orange">· تقرت</span>
          </div>
        </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-gray-600 hover:text-orange hover:translate-y-0.5 transition-colors font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Button variant="primary" size="sm">
          انضم إلينا
        </Button>
      </Container>
    </nav>
  );
}
