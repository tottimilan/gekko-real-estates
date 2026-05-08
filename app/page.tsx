'use client';

import Hero from '@/components/Hero';
import AnimatedSection from '@/components/AnimatedSection';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getLatestPosts } from '@/lib/blog-data';

const stats = [
  { number: '15+', label: 'Años de experiencia' },
  { number: '200+', label: 'Propiedades gestionadas' },
  { number: '98%', label: 'Clientes satisfechos' },
  { number: '50M€', label: 'Volumen transaccionado' },
];

const servicesBlocks = [
  {
    tag: 'Compraventa & Alquiler',
    title: 'Gekko Home',
    tagline: 'Tu casa, sin sustos. Compra, vende, alquila con todo bien atado.',
    href: '/servicios/gekko-home',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1400&auto=format&fit=crop',
  },
  {
    tag: 'Alquiler temporal',
    title: 'Gekko Roomers',
    tagline: 'Pisos y habitaciones bien gestionadas. Sin drama de inquilinos.',
    href: '/servicios/gekko-roomers',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1400&auto=format&fit=crop',
  },
  {
    tag: 'Inversión',
    title: 'Gekko Investment',
    tagline: 'Buscamos la oportunidad. Tú decides. Datos reales, no humo.',
    href: '/servicios/gekko-investment',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1400&auto=format&fit=crop',
  },
  {
    tag: 'Reformas',
    title: 'Gekko Refurbishing',
    tagline: 'De obsoleto a precioso. Reformas integrales con visualización 3D.',
    href: '/servicios/gekko-refurbishing',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1400&auto=format&fit=crop',
  },
];

const values = [
  { title: 'Confianza', text: 'Transparencia y honestidad en cada transacción que realizamos.' },
  { title: 'Visión', text: 'Identificamos oportunidades donde otros ven solo inmuebles.' },
  { title: 'Innovación', text: 'Tecnología y datos al servicio de decisiones inteligentes.' },
  { title: 'Compromiso', text: 'Tu éxito es nuestro éxito. Te acompañamos en cada paso.' },
];

const testimonials = [
  {
    text: 'Gekko nos acompañó en la compra de nuestra primera vivienda. Su profesionalidad y conocimiento del mercado nos dieron la seguridad que necesitábamos para tomar la mejor decisión.',
    name: 'María González',
    role: 'Compradora de vivienda',
    initials: 'MG',
  },
  {
    text: 'Gracias a Gekko Investment, mi cartera inmobiliaria genera una rentabilidad que nunca imaginé. Su análisis de datos y asesoramiento son excepcionales.',
    name: 'Carlos Ruiz',
    role: 'Inversor inmobiliario',
    initials: 'CR',
  },
  {
    text: 'La reforma de nuestro piso fue impecable. El equipo de Gekko Refurbishing transformó completamente el espacio, siguiendo los principios del feng shui que tanto valoramos.',
    name: 'Ana y Pedro Martín',
    role: 'Propietarios en Chamberí',
    initials: 'AM',
  },
];

export default function HomePage() {
  const latestPosts = getLatestPosts(3);

  return (
    <main>
      <Hero
        subtitle="GEKKO REAL ESTATE · MADRID"
        title="Hola Madrid."
        description="Inmobiliaria, inversión y reformas en Madrid. Para los que compran, para los que invierten, para los que reforman. Para los que valoran que las cosas se hagan bien."
      />

      {/* Stats Section */}
      <section style={{ backgroundColor: 'var(--color-white)', padding: '0' }}>
        <div className="wrapper">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              borderTop: '1px solid var(--color-border)',
              borderBottom: '1px solid var(--color-border)',
            }}
            className="stats-grid"
          >
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.08}>
                <div
                  className="stat-card"
                  style={{
                    borderRight: i % 2 === 0 ? '1px solid var(--color-border)' : 'none',
                    borderBottom: i < 2 ? '1px solid var(--color-border)' : 'none',
                  }}
                >
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section — editorial sans, no serif */}
      <section className="section bg-white">
        <div className="wrapper">
          <AnimatedSection>
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <span
                aria-hidden
                style={{
                  display: 'inline-block',
                  width: '32px',
                  height: '2px',
                  backgroundColor: 'var(--color-sage)',
                  marginBottom: '32px',
                }}
              />
              <p
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: 'clamp(22px, 2.6vw, 34px)',
                  lineHeight: 1.35,
                  color: 'var(--color-black)',
                  fontWeight: 600,
                  letterSpacing: '-0.02em',
                  marginBottom: '24px',
                }}
              >
                Te ayudamos a moverte por el mercado inmobiliario de Madrid con confianza, tranquilidad y la sensación de tenerlo todo bien atado.
              </p>
              <p
                style={{
                  fontSize: '13px',
                  color: 'var(--color-text-light)',
                  fontWeight: 500,
                  letterSpacing: '0.01em',
                }}
              >
                Comprar, vender, invertir, reformar. Lo que toque, lo hacemos bien.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* About Section — editorial list (no value-cards) */}
      <section className="section bg-arena">
        <div className="wrapper">
          <div className="grid-2" style={{ alignItems: 'start', gap: '64px' }}>
            <AnimatedSection>
              <div>
                <span className="eyebrow">Quiénes somos</span>
                <h2 className="title-lg" style={{ marginTop: '8px' }}>
                  Gekko Real Estate Investment & Properties Management
                </h2>
                <div className="accent-line" />
                <p className="body-text" style={{ marginBottom: '20px' }}>
                  Hacemos realidad tu proyecto desde la experiencia que nos permite conocer en qué punto se encuentra el mercado: comprar, vender, arrendar, compartir.
                </p>
                <p className="body-text" style={{ marginBottom: '20px' }}>
                  Colaboramos con un equipo fuerte que te apoya desde la confianza en todos los servicios que necesitas.
                </p>
                <p className="body-text" style={{ marginBottom: '32px' }}>
                  Confiamos en las buenas vibraciones y la energía que emana de las cosas bien hechas.
                </p>
                <Link href="/nosotros" className="btn btn-primary">
                  Conoce más sobre nosotros
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div>
                <span className="eyebrow" style={{ marginBottom: '20px' }}>
                  Cómo trabajamos
                </span>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {values.map((v, i) => (
                    <li
                      key={v.title}
                      style={{
                        padding: '24px 0',
                        borderBottom:
                          i < values.length - 1 ? '1px solid rgba(0,0,0,0.1)' : 'none',
                        display: 'grid',
                        gridTemplateColumns: '180px 1fr',
                        gap: '24px',
                        alignItems: 'baseline',
                      }}
                    >
                      <h3
                        style={{
                          fontFamily: "'Manrope', sans-serif",
                          fontWeight: 800,
                          fontSize: '22px',
                          letterSpacing: '-0.02em',
                          color: 'var(--color-black)',
                          margin: 0,
                        }}
                      >
                        {v.title}
                      </h3>
                      <p
                        style={{
                          fontSize: '15px',
                          lineHeight: 1.55,
                          color: 'var(--color-text)',
                          margin: 0,
                          fontWeight: 500,
                        }}
                      >
                        {v.text}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section — Big nav blocks (Gekko House style) */}
      <section style={{ backgroundColor: 'var(--color-bg)', padding: '40px 0 93px' }}>
        <div className="wrapper" style={{ maxWidth: '1320px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            {servicesBlocks.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.08}>
                <Link
                  href={service.href}
                  style={{
                    position: 'relative',
                    display: 'block',
                    aspectRatio: '4 / 5',
                    overflow: 'hidden',
                    borderRadius: '0',
                    backgroundColor: 'var(--color-arena)',
                  }}
                  className="nav-block"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={service.image}
                    alt={service.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.6s ease, filter 0.4s ease',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'linear-gradient(180deg, rgba(0,0,0,0.0) 30%, rgba(0,0,0,0.55) 100%)',
                      transition: 'background 0.4s ease',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      left: '24px',
                      right: '24px',
                      bottom: '24px',
                      color: '#FFFFFF',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Manrope', sans-serif",
                        fontSize: '11px',
                        fontWeight: 700,
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        opacity: 0.85,
                        display: 'block',
                        marginBottom: '8px',
                      }}
                    >
                      {service.tag}
                    </span>
                    <h3
                      className="nav-block-link"
                      style={{
                        color: '#FFFFFF',
                        marginBottom: '8px',
                        fontSize: 'clamp(28px, 3vw, 44px)',
                      }}
                    >
                      {service.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'Manrope', sans-serif",
                        fontSize: '13px',
                        lineHeight: 1.5,
                        color: 'rgba(255,255,255,0.85)',
                        fontWeight: 500,
                        margin: 0,
                        maxWidth: '280px',
                      }}
                    >
                      {service.tagline}
                    </p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <style jsx>{`
            .nav-block:hover img {
              transform: scale(1.06);
            }
            .nav-block:hover > div:nth-child(2) {
              background: linear-gradient(180deg, rgba(0,0,0,0.0) 10%, rgba(0,0,0,0.7) 100%);
            }
          `}</style>
        </div>
      </section>

      {/* Investment Section */}
      <section className="section bg-arena">
        <div className="wrapper">
          <div className="grid-2" style={{ alignItems: 'center', gap: '64px' }}>
            <AnimatedSection>
              <div>
                <span className="eyebrow">Inversión inteligente</span>
                <h2 className="title-lg" style={{ marginTop: '8px' }}>
                  Identificamos oportunidades de inversión
                </h2>
                <div className="accent-line" />
                <p className="body-text" style={{ marginBottom: '20px' }}>
                  Nuestra fortaleza está en controlar todo el ciclo de inversión: experiencia, datos y conocimiento profundo del mercado madrileño.
                </p>
                <p className="body-text" style={{ marginBottom: '24px' }}>
                  Cubrimos cada etapa: desde la adquisición y renovación de propiedades hasta su alquiler y venta.
                </p>

                <ul className="feature-list">
                  <li>Control total del ciclo de inversión</li>
                  <li>Tecnología avanzada de análisis</li>
                  <li>Experiencia consolidada en el mercado</li>
                  <li>Estrategias optimizadas y rentables</li>
                </ul>

                <Link href="/servicios/gekko-investment" className="btn btn-primary">
                  Explorar oportunidades
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div
                style={{
                  backgroundColor: 'var(--color-white)',
                  padding: '36px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <span className="eyebrow">Visualización 3D</span>
                <h3
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontWeight: 800,
                    letterSpacing: '-0.02em',
                    fontSize: '24px',
                    marginTop: '8px',
                    marginBottom: '16px',
                  }}
                >
                  Arquitectura 3D de alta calidad
                </h3>
                <p className="body-text" style={{ marginBottom: '24px', fontSize: '14px' }}>
                  Visualizamos cada proyecto antes de tocar una pared. Para que tomes decisiones con todo claro:
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  {[
                    'Villas de Lujo',
                    'Viviendas',
                    'Residenciales',
                    'Rehabilitación',
                    'Hoteles',
                    'Proyectos Urbanos',
                  ].map((item) => (
                    <div
                      key={item}
                      style={{
                        padding: '12px 14px',
                        backgroundColor: 'var(--color-arena)',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '13px',
                        color: 'var(--color-text)',
                        fontWeight: 600,
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-white">
        <div className="wrapper">
          <AnimatedSection>
            <div className="text-center" style={{ marginBottom: '56px' }}>
              <span className="eyebrow">Testimonios</span>
              <h2 className="title-lg" style={{ marginTop: '8px' }}>
                Lo que dicen quienes ya nos conocen
              </h2>
              <div className="accent-line centered" />
            </div>
          </AnimatedSection>

          <div className="grid-3">
            {testimonials.map((testimonial, i) => (
              <AnimatedSection key={testimonial.name} delay={i * 0.08}>
                <div className="testimonial-card" style={{ height: '100%' }}>
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="testimonial-author">
                    <div className="author-avatar">{testimonial.initials}</div>
                    <div className="author-info">
                      <h4>{testimonial.name}</h4>
                      <p>{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="section bg-arena">
        <div className="wrapper">
          <AnimatedSection>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                marginBottom: '48px',
                flexWrap: 'wrap',
                gap: '16px',
              }}
            >
              <div>
                <span className="eyebrow">Gekko Blog</span>
                <h2 className="title-lg" style={{ marginTop: '8px', marginBottom: 0 }}>
                  Últimas publicaciones
                </h2>
              </div>
              <Link href="/blog" className="btn btn-outline-dark" style={{ padding: '12px 24px' }}>
                Ver todos los artículos
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid-3">
            {latestPosts.map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 0.08}>
                <Link href={`/blog/${post.slug}`} className="blog-card" style={{ height: '100%' }}>
                  <div className="blog-image">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={post.image} alt={post.title} />
                  </div>
                  <div className="blog-body">
                    <span className="blog-category">{post.category}</span>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <div className="blog-meta">
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{post.readTime} de lectura</span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-white" style={{ textAlign: 'center' }}>
        <div className="wrapper">
          <AnimatedSection>
            <span className="eyebrow">¿Listo para empezar?</span>
            <h2
              className="title-lg"
              style={{ maxWidth: '820px', margin: '8px auto 16px' }}
            >
              En Gekko Real Estate encontrarás un equipo profesional y dedicado
            </h2>
            <div className="accent-line centered" />
            <p
              className="body-text-lg"
              style={{ maxWidth: '650px', margin: '0 auto 40px' }}
            >
              Atención personalizada y datos reales. Cuéntanos qué necesitas y empezamos.
            </p>
            <div
              style={{
                display: 'flex',
                gap: '12px',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Link
                href="/contacto"
                className="btn btn-primary"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                Contáctanos ahora
                <ArrowRight size={16} />
              </Link>
              <Link href="/servicios" className="btn btn-outline-dark">
                Ver todos los servicios
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
