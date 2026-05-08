'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === '/';
  const hasDarkHero = isHome;

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

  const showWhiteVariant = hasDarkHero && !isScrolled;
  const linkColor = showWhiteVariant ? '#FFFFFF' : 'var(--color-text)';
  const logoSrc = showWhiteVariant
    ? '/images/logo-gekko-white.svg'
    : '/images/logo-gekko.svg';

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      transition: 'all 0.35s ease',
      backgroundColor: isScrolled ? 'rgba(255,255,255,0.97)' : (hasDarkHero ? 'transparent' : 'rgba(255,255,255,0.97)'),
      backdropFilter: (isScrolled || !hasDarkHero) ? 'blur(12px)' : 'none',
      boxShadow: isScrolled ? '0 1px 12px rgba(0,0,0,0.06)' : (hasDarkHero ? 'none' : '0 1px 8px rgba(0,0,0,0.04)'),
    }}>
      <div style={{
        maxWidth: '1260px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: isScrolled ? '6px 32px' : '10px 32px',
        transition: 'padding 0.35s ease',
      }}>
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
          <Image
            key={logoSrc}
            src={logoSrc}
            alt="Gekko Real Estates"
            width={105}
            height={52}
            style={{ height: 'auto', transition: 'all 0.3s ease' }}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-flex" style={{
          display: 'none',
          gap: '32px',
          alignItems: 'center',
        }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                color: linkColor,
                fontSize: '13px',
                fontWeight: 500,
                letterSpacing: '0.04em',
                transition: 'color 0.3s ease',
                padding: '6px 0',
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-gold)'}
              onMouseLeave={(e) => e.currentTarget.style.color = linkColor}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            className="btn btn-primary"
            style={{ padding: '10px 24px', fontSize: '11px', borderRadius: '4px' }}
          >
            Contáctanos
          </Link>
        </nav>

        {/* Mobile burger */}
        <button
          className="mobile-only"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            padding: '8px',
            color: showWhiteVariant ? '#fff' : 'var(--color-text)',
            border: 'none',
            background: 'none',
            transition: 'color 0.3s ease',
          }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-only" style={{
          backgroundColor: 'var(--color-white)',
          borderTop: '1px solid var(--color-border)',
          padding: '16px 24px 24px',
          boxShadow: '0 12px 24px rgba(0,0,0,0.08)',
        }}>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                style={{
                  padding: '14px 16px',
                  color: 'var(--color-text)',
                  fontSize: '15px',
                  fontWeight: 500,
                  borderRadius: '6px',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-arena)';
                  e.currentTarget.style.color = 'var(--color-gold)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'var(--color-text)';
                }}
              >
                {link.label}
              </Link>
            ))}
            <div style={{ marginTop: '12px' }}>
              <Link
                href="/contacto"
                className="btn btn-primary"
                onClick={() => setIsMenuOpen(false)}
                style={{ width: '100%', display: 'block' }}
              >
                Contáctanos
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
