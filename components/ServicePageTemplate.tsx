'use client';

import Link from 'next/link';
import Image from 'next/image';
import { LucideIcon, ArrowRight, CheckCircle2 } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

interface ProcessStep {
  title: string;
  description: string;
}

interface ServicePageTemplateProps {
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  features: string[];
  benefits: string[];
  process: ProcessStep[];
  image: string;
  secondaryImage?: string;
  icon: LucideIcon;
  ctaText?: string;
}

export default function ServicePageTemplate({
  title,
  subtitle,
  description,
  longDescription,
  features,
  benefits,
  process,
  image,
  secondaryImage,
  icon: Icon,
  ctaText = '¿Interesado en este servicio?',
}: ServicePageTemplateProps) {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="wrapper">
          <AnimatedSection>
            <div style={{
              width: '64px', height: '64px', borderRadius: 'var(--radius-lg)',
              backgroundColor: 'rgba(153, 173, 144, 0.16)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 24px',
            }}>
              <Icon size={28} style={{ color: 'var(--color-sage-dark)' }} />
            </div>
            <span className="subtitle">{subtitle}</span>
            <h1 className="title-xl">{title}</h1>
            <div className="gold-line centered" />
            <p className="body-text-lg" style={{ maxWidth: '600px', margin: '0 auto' }}>
              {description}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-white">
        <div className="wrapper">
          <div className="grid-2" style={{ alignItems: 'center', gap: '64px' }}>
            <AnimatedSection>
              <div style={{
                position: 'relative',
                aspectRatio: '4/3',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-lg)',
              }}>
                <Image
                  src={image}
                  alt={title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div>
                <span className="subtitle">SOBRE ESTE SERVICIO</span>
                <h2 className="title-lg" style={{ fontSize: '32px' }}>¿Qué ofrecemos?</h2>
                <div className="gold-line" />
                <p className="body-text" style={{ marginBottom: '32px' }}>
                  {longDescription}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {features.map((feature) => (
                    <div key={feature} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <CheckCircle2 size={20} style={{ color: 'var(--color-gold)', flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontSize: '15px', color: 'var(--color-text)', lineHeight: 1.6 }}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section bg-arena">
        <div className="wrapper">
          <AnimatedSection>
            <div className="text-center" style={{ marginBottom: '64px' }}>
              <span className="subtitle">VENTAJAS</span>
              <h2 className="title-lg">¿Por qué elegir {title}?</h2>
              <div className="gold-line centered" />
            </div>
          </AnimatedSection>

          <div className="grid-3">
            {benefits.map((benefit, i) => (
              <AnimatedSection key={benefit} delay={i * 0.08}>
                <div style={{
                  backgroundColor: 'var(--color-white)',
                  padding: '32px',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: 'var(--shadow-sm)',
                  border: '1px solid var(--color-border)',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px',
                }}>
                  <div style={{
                    width: '36px', height: '36px', borderRadius: '50%',
                    backgroundColor: 'rgba(153, 173, 144, 0.16)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <span style={{ color: 'var(--color-sage-dark)', fontWeight: 700, fontSize: '14px' }}>{i + 1}</span>
                  </div>
                  <p style={{ fontSize: '15px', color: 'var(--color-text)', lineHeight: 1.7 }}>{benefit}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-white">
        <div className="wrapper">
          <div className="grid-2" style={{ alignItems: 'center', gap: '64px' }}>
            <AnimatedSection>
              <div>
                <span className="subtitle">PROCESO</span>
                <h2 className="title-lg">Cómo trabajamos</h2>
                <div className="gold-line" />
                {process.map((step, i) => (
                  <div key={step.title} className="process-step">
                    <span className="step-number">{String(i + 1).padStart(2, '0')}</span>
                    <div className="step-content">
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {secondaryImage && (
              <AnimatedSection delay={0.2}>
                <div style={{
                  position: 'relative',
                  aspectRatio: '4/3',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-lg)',
                }}>
                  <Image
                    src={secondaryImage}
                    alt={`${title} proceso`}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </AnimatedSection>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-arena" style={{ textAlign: 'center' }}>
        <div className="wrapper">
          <AnimatedSection>
            <span className="subtitle">SIGUIENTE PASO</span>
            <h2 className="title-lg">{ctaText}</h2>
            <div className="gold-line centered" />
            <p className="body-text" style={{ maxWidth: '500px', margin: '0 auto 32px' }}>
              Cuéntanos tu proyecto y te ayudaremos a encontrar la mejor solución personalizada para ti.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contacto" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                Contactar <ArrowRight size={16} />
              </Link>
              <Link href="/servicios" className="btn btn-secondary">
                Ver todos los servicios
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
