'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, MapPin, Mail } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/nosotros', label: 'Nosotros' },
    { href: '/servicios', label: 'Servicios' },
    { href: '/blog', label: 'Blog' },
    { href: '/contacto', label: 'Contacto' },
  ];

  const ctaLinkStyle: React.CSSProperties = {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    color: '#FFFFFF',
    fontSize: '12px',
    fontWeight: 700,
    letterSpacing: '0.06em',
    fontFamily: "'Manrope', sans-serif",
    transition: 'background-color 0.2s ease',
    borderRight: '1px solid rgba(255,255,255,0.25)',
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        backgroundColor: '#FFFFFF',
        borderBottom: isScrolled ? '1px solid rgba(0,0,0,0.06)' : '1px solid transparent',
        transition: 'border-color 0.3s ease',
      }}
    >
      {/* TOP STRIP — sage */}
      <div
        style={{
          backgroundColor: 'var(--color-sage)',
          height: '40px',
          display: 'flex',
          alignItems: 'stretch',
        }}
      >
        <Link
          href="/contacto"
          style={ctaLinkStyle}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-sage-dark)')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
        >
          Solicitar visita
        </Link>
        <Link
          href="/contacto"
          style={ctaLinkStyle}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-sage-dark)')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
        >
          Contactar
        </Link>
        {/* Desktop right icons */}
        <div
          className="desktop-flex"
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '4px',
            paddingRight: '24px',
            paddingLeft: '12px',
          }}
        >
          <a
            href="https://maps.google.com/?q=Av.+de+Manoteras+30+Madrid"
            target="_blank"
            rel="noreferrer"
            aria-label="Ubicación"
            style={{
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              transition: 'opacity 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            <MapPin size={16} strokeWidth={2} />
          </a>
          <a
            href="mailto:info@gekkorealestates.com"
            aria-label="Email"
            style={{
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              transition: 'opacity 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            <Mail size={16} strokeWidth={2} />
          </a>
        </div>
      </div>

      {/* BOTTOM STRIP — white */}
      <div
        style={{
          height: isScrolled ? '64px' : '76px',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'height 0.3s ease',
          maxWidth: '1424px',
          margin: '0 auto',
        }}
      >
        {/* Left: burger (mobile) + nav (desktop) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <button
            className="mobile-only"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menú"
            style={{
              padding: '8px',
              color: 'var(--color-black)',
              border: 'none',
              background: 'none',
            }}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <nav
            className="desktop-flex"
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '32px',
            }}
          >
            {navLinks.slice(0, 3).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  color: 'var(--color-black)',
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: '14px',
                  fontWeight: 600,
                  letterSpacing: '0.01em',
                  position: 'relative',
                  paddingBottom: '4px',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-sage-dark)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-black)')}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Center: Logo */}
        <Link
          href="/"
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Image
            src="/images/logo-gekko.svg"
            alt="Gekko Real Estates"
            width={isScrolled ? 90 : 110}
            height={isScrolled ? 44 : 54}
            style={{ height: 'auto', transition: 'all 0.3s ease' }}
            priority
          />
        </Link>

        {/* Right: more nav (desktop) */}
        <nav
          className="desktop-flex"
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '32px',
          }}
        >
          {navLinks.slice(3).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                color: 'var(--color-black)',
                fontFamily: "'Manrope', sans-serif",
                fontSize: '14px',
                fontWeight: 600,
                letterSpacing: '0.01em',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-sage-dark)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-black)')}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile placeholder for symmetry */}
        <div className="mobile-only" style={{ width: '32px' }} />
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="mobile-only"
          style={{
            backgroundColor: '#FFFFFF',
            borderTop: '1px solid rgba(0,0,0,0.08)',
            padding: '16px 24px 24px',
            boxShadow: '0 12px 24px rgba(0,0,0,0.08)',
          }}
        >
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                style={{
                  padding: '16px 12px',
                  color: 'var(--color-black)',
                  fontSize: '17px',
                  fontWeight: 700,
                  fontFamily: "'Manrope', sans-serif",
                  letterSpacing: '-0.01em',
                  borderBottom: '1px solid rgba(0,0,0,0.06)',
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
