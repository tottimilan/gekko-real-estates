'use client';

import Hero from '@/components/Hero';
import AnimatedSection from '@/components/AnimatedSection';
import Link from 'next/link';
import { Home, Users, TrendingUp, Hammer, ArrowRight, Shield, Eye, Lightbulb, Heart } from 'lucide-react';
import { getLatestPosts } from '@/lib/blog-data';

const stats = [
  { number: '15+', label: 'Años de experiencia' },
  { number: '200+', label: 'Propiedades gestionadas' },
  { number: '98%', label: 'Clientes satisfechos' },
  { number: '50M€', label: 'Volumen transaccionado' },
];

const services = [
  {
    icon: Home,
    title: 'Gekko Home',
    description: 'Gestión integral de compraventa y alquileres seguros con las mejores herramientas técnicas y legales.',
    href: '/servicios/gekko-home',
  },
  {
    icon: Users,
    title: 'Gekko Roomers',
    description: 'Gestión de alquileres temporales y home staging para maximizar la rentabilidad de tu propiedad.',
    href: '/servicios/gekko-roomers',
  },
  {
    icon: TrendingUp,
    title: 'Gekko Investment',
    description: 'Oportunidades de inversión respaldadas por experiencia, tecnología y profundo conocimiento del mercado.',
    href: '/servicios/gekko-investment',
  },
  {
    icon: Hammer,
    title: 'Gekko Refurbishing',
    description: 'Reformas integrales y visualización 3D con los más altos estándares de calidad y diseño.',
    href: '/servicios/gekko-refurbishing',
  },
];

const values = [
  { icon: Shield, title: 'Confianza', text: 'Transparencia y honestidad en cada transacción que realizamos.' },
  { icon: Eye, title: 'Visión', text: 'Identificamos oportunidades donde otros ven solo inmuebles.' },
  { icon: Lightbulb, title: 'Innovación', text: 'Tecnología y datos al servicio de decisiones inteligentes.' },
  { icon: Heart, title: 'Compromiso', text: 'Tu éxito es nuestro éxito. Te acompañamos en cada paso.' },
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
        description="Inmobiliaria, inversión y reformas en Madrid. Para los que compran, los que invierten y los que reforman. Para los que valoran que las cosas se hagan bien."
        primaryCTA={{
          text: 'Ver servicios',
          href: '/servicios',
        }}
        secondaryCTA={{
          text: 'Hablamos',
          href: '/contacto',
        }}
      />

      {/* Stats Section */}
      <section style={{ backgroundColor: 'var(--color-white)', padding: '0' }}>
        <div className="wrapper">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            borderTop: '1px solid var(--color-border)',
            borderBottom: '1px solid var(--color-border)',
          }}>
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1}>
                <div className="stat-card" style={{
                  borderRight: (i % 2 === 0) ? '1px solid var(--color-border)' : 'none',
                  borderBottom: (i < 2) ? '1px solid var(--color-border)' : 'none',
                }}>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="section bg-white">
        <div className="wrapper">
          <AnimatedSection>
            <div style={{
              maxWidth: '800px',
              margin: '0 auto',
              textAlign: 'center',
            }}>
              <p style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '28px',
                lineHeight: 1.6,
                color: 'var(--color-text)',
                fontStyle: 'italic',
                marginBottom: '16px',
              }}>
                &ldquo;Nuestro compromiso es asegurarnos que puedes fluir satisfactoriamente en transacciones de Real Estate con confianza, tranquilidad y disfrutando del proceso.&rdquo;
              </p>
              <div className="gold-line centered" />
              <p style={{
                fontSize: '14px',
                color: 'var(--color-gold)',
                fontWeight: 500,
                marginTop: '24px',
              }}>
                Our goal is to make sure you can successfully navigate Real Estate transactions with confidence and peace of mind.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* About Section */}
      <section className="section bg-arena">
        <div className="wrapper">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <AnimatedSection>
              <div>
                <span className="subtitle">QUIÉNES SOMOS</span>
                <h2 className="title-lg">Gekko Real Estate Investment & Properties Management</h2>
                <div className="gold-line" />
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
            <AnimatedSection delay={0.2}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '16px',
              }}>
                {values.map((value) => (
                  <div key={value.title} className="value-card">
                    <div className="value-icon">
                      <value.icon size={22} />
                    </div>
                    <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>{value.title}</h3>
                    <p style={{ fontSize: '13px' }}>{value.text}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white">
        <div className="wrapper">
          <AnimatedSection>
            <div className="text-center" style={{ marginBottom: '64px' }}>
              <span className="subtitle">NUESTROS SERVICIOS</span>
              <h2 className="title-lg">Soluciones inmobiliarias completas</h2>
              <div className="gold-line centered" />
              <p className="body-text" style={{ maxWidth: '600px', margin: '0 auto' }}>
                Ofrecemos una gama completa de servicios diseñados para satisfacer todas tus necesidades inmobiliarias.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid-4">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.1}>
                <Link href={service.href} className="service-card" style={{ height: '100%' }}>
                  <service.icon className="icon" />
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <span className="link-text">Explorar más →</span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="section bg-arena">
        <div className="wrapper">
          <div className="grid-2" style={{ alignItems: 'center', gap: '64px' }}>
            <AnimatedSection>
              <div>
                <span className="subtitle">INVERSIÓN INTELIGENTE</span>
                <h2 className="title-lg">Identificamos Oportunidades de Inversión</h2>
                <div className="gold-line" />
                <p className="body-text" style={{ marginBottom: '20px' }}>
                  Nuestra fortaleza radica en el control absoluto y propio de todo el ciclo de inversión, respaldado por una sólida experiencia, el dominio de la tecnología y un profundo conocimiento del mercado.
                </p>
                <p className="body-text" style={{ marginBottom: '32px' }}>
                  Nuestro modelo abarca cada etapa del proceso: desde la adquisición y renovación de propiedades hasta su alquiler y venta.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
                  {[
                    'Control total del ciclo de inversión',
                    'Tecnología avanzada de análisis',
                    'Experiencia consolidada en el mercado',
                    'Estrategias optimizadas y rentables',
                  ].map((item) => (
                    <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{
                        width: '24px', height: '24px', borderRadius: '50%',
                        backgroundColor: 'rgba(168, 131, 41, 0.1)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexShrink: 0,
                      }}>
                        <span style={{ color: 'var(--color-gold)', fontSize: '12px', fontWeight: 700 }}>✓</span>
                      </div>
                      <span style={{ fontSize: '14px', color: 'var(--color-text)' }}>{item}</span>
                    </div>
                  ))}
                </div>

                <Link href="/servicios/gekko-investment" className="btn btn-primary">
                  Explorar oportunidades
                </Link>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div style={{
                backgroundColor: 'var(--color-white)',
                padding: '40px',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-md)',
              }}>
                <h3 style={{ fontSize: '24px', marginBottom: '24px' }}>Visualización Arquitectónica 3D</h3>
                <p className="body-text" style={{ marginBottom: '24px' }}>
                  Estamos especializados en visualización arquitectónica 3D de alta calidad para diversos tipos de proyectos:
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  {['Villas de Lujo', 'Viviendas', 'Residenciales', 'Rehabilitación', 'Hoteles', 'Proyectos Urbanos'].map((item) => (
                    <div key={item} style={{
                      padding: '12px 16px',
                      backgroundColor: 'var(--color-arena)',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '13px',
                      color: 'var(--color-text)',
                      fontWeight: 500,
                    }}>
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
            <div className="text-center" style={{ marginBottom: '64px' }}>
              <span className="subtitle">TESTIMONIOS</span>
              <h2 className="title-lg">Lo que dicen nuestros clientes</h2>
              <div className="gold-line centered" />
            </div>
          </AnimatedSection>

          <div className="grid-3">
            {testimonials.map((testimonial, i) => (
              <AnimatedSection key={testimonial.name} delay={i * 0.1}>
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
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <span className="subtitle">GEKKO BLOG</span>
                <h2 className="title-lg" style={{ marginBottom: '0' }}>Últimas publicaciones</h2>
              </div>
              <Link href="/blog" className="btn btn-secondary" style={{ padding: '12px 28px' }}>
                Ver todos los artículos
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid-3">
            {latestPosts.map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 0.1}>
                <Link href={`/blog/${post.slug}`} className="blog-card" style={{ height: '100%' }}>
                  <div className="blog-image">
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
            <span className="subtitle">¿LISTO PARA EMPEZAR?</span>
            <h2 className="title-lg" style={{ maxWidth: '800px', margin: '0 auto 16px' }}>
              En Gekko Real Estate encontrarás un equipo profesional y dedicado
            </h2>
            <div className="gold-line centered" />
            <p className="body-text-lg" style={{ maxWidth: '650px', margin: '0 auto 40px' }}>
              Dispuestos a brindarte una atención personalizada excepcional. Contáctanos hoy y descubre cómo podemos ayudarte.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contacto" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                Contáctanos ahora
                <ArrowRight size={16} />
              </Link>
              <Link href="/servicios" className="btn btn-secondary">
                Ver todos los servicios
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
