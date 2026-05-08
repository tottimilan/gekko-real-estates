'use client';

import Link from 'next/link';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';
import { Shield, Eye, Lightbulb, Heart, Target, Award } from 'lucide-react';

const values = [
  { icon: Shield, title: 'Confianza', text: 'Transparencia y honestidad en cada transacción. Nuestros clientes confían en nosotros porque cumplimos lo que prometemos.' },
  { icon: Eye, title: 'Visión', text: 'Identificamos oportunidades donde otros solo ven inmuebles. Nuestra capacidad analítica nos diferencia.' },
  { icon: Lightbulb, title: 'Innovación', text: 'Utilizamos tecnología de vanguardia y análisis de datos para tomar las mejores decisiones de inversión.' },
  { icon: Heart, title: 'Pasión', text: 'Amamos lo que hacemos. Cada proyecto es una oportunidad para superarnos y ofrecer lo mejor.' },
  { icon: Target, title: 'Resultados', text: 'Nos medimos por los resultados de nuestros clientes. Estrategias optimizadas para la máxima rentabilidad.' },
  { icon: Award, title: 'Excelencia', text: 'Buscamos la excelencia en cada detalle, desde la primera reunión hasta la entrega final del proyecto.' },
];

const milestones = [
  { year: '2010', text: 'Fundación de Gekko Real Estate en Madrid con foco en compraventa residencial.' },
  { year: '2014', text: 'Lanzamiento de Gekko Investment y primeras operaciones de inversión inmobiliaria.' },
  { year: '2018', text: 'Creación de Gekko Roomers para gestión profesional de alquileres temporales.' },
  { year: '2021', text: 'Incorporación de Gekko Refurbishing y visualización arquitectónica 3D.' },
  { year: '2024', text: 'Superamos los 200 propiedades gestionadas y 50M€ en volumen transaccionado.' },
];

export default function NosotrosPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="wrapper">
          <AnimatedSection>
            <span className="subtitle">Quiénes Somos</span>
            <h1 className="title-xl">Sobre Nosotros</h1>
            <div className="gold-line centered" />
            <p className="body-text-lg" style={{ maxWidth: '600px', margin: '0 auto' }}>
              Más de 15 años transformando el mercado inmobiliario de Madrid con pasión, tecnología y compromiso.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story Section */}
      <section className="section bg-white">
        <div className="wrapper">
          <div className="grid-2" style={{ alignItems: 'center', gap: '64px' }}>
            <AnimatedSection>
              <div style={{ position: 'relative', aspectRatio: '4/3', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
                <Image
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop"
                  alt="Gekko Real Estates oficina"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div>
                <span className="subtitle">NUESTRA HISTORIA</span>
                <h2 className="title-lg">Hacemos realidad tu proyecto</h2>
                <div className="gold-line" />
                <p className="body-text" style={{ marginBottom: '20px' }}>
                  Desde la experiencia que nos permite conocer en qué punto se encuentra el mercado para hacerlo realidad: comprar, vender, arrendar, compartir.
                </p>
                <p className="body-text" style={{ marginBottom: '20px' }}>
                  Colaboramos con un equipo fuerte que te apoya desde la confianza en todos los servicios que necesitas. Nuestro enfoque integral nos permite cubrir todas las necesidades de nuestros clientes.
                </p>
                <p className="body-text">
                  Confiamos en las buenas vibraciones y la energía que emana de las cosas bien hechas, por eso te ayudamos a reformar y amueblar tu espacio conforme a los principios del feng shui para una armonía total.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-arena">
        <div className="wrapper">
          <div className="grid-2" style={{ gap: '48px' }}>
            <AnimatedSection>
              <div style={{
                backgroundColor: 'var(--color-white)',
                padding: '48px',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-md)',
                height: '100%',
                borderTop: '3px solid var(--color-gold)',
              }}>
                <span className="subtitle">MISIÓN</span>
                <h3 className="title-md">Hacer accesible la inversión inmobiliaria inteligente</h3>
                <p className="body-text">
                  Nuestra misión es democratizar el acceso a oportunidades inmobiliarias de calidad, proporcionando a nuestros clientes las herramientas, el conocimiento y el acompañamiento necesarios para tomar decisiones de inversión informadas y rentables.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div style={{
                backgroundColor: 'var(--color-white)',
                padding: '48px',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-md)',
                height: '100%',
                borderTop: '3px solid var(--color-gold)',
              }}>
                <span className="subtitle">VISIÓN</span>
                <h3 className="title-md">Ser referente en el mercado inmobiliario español</h3>
                <p className="body-text">
                  Aspiramos a ser la referencia en inversión y gestión inmobiliaria en España, reconocidos por nuestra innovación, transparencia y la satisfacción excepcional de nuestros clientes. Queremos transformar la manera en que las personas interactúan con el mercado inmobiliario.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-white">
        <div className="wrapper">
          <AnimatedSection>
            <div className="text-center" style={{ marginBottom: '64px' }}>
              <span className="subtitle">Nuestros Valores</span>
              <h2 className="title-lg">Por qué elegirnos</h2>
              <div className="gold-line centered" />
              <p className="body-text" style={{ maxWidth: '600px', margin: '0 auto' }}>
                Nuestros valores definen quiénes somos y cómo trabajamos con cada cliente.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid-3">
            {values.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.08}>
                <div className="value-card" style={{ height: '100%' }}>
                  <div className="value-icon">
                    <item.icon size={22} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-arena">
        <div className="wrapper">
          <AnimatedSection>
            <div className="text-center" style={{ marginBottom: '64px' }}>
              <span className="subtitle">Trayectoria</span>
              <h2 className="title-lg">Nuestra historia</h2>
              <div className="gold-line centered" />
            </div>
          </AnimatedSection>

          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            {milestones.map((milestone, i) => (
              <AnimatedSection key={milestone.year} delay={i * 0.1}>
                <div className="process-step">
                  <span className="step-number">{milestone.year}</span>
                  <div className="step-content">
                    <p style={{ paddingTop: '14px' }}>{milestone.text}</p>
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
            <span className="subtitle">¿QUIERES SABER MÁS?</span>
            <h2 className="title-lg">¿Hablamos?</h2>
            <div className="gold-line centered" />
            <p className="body-text" style={{ maxWidth: '500px', margin: '0 auto 32px' }}>
              Estaremos encantados de conocerte y descubrir cómo podemos ayudarte a alcanzar tus objetivos inmobiliarios.
            </p>
            <Link href="/contacto" className="btn btn-primary">
              Contactar
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
