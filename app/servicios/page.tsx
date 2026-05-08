'use client';

import Link from 'next/link';
import { Home, Users, TrendingUp, Wrench, ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

const services = [
  {
    icon: Home,
    title: 'Gekko Home',
    subtitle: 'Compra & Venta',
    description: 'Te acompañamos en la compra y venta de propiedades con asesoramiento personalizado y las mejores herramientas técnicas y legales. Nuestro conocimiento del mercado madrileño te asegura la mejor operación.',
    features: ['Valoración profesional', 'Gestión documental', 'Negociación experta', 'Asesoría legal integral'],
    href: '/servicios/gekko-home',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop',
  },
  {
    icon: Users,
    title: 'Gekko Roomers',
    subtitle: 'Gestión de Alquileres',
    description: 'Gestión integral de alquileres temporales y home staging, maximizando la rentabilidad de tu inversión inmobiliaria. Nos encargamos de todo para que tú disfrutes de los resultados.',
    features: ['Gestión completa', 'Maximización de rentabilidad', 'Atención 24/7', 'Reporting detallado'],
    href: '/servicios/gekko-roomers',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1980&auto=format&fit=crop',
  },
  {
    icon: TrendingUp,
    title: 'Gekko Investment',
    subtitle: 'Inversión Inmobiliaria',
    description: 'Identificamos las mejores oportunidades de inversión inmobiliaria con estrategias optimizadas, seguras y rentables. Análisis de datos real para decisiones inteligentes.',
    features: ['Análisis de oportunidades', 'Due diligence', 'Optimización fiscal', 'Seguimiento de rentabilidad'],
    href: '/servicios/gekko-investment',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
  },
  {
    icon: Wrench,
    title: 'Gekko Refurbishing',
    subtitle: 'Reformas Integrales',
    description: 'Reformas integrales y diseño de interiores siguiendo los principios del feng shui para crear espacios armónicos. Visualización 3D y ejecución impecable.',
    features: ['Reformas llave en mano', 'Diseño de interiores', 'Visualización 3D', 'Feng Shui aplicado'],
    href: '/servicios/gekko-refurbishing',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop',
  },
];

const processSteps = [
  { num: '01', title: 'Consulta Inicial', text: 'Nos reunimos contigo para entender tus necesidades, objetivos y expectativas.' },
  { num: '02', title: 'Análisis y Estrategia', text: 'Analizamos el mercado y diseñamos una estrategia personalizada para tu caso.' },
  { num: '03', title: 'Ejecución', text: 'Implementamos la estrategia con transparencia, manteniéndote informado en cada paso.' },
  { num: '04', title: 'Resultados', text: 'Entregamos resultados medibles que superan tus expectativas.' },
];

export default function ServiciosPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="wrapper">
          <AnimatedSection>
            <span className="subtitle">Lo que hacemos</span>
            <h1 className="title-xl">Nuestros Servicios</h1>
            <div className="gold-line centered" />
            <p className="body-text-lg" style={{ maxWidth: '600px', margin: '0 auto' }}>
              Soluciones inmobiliarias completas respaldadas por experiencia, tecnología y un equipo comprometido con tu éxito.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-white">
        <div className="wrapper">
          <div className="grid-2">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <AnimatedSection key={service.title} delay={i * 0.1}>
                  <Link href={service.href} className="service-card-lg" style={{ height: '100%' }}>
                    <div className="card-image">
                      <img src={service.image} alt={service.title} />
                    </div>
                    <div className="card-body">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                        <div style={{
                          width: '40px', height: '40px', borderRadius: 'var(--radius-md)',
                          backgroundColor: 'var(--color-arena)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}>
                          <Icon size={20} style={{ color: 'var(--color-gold)' }} />
                        </div>
                        <span className="tag tag-gold">{service.subtitle}</span>
                      </div>
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                        {service.features.map((f) => (
                          <span key={f} style={{
                            padding: '4px 12px',
                            backgroundColor: 'var(--color-arena)',
                            borderRadius: '100px',
                            fontSize: '11px',
                            color: 'var(--color-text)',
                            fontWeight: 500,
                          }}>
                            {f}
                          </span>
                        ))}
                      </div>
                      <span className="link-text" style={{
                        color: 'var(--color-gold)',
                        fontSize: '11px',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        fontWeight: 600,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                      }}>
                        Saber más <ArrowRight size={14} />
                      </span>
                    </div>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-arena">
        <div className="wrapper">
          <AnimatedSection>
            <div className="text-center" style={{ marginBottom: '64px' }}>
              <span className="subtitle">CÓMO TRABAJAMOS</span>
              <h2 className="title-lg">Nuestro proceso</h2>
              <div className="gold-line centered" />
              <p className="body-text" style={{ maxWidth: '600px', margin: '0 auto' }}>
                Un enfoque estructurado y transparente que garantiza los mejores resultados.
              </p>
            </div>
          </AnimatedSection>

          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            {processSteps.map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 0.1}>
                <div className="process-step">
                  <span className="step-number">{step.num}</span>
                  <div className="step-content">
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-white" style={{ textAlign: 'center' }}>
        <div className="wrapper">
          <AnimatedSection>
            <span className="subtitle">¿NECESITAS AYUDA?</span>
            <h2 className="title-lg">¿Necesitas asesoramiento?</h2>
            <div className="gold-line centered" />
            <p className="body-text" style={{ maxWidth: '500px', margin: '0 auto 32px' }}>
              Cuéntanos tu proyecto y te ayudaremos a encontrar la mejor solución.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contacto" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                Contactar <ArrowRight size={16} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
