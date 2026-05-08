'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroBullet {
  bold: string;
  text: string;
}

interface HeroImage {
  src: string;
  alt: string;
  caption?: string;
}

interface HeroProps {
  title: string;
  subtitle?: string;
  description: string;
  bullets?: HeroBullet[];
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  images?: HeroImage[];
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

export default function Hero({
  title,
  subtitle = 'GEKKO REAL ESTATE · MADRID',
  description,
  primaryCTA,
  secondaryCTA,
  images = defaultImages,
}: HeroProps) {
  return (
    <section
      style={{
        position: 'relative',
        backgroundColor: 'var(--color-bg)',
        paddingTop: '160px',
        paddingBottom: '120px',
        overflow: 'hidden',
      }}
    >
      {/* Subtle texture / grid background */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)',
          backgroundSize: '32px 32px',
          opacity: 0.5,
          pointerEvents: 'none',
        }}
      />

      <div
        className="wrapper"
        style={{ position: 'relative', zIndex: 1, maxWidth: '1320px' }}
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
              backgroundColor: 'var(--color-gold)',
            }}
          />
          <span className="eyebrow">{subtitle}</span>
        </motion.div>

        {/* Mega heading */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="title-mega"
          style={{
            maxWidth: '1100px',
            marginBottom: '40px',
          }}
        >
          {title}
        </motion.h1>

        {/* Editorial body + CTAs row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '32px',
            alignItems: 'end',
            maxWidth: '1100px',
            marginBottom: '80px',
          }}
        >
          <p
            className="editorial-lead"
            style={{
              maxWidth: '640px',
              margin: 0,
            }}
          >
            {description}
          </p>

          {(primaryCTA || secondaryCTA) && (
            <div
              style={{
                display: 'flex',
                gap: '14px',
                flexWrap: 'wrap',
                alignItems: 'center',
              }}
            >
              {primaryCTA && (
                <Link
                  href={primaryCTA.href}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '16px 28px',
                    backgroundColor: 'var(--color-black)',
                    color: 'var(--color-white)',
                    fontSize: '13px',
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    borderRadius: '999px',
                    transition: 'all 0.3s ease',
                    fontFamily: "'Inter', sans-serif",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--color-gold)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--color-black)';
                  }}
                >
                  {primaryCTA.text}
                  <ArrowRight size={14} />
                </Link>
              )}
              {secondaryCTA && (
                <Link
                  href={secondaryCTA.href}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '16px 28px',
                    color: 'var(--color-black)',
                    fontSize: '13px',
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    borderRadius: '999px',
                    border: '1px solid var(--color-black)',
                    transition: 'all 0.3s ease',
                    fontFamily: "'Inter', sans-serif",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--color-black)';
                    e.currentTarget.style.color = 'var(--color-white)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = 'var(--color-black)';
                  }}
                >
                  {secondaryCTA.text}
                </Link>
              )}
            </div>
          )}
        </motion.div>

        {/* Moodboard gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
          }}
        >
          {images.map((img, i) => {
            const rotations = ['-2deg', '1.5deg', '-1deg', '2deg'];
            const rotation = rotations[i % rotations.length];
            const offsets = ['0px', '24px', '0px', '32px'];
            const offset = offsets[i % offsets.length];
            return (
              <motion.figure
                key={img.src}
                initial={{ opacity: 0, y: 30, rotate: '0deg' }}
                animate={{ opacity: 1, y: 0, rotate: rotation }}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                whileHover={{ rotate: '0deg', y: -6 }}
                style={{
                  marginTop: offset,
                  backgroundColor: 'var(--color-white)',
                  padding: '12px 12px 16px',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.08)',
                  transition: 'transform 0.4s ease',
                  transformOrigin: 'center top',
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
                      marginTop: '12px',
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '12px',
                      lineHeight: 1.5,
                      color: 'var(--color-text-light)',
                      letterSpacing: '0.01em',
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
  );
}
