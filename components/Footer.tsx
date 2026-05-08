'use client';

import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');

  return (
    <footer
      style={{
        backgroundColor: 'var(--color-arena-dark)',
        borderTop: '1px solid var(--color-sage)',
      }}
    >
      {/* Newsletter Bar */}
      <div style={{ backgroundColor: 'var(--color-arena)', padding: '56px 0' }}>
        <div
          className="wrapper"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px',
            textAlign: 'center',
          }}
        >
          <span className="eyebrow">Newsletter</span>
          <h3
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 800,
              letterSpacing: '-0.025em',
              fontSize: 'clamp(24px, 3vw, 36px)',
              color: 'var(--color-black)',
              marginTop: '4px',
            }}
          >
            No te pierdas las novedades
          </h3>
          <p
            style={{
              color: 'var(--color-text-light)',
              fontSize: '14px',
              maxWidth: '500px',
              fontWeight: 500,
            }}
          >
            Suscríbete y recibe oportunidades de inversión y nuevas propiedades directamente en tu correo.
          </p>
          <div className="newsletter-form" style={{ marginTop: '16px' }}>
            <input
              type="email"
              placeholder="Tu correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="btn btn-primary"
              style={{
                padding: '16px 24px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              Suscribirme
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>

      <div className="wrapper" style={{ padding: '64px 24px 0' }}>
        <div className="grid-4" style={{ paddingBottom: '48px' }}>
          {/* Brand */}
          <div>
            <Link href="/" style={{ display: 'inline-block', marginBottom: '20px' }}>
              <Image
                src="/images/logo-gekko.svg"
                alt="Gekko Real Estates"
                width={120}
                height={70}
                style={{ height: 'auto' }}
              />
            </Link>
            <p
              style={{
                color: 'var(--color-text-light)',
                fontSize: '14px',
                lineHeight: '1.65',
                marginBottom: '24px',
                fontWeight: 500,
              }}
            >
              Tu socio de confianza en inversión inmobiliaria. Compra, vende y alquila con la seguridad de un equipo experto a tu lado.
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              {[
                { Icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
                { Icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
                { Icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    border: '1px solid rgba(0,0,0,0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-text-light)',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-sage)';
                    e.currentTarget.style.backgroundColor = 'var(--color-sage)';
                    e.currentTarget.style.color = 'var(--color-white)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(0,0,0,0.12)';
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = 'var(--color-text-light)';
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--color-sage-dark)',
                marginBottom: '20px',
              }}
            >
              Servicios
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { href: '/servicios/gekko-home', label: 'Gekko Home' },
                { href: '/servicios/gekko-roomers', label: 'Gekko Roomers' },
                { href: '/servicios/gekko-investment', label: 'Gekko Investment' },
                { href: '/servicios/gekko-refurbishing', label: 'Gekko Refurbishing' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      color: 'var(--color-text-light)',
                      fontSize: '14px',
                      fontWeight: 500,
                      transition: 'color 0.25s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-sage-dark)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-light)')}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--color-sage-dark)',
                marginBottom: '20px',
              }}
            >
              Enlaces
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { href: '/', label: 'Inicio' },
                { href: '/nosotros', label: 'Nosotros' },
                { href: '/servicios', label: 'Servicios' },
                { href: '/blog', label: 'Blog' },
                { href: '/contacto', label: 'Contacto' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      color: 'var(--color-text-light)',
                      fontSize: '14px',
                      fontWeight: 500,
                      transition: 'color 0.25s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-sage-dark)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-light)')}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--color-sage-dark)',
                marginBottom: '20px',
              }}
            >
              Contacto
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { Icon: Phone, text: '+34 917 045 896', href: 'tel:+34917045896' },
                { Icon: Phone, text: '+34 639 131 654', href: 'tel:+34639131654' },
                { Icon: Mail, text: 'info@gekkorealestates.com', href: 'mailto:info@gekkorealestates.com' },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    color: 'var(--color-text-light)',
                    fontSize: '14px',
                    fontWeight: 500,
                    transition: 'color 0.25s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-sage-dark)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-light)')}
                >
                  <item.Icon size={16} style={{ color: 'var(--color-sage-dark)', flexShrink: 0 }} />
                  {item.text}
                </a>
              ))}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  color: 'var(--color-text-light)',
                  fontSize: '14px',
                  fontWeight: 500,
                }}
              >
                <MapPin size={16} style={{ color: 'var(--color-sage-dark)', flexShrink: 0, marginTop: '2px' }} />
                <span>
                  Av. de Manoteras, 30
                  <br />
                  28050 Madrid, España
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(0,0,0,0.08)',
            padding: '24px 0',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px',
            textAlign: 'center',
          }}
        >
          <p style={{ color: 'var(--color-text-muted)', fontSize: '13px', margin: 0 }}>
            © {currentYear} Gekko Real Estate Investment & Properties Management SL. Todos los derechos reservados.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '24px' }}>
            {['Aviso Legal', 'Política de Privacidad', 'Política de Cookies'].map((text) => (
              <Link
                key={text}
                href={`/${text.toLowerCase().replace(/ /g, '-').replace(/í/g, 'i')}`}
                style={{
                  color: 'var(--color-text-muted)',
                  fontSize: '13px',
                  transition: 'color 0.25s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-sage-dark)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}
              >
                {text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
