'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Mail, MapPin, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const primaryLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/blog', label: 'Blog' },
  { href: '/contacto', label: 'Contacto' },
];

const serviceLinks = [
  { href: '/servicios/gekko-home', label: 'Gekko Home' },
  { href: '/servicios/gekko-roomers', label: 'Gekko Roomers' },
  { href: '/servicios/gekko-investment', label: 'Gekko Investment' },
  { href: '/servicios/gekko-refurbishing', label: 'Gekko Refurbishing' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when overlay open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          backgroundColor: '#FFFFFF',
          borderBottom: isScrolled ? '1px solid rgba(0,0,0,0.06)' : '1px solid transparent',
          transition: 'border-color 0.3s ease',
        }}
      >
        <div
          style={{
            height: isScrolled ? '64px' : '80px',
            padding: '0 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'relative',
            transition: 'height 0.3s ease',
            maxWidth: '1424px',
            margin: '0 auto',
          }}
        >
          {/* LEFT: Burger (always visible, also desktop) */}
          <button
            onClick={() => setIsMenuOpen(true)}
            aria-label="Abrir menú"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '8px 4px',
              color: 'var(--color-black)',
              border: 'none',
              background: 'none',
              fontFamily: "'Manrope', sans-serif",
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-sage-dark)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-black)')}
          >
            <Menu size={20} strokeWidth={2.2} />
            <span className="desktop-only" style={{ display: 'none' }}>
              Menú
            </span>
          </button>

          {/* CENTER: Logo */}
          <Link
            href="/"
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Image
              src="/images/logo-gekko.svg"
              alt="Gekko Real Estates"
              width={isScrolled ? 92 : 110}
              height={isScrolled ? 46 : 54}
              style={{ height: 'auto', transition: 'all 0.3s ease' }}
              priority
            />
          </Link>

          {/* RIGHT: CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Link
              href="/contacto"
              className="desktop-only"
              style={{
                display: 'none',
                padding: '10px 22px',
                color: 'var(--color-black)',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                fontFamily: "'Manrope', sans-serif",
                border: '1.5px solid var(--color-black)',
                borderRadius: '999px',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-sage)';
                e.currentTarget.style.borderColor = 'var(--color-sage)';
                e.currentTarget.style.color = 'var(--color-white)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.borderColor = 'var(--color-black)';
                e.currentTarget.style.color = 'var(--color-black)';
              }}
            >
              Solicitar visita
            </Link>
            <Link
              href="/contacto"
              style={{
                padding: '10px 22px',
                backgroundColor: 'var(--color-black)',
                color: 'var(--color-white)',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                fontFamily: "'Manrope', sans-serif",
                borderRadius: '999px',
                transition: 'background-color 0.25s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-sage-dark)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-black)')}
            >
              Contactar
            </Link>
          </div>
        </div>
      </header>

      {/* OVERLAY MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'var(--color-bg)',
              zIndex: 200,
              overflow: 'auto',
            }}
          >
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              style={{
                minHeight: '100vh',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Top bar inside overlay */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  height: '56px',
                  marginBottom: '40px',
                }}
              >
                <Link
                  href="/"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  <Image
                    src="/images/logo-gekko.svg"
                    alt="Gekko Real Estates"
                    width={92}
                    height={46}
                    style={{ height: 'auto' }}
                  />
                </Link>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Cerrar menú"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '8px 4px',
                    color: 'var(--color-black)',
                    border: 'none',
                    background: 'none',
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: '13px',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                  }}
                >
                  <span>Cerrar</span>
                  <X size={20} strokeWidth={2.2} />
                </button>
              </div>

              {/* Content grid */}
              <div
                style={{
                  flexGrow: 1,
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: '48px',
                  maxWidth: '1320px',
                  width: '100%',
                  margin: '0 auto',
                  paddingBottom: '40px',
                }}
                className="overlay-grid"
              >
                {/* LEFT: Big nav */}
                <nav
                  aria-label="Navegación principal"
                  style={{ display: 'flex', flexDirection: 'column' }}
                >
                  <span
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '0.22em',
                      textTransform: 'uppercase',
                      color: 'var(--color-sage-dark)',
                      marginBottom: '24px',
                    }}
                  >
                    Navegación
                  </span>
                  {primaryLinks.map((link, i) => {
                    const isActive = pathname === link.href;
                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsMenuOpen(false)}
                          style={{
                            display: 'block',
                            padding: '8px 0',
                            fontFamily: "'Manrope', sans-serif",
                            fontWeight: 800,
                            fontSize: 'clamp(40px, 7vw, 72px)',
                            lineHeight: 1.0,
                            letterSpacing: '-0.035em',
                            color: isActive ? 'var(--color-sage-dark)' : 'var(--color-black)',
                            transition: 'color 0.2s ease, padding-left 0.2s ease',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = 'var(--color-sage-dark)';
                            e.currentTarget.style.paddingLeft = '10px';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = isActive
                              ? 'var(--color-sage-dark)'
                              : 'var(--color-black)';
                            e.currentTarget.style.paddingLeft = '0';
                          }}
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                {/* RIGHT: Services + contact */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                  {/* Services list */}
                  <div>
                    <span
                      style={{
                        fontFamily: "'Manrope', sans-serif",
                        fontSize: '11px',
                        fontWeight: 700,
                        letterSpacing: '0.22em',
                        textTransform: 'uppercase',
                        color: 'var(--color-sage-dark)',
                        marginBottom: '20px',
                        display: 'block',
                      }}
                    >
                      Servicios
                    </span>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {serviceLinks.map((link, i) => (
                        <motion.li
                          key={link.href}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.25 + i * 0.04 }}
                          style={{ borderBottom: '1px solid rgba(0,0,0,0.08)' }}
                        >
                          <Link
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              padding: '14px 0',
                              fontFamily: "'Manrope', sans-serif",
                              fontWeight: 700,
                              fontSize: '18px',
                              letterSpacing: '-0.01em',
                              color: 'var(--color-black)',
                              transition: 'color 0.2s ease, padding-left 0.2s ease',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.color = 'var(--color-sage-dark)';
                              e.currentTarget.style.paddingLeft = '6px';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.color = 'var(--color-black)';
                              e.currentTarget.style.paddingLeft = '0';
                            }}
                          >
                            <span>{link.label}</span>
                            <span
                              aria-hidden
                              style={{ fontSize: '16px', color: 'var(--color-text-muted)' }}
                            >
                              →
                            </span>
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Contact block */}
                  <div>
                    <span
                      style={{
                        fontFamily: "'Manrope', sans-serif",
                        fontSize: '11px',
                        fontWeight: 700,
                        letterSpacing: '0.22em',
                        textTransform: 'uppercase',
                        color: 'var(--color-sage-dark)',
                        marginBottom: '16px',
                        display: 'block',
                      }}
                    >
                      Contacto
                    </span>
                    <ul
                      style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                      }}
                    >
                      <li>
                        <a
                          href="tel:+34917045896"
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            color: 'var(--color-text)',
                            fontWeight: 600,
                            fontSize: '15px',
                          }}
                        >
                          <Phone size={16} strokeWidth={1.8} />
                          +34 917 045 896
                        </a>
                      </li>
                      <li>
                        <a
                          href="mailto:info@gekkorealestates.com"
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            color: 'var(--color-text)',
                            fontWeight: 600,
                            fontSize: '15px',
                          }}
                        >
                          <Mail size={16} strokeWidth={1.8} />
                          info@gekkorealestates.com
                        </a>
                      </li>
                      <li
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '10px',
                          color: 'var(--color-text-light)',
                          fontSize: '14px',
                          lineHeight: 1.5,
                        }}
                      >
                        <MapPin size={16} strokeWidth={1.8} style={{ marginTop: '3px', flexShrink: 0 }} />
                        Av. de Manoteras, 30, 28050 Madrid
                      </li>
                    </ul>

                    {/* Social */}
                    <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
                      <a
                        href="https://www.instagram.com"
                        aria-label="Instagram"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '50%',
                          border: '1px solid rgba(0,0,0,0.15)',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--color-black)',
                          transition: 'all 0.2s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'var(--color-sage)';
                          e.currentTarget.style.borderColor = 'var(--color-sage)';
                          e.currentTarget.style.color = 'var(--color-white)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent';
                          e.currentTarget.style.borderColor = 'rgba(0,0,0,0.15)';
                          e.currentTarget.style.color = 'var(--color-black)';
                        }}
                      >
                        <Instagram size={16} strokeWidth={1.8} />
                      </a>
                      <a
                        href="https://www.linkedin.com"
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '50%',
                          border: '1px solid rgba(0,0,0,0.15)',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--color-black)',
                          transition: 'all 0.2s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'var(--color-sage)';
                          e.currentTarget.style.borderColor = 'var(--color-sage)';
                          e.currentTarget.style.color = 'var(--color-white)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent';
                          e.currentTarget.style.borderColor = 'rgba(0,0,0,0.15)';
                          e.currentTarget.style.color = 'var(--color-black)';
                        }}
                      >
                        <Linkedin size={16} strokeWidth={1.8} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <style jsx>{`
                @media (min-width: 900px) {
                  .overlay-grid {
                    grid-template-columns: 1.4fr 1fr;
                    gap: 80px;
                  }
                }
              `}</style>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
