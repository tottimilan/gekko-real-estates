'use client';

import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');

  return (
    <footer style={{ backgroundColor: 'var(--color-arena-dark)', borderTop: '2px solid var(--color-gold)' }}>
      {/* Newsletter Bar */}
      <div style={{ backgroundColor: 'var(--color-arena)', padding: '48px 0' }}>
        <div className="wrapper" style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
          textAlign: 'center',
        }}>
          <h3 style={{ fontSize: '28px', color: 'var(--color-black)' }}>
            No te pierdas las novedades
          </h3>
          <p style={{ color: 'var(--color-text-light)', fontSize: '14px', maxWidth: '500px' }}>
            Suscríbete a nuestro newsletter y recibe las últimas oportunidades de inversión inmobiliaria.
          </p>
          <div className="newsletter-form" style={{ marginTop: '8px' }}>
            <input
              type="email"
              placeholder="Tu correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="btn btn-primary" style={{ padding: '16px 24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              Suscribirme
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>

      <div className="wrapper" style={{ padding: '64px 24px 0' }}>
        <div className="grid-4" style={{ paddingBottom: '64px' }}>
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
            <p style={{ color: 'var(--color-text-light)', fontSize: '14px', lineHeight: '1.7', marginBottom: '24px' }}>
              Tu socio de confianza en inversión inmobiliaria. Compra, vende y alquila con la seguridad de un equipo experto a tu lado.
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              {[
                { Icon: Facebook, href: 'https://facebook.com' },
                { Icon: Instagram, href: 'https://instagram.com' },
                { Icon: Linkedin, href: 'https://linkedin.com' },
              ].map(({ Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    border: '1px solid var(--color-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-text-light)',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-gold)';
                    e.currentTarget.style.color = 'var(--color-gold)';
                    e.currentTarget.style.backgroundColor = 'rgba(168, 131, 41, 0.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-border)';
                    e.currentTarget.style.color = 'var(--color-text-light)';
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 style={{ color: 'var(--color-black)', fontSize: '18px', fontWeight: 600, marginBottom: '20px' }}>
              Servicios
            </h3>
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
                    style={{ color: 'var(--color-text-light)', fontSize: '14px', transition: 'color 0.3s ease' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-gold)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-light)'}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{ color: 'var(--color-black)', fontSize: '18px', fontWeight: 600, marginBottom: '20px' }}>
              Enlaces
            </h3>
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
                    style={{ color: 'var(--color-text-light)', fontSize: '14px', transition: 'color 0.3s ease' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-gold)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-light)'}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 style={{ color: 'var(--color-black)', fontSize: '18px', fontWeight: 600, marginBottom: '20px' }}>
              Contacto
            </h3>
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
                    display: 'flex', alignItems: 'center', gap: '10px',
                    color: 'var(--color-text-light)', fontSize: '14px', transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-gold)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-light)'}
                >
                  <item.Icon size={16} style={{ color: 'var(--color-gold)', flexShrink: 0 }} />
                  {item.text}
                </a>
              ))}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'var(--color-text-light)', fontSize: '14px' }}>
                <MapPin size={16} style={{ color: 'var(--color-gold)', flexShrink: 0, marginTop: '2px' }} />
                <span>Av. de Manoteras, 30<br />28050 Madrid, España</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid var(--color-border)',
          padding: '24px 0',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px',
          textAlign: 'center',
        }}>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '13px', margin: 0 }}>
            © {currentYear} Gekko Real Estate Investment & Properties Management SL. Todos los derechos reservados.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '24px' }}>
            {['Aviso Legal', 'Política de Privacidad', 'Política de Cookies'].map((text) => (
              <Link
                key={text}
                href={`/${text.toLowerCase().replace(/ /g, '-').replace(/í/g, 'i')}`}
                style={{ color: 'var(--color-text-muted)', fontSize: '13px', transition: 'color 0.3s ease' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-gold)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-muted)'}
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
