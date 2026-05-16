'use client';

import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { contactInfo } from '@/content/oasis';

/**
 * Contact Section Component
 */
export function ContactSection() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <section className="py-20 md:py-32">
      <Container>
        {/* Heading */}
        <div className="mb-12">
          <SectionHeading
            eyebrow="تواصلوا معنا"
            title="نحن هنا للإجابة على أسئلتكم"
          />
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="md:col-span-2">
            <Card variant="default" className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                أرسل لنا رسالة
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    label="الاسم الكامل"
                    placeholder="أدخل اسمك"
                    required
                  />
                  <Input
                    label="البريد الإلكتروني"
                    type="email"
                    placeholder="بريدك@مثال.com"
                    required
                  />
                </div>

                <Input
                  label="الموضوع"
                  placeholder="ما موضوع رسالتك؟"
                  required
                />

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    الرسالة
                  </label>
                  <textarea
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-sand focus:outline-none focus:border-green focus:ring-2 focus:ring-green/20 font-tajawal text-gray-900 placeholder:text-gray-400 resize-none"
                    rows={5}
                    placeholder="اكتب رسالتك هنا..."
                    required
                  />
                </div>

                <Button variant="primary" className="w-full">
                  إرسال الرسالة
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info) => (
              <Card key={info.title} variant="default" className="p-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl mt-1">{info.icon}</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      {info.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {info.content}
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
