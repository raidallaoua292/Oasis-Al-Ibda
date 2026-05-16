'use client';

import { Container } from '@/components/ui/Container';
import { navLinks } from '@/content/oasis';

/**
 * Footer Component
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green text-white py-16">
      <Container>
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-lg font-bold">◈</span>
              </div>
              <div className="font-bold">واحة الإبداع</div>
            </div>
            <p className="text-sm text-white/65 leading-relaxed">
              حاضنة مجتمعية إعلامية، تدريبية، وتطوعية ذات طابع تنموي مستدام.
            </p>
          </div>

          {/* Links */}
          <div>
            <h5 className="text-sm font-bold uppercase tracking-wide text-white/50 mb-4">
              روابط سريعة
            </h5>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/75 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="text-sm font-bold uppercase tracking-wide text-white/50 mb-4">
              الشركة
            </h5>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/75 hover:text-white transition-colors text-sm">
                  عنا
                </a>
              </li>
              <li>
                <a href="#" className="text-white/75 hover:text-white transition-colors text-sm">
                  الفريق
                </a>
              </li>
              <li>
                <a href="#" className="text-white/75 hover:text-white transition-colors text-sm">
                  المدونة
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h5 className="text-sm font-bold uppercase tracking-wide text-white/50 mb-4">
              تابعنا
            </h5>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/15 rounded-lg flex items-center justify-center hover:bg-orange transition-colors"
              >
                ف
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/15 rounded-lg flex items-center justify-center hover:bg-orange transition-colors"
              >
                ت
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/15 rounded-lg flex items-center justify-center hover:bg-orange transition-colors"
              >
                إ
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/50">
            © {currentYear} واحة الإبداع - تقرت. جميع الحقوق محفوظة.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">
              سياسة الخصوصية
            </a>
            <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">
              شروط الاستخدام
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
