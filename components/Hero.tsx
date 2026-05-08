'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroBullet {
  bold: string;
  text: string;
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
  backgroundImage?: string;
}

export default function Hero({
  title,
  subtitle,
  description,
  bullets,
  primaryCTA,
  secondaryCTA,
  backgroundImage = 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop',
}: HeroProps) {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background image */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }} />

      {/* Dark overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, rgba(10,10,10,0.82) 0%, rgba(26,26,26,0.65) 60%, rgba(10,10,10,0.75) 100%)',
      }} />

      {/* Subtle gold accent line top */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: 'linear-gradient(90deg, transparent, var(--color-gold), transparent)',
        opacity: 0.5,
      }} />

      {/* Content */}
      <div className="wrapper" style={{
        position: 'relative',
        zIndex: 10,
        paddingTop: '140px',
        paddingBottom: '80px',
        maxWidth: '1260px',
      }}>
        <div style={{ maxWidth: '680px' }}>
          {subtitle && (
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                display: 'inline-block',
                color: 'var(--color-gold)',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                marginBottom: '20px',
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              {subtitle}
            </motion.span>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(36px, 5vw, 58px)',
              fontWeight: 600,
              color: '#FFFFFF',
              lineHeight: 1.12,
              marginBottom: '28px',
            }}
          >
            {title}
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{
              width: '50px',
              height: '2px',
              backgroundColor: 'var(--color-gold)',
              marginBottom: '28px',
              transformOrigin: 'left',
            }}
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            style={{
              fontSize: '16px',
              lineHeight: 1.8,
              color: 'rgba(255,255,255,0.75)',
              marginBottom: '32px',
              maxWidth: '560px',
            }}
          >
            {description}
          </motion.p>

          {/* Bullet Points */}
          {bullets && bullets.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                marginBottom: '40px',
              }}
            >
              {bullets.map((bullet, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                  }}
                >
                  <CheckCircle2
                    size={18}
                    style={{ color: 'var(--color-gold)', flexShrink: 0, marginTop: '2px' }}
                  />
                  <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.9)', lineHeight: 1.6, margin: 0 }}>
                    <strong style={{ color: '#FFFFFF', fontWeight: 600 }}>{bullet.bold}</strong>{' '}
                    {bullet.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
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
                className="btn btn-primary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                {primaryCTA.text}
                <ArrowRight size={16} />
              </Link>
            )}
            {secondaryCTA && (
              <Link
                href={secondaryCTA.href}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '16px 40px',
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#FFFFFF',
                  border: '2px solid rgba(255,255,255,0.35)',
                  borderRadius: '4px',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-gold)';
                  e.currentTarget.style.color = 'var(--color-gold)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
              >
                {secondaryCTA.text}
              </Link>
            )}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '120px',
        background: 'linear-gradient(to top, var(--color-bg), transparent)',
        pointerEvents: 'none',
        zIndex: 5,
      }} />
    </section>
  );
}
