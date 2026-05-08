'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface HeroImage {
  src: string;
  alt: string;
  caption?: string;
}

interface HeroNavLink {
  label: string;
  href: string;
}

interface HeroProps {
  title: string;
  subtitle?: string;
  description: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  images?: HeroImage[];
  navLinks?: HeroNavLink[];
}

const defaultImages: HeroImage[] = [
  {
    src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1400&auto=format&fit=crop',
    alt: 'Salón luminoso con grandes ventanales',
    caption: 'Living: luz natural, suelos de madera, encanto madrileño.',
  },
  {
    src: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200&auto=format&fit=crop',
    alt: 'Cocina moderna abierta al salón',
    caption: 'Cocina abierta: el sitio donde de verdad se vive.',
  },
  {
    src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200&auto=format&fit=crop',
    alt: 'Edificio clásico de Madrid',
    caption: 'Madrid, sus barrios, su gente. Aquí jugamos en casa.',
  },
];

const defaultNavLinks: HeroNavLink[] = [
  { label: 'Gekko Home', href: '/servicios/gekko-home' },
  { label: 'Gekko Roomers', href: '/servicios/gekko-roomers' },
  { label: 'Gekko Investment', href: '/servicios/gekko-investment' },
  { label: 'Gekko Refurbishing', href: '/servicios/gekko-refurbishing' },
];

export default function Hero({
  title,
  subtitle = 'GEKKO REAL ESTATE · MADRID',
  description,
  images = defaultImages,
  navLinks = defaultNavLinks,
}: HeroProps) {
  return (
    <>
      {/* SECTION 1 — Photo moodboard (the photo IS the hero) */}
      <section
        style={{
          position: 'relative',
          backgroundColor: 'var(--color-bg)',
          paddingTop: '140px', // 40 top strip + ~80 bottom + breathing room
          paddingBottom: '40px',
          overflow: 'hidden',
        }}
      >
        <div
          className="wrapper"
          style={{ position: 'relative', maxWidth: '1320px' }}
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '28px',
            }}
          >
            <span
              style={{
                width: '32px',
                height: '1px',
                backgroundColor: 'var(--color-sage-dark)',
              }}
            />
            <span className="eyebrow">{subtitle}</span>
          </motion.div>

          {/* Moodboard gallery */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            {images.map((img, i) => {
              const rotations = ['-2deg', '1.5deg', '-1deg', '2deg'];
              const rotation = rotations[i % rotations.length];
              const offsets = ['0px', '32px', '0px', '40px'];
              const offset = offsets[i % offsets.length];
              return (
                <motion.figure
                  key={img.src}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0, rotate: rotation }}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                  whileHover={{ rotate: '0deg', y: -6, scale: 1.02 }}
                  style={{
                    marginTop: offset,
                    backgroundColor: '#FFFFFF',
                    padding: '14px 14px 18px',
                    boxShadow: '0 12px 40px rgba(0,0,0,0.10)',
                    transformOrigin: 'center top',
                    cursor: 'default',
                  }}
                >
                  <div
                    style={{
                      aspectRatio: '4 / 5',
                      overflow: 'hidden',
                      backgroundColor: 'var(--color-arena)',
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img.src}
                      alt={img.alt}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                    />
                  </div>
                  {img.caption && (
                    <figcaption
                      style={{
                        marginTop: '14px',
                        fontFamily: "'Manrope', sans-serif",
                        fontSize: '12.5px',
                        lineHeight: 1.45,
                        color: 'var(--color-text-light)',
                        letterSpacing: '0.01em',
                        fontWeight: 500,
                      }}
                    >
                      {img.caption}
                    </figcaption>
                  )}
                </motion.figure>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — Editorial intro: mega heading + lead + side nav */}
      <section
        style={{
          backgroundColor: 'var(--color-bg)',
          padding: '93px 0',
          overflow: 'hidden',
        }}
      >
        <div
          className="wrapper"
          style={{ maxWidth: '1320px' }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '64px',
              alignItems: 'start',
            }}
          >
            {/* LEFT: heading + description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                gridColumn: '1 / -1',
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '40px',
              }}
              className="hero-grid"
            >
              <div style={{ maxWidth: '900px' }}>
                <h1 className="title-mega" style={{ marginBottom: '32px' }}>
                  {title}
                </h1>
                <p
                  className="editorial-lead"
                  style={{ maxWidth: '640px', margin: 0 }}
                >
                  {description}
                </p>
              </div>

              {/* RIGHT: side nav (4 services) */}
              <nav
                aria-label="Servicios"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  borderTop: '1px solid rgba(0,0,0,0.12)',
                  paddingTop: '24px',
                }}
              >
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '18px 0',
                        borderBottom: '1px solid rgba(0,0,0,0.12)',
                        fontFamily: "'Manrope', sans-serif",
                        fontWeight: 800,
                        fontSize: 'clamp(20px, 2.2vw, 28px)',
                        letterSpacing: '-0.02em',
                        color: 'var(--color-black)',
                        transition: 'color 0.2s ease, padding 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'var(--color-sage-dark)';
                        e.currentTarget.style.paddingLeft = '12px';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--color-black)';
                        e.currentTarget.style.paddingLeft = '0px';
                      }}
                    >
                      <span>{link.label}</span>
                      <span
                        aria-hidden
                        style={{
                          fontWeight: 400,
                          fontSize: '20px',
                          color: 'var(--color-text-muted)',
                        }}
                      >
                        →
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @media (min-width: 900px) {
          .hero-grid {
            grid-template-columns: 1.4fr 1fr !important;
            gap: 80px !important;
          }
        }
      `}</style>
    </>
  );
}
