'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const contactInfo = [
    {
      Icon: MapPin,
      title: 'Dirección',
      lines: ['Av. de Manoteras, 30', '28050 Madrid, España'],
    },
    {
      Icon: Phone,
      title: 'Teléfono',
      lines: ['+34 917 045 896', '+34 639 131 654'],
      links: ['tel:+34917045896', 'tel:+34639131654'],
    },
    {
      Icon: Mail,
      title: 'Email',
      lines: ['info@gekkorealestates.com'],
      links: ['mailto:info@gekkorealestates.com'],
    },
    {
      Icon: Clock,
      title: 'Horario',
      lines: ['Lunes a Viernes: 9:00 - 19:00', 'Sábados: 10:00 - 14:00'],
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="wrapper">
          <AnimatedSection>
            <span className="subtitle">Hablemos</span>
            <h1 className="title-xl">Contacto</h1>
            <div className="gold-line centered" />
            <p className="body-text-lg" style={{ maxWidth: '600px', margin: '0 auto' }}>
              Estamos aquí para ayudarte. Cuéntanos tu proyecto y te responderemos en menos de 24 horas.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section style={{ backgroundColor: 'var(--color-white)', padding: '64px 0' }}>
        <div className="wrapper">
          <div className="grid-4">
            {contactInfo.map((info, i) => (
              <AnimatedSection key={info.title} delay={i * 0.1}>
                <div style={{
                  backgroundColor: 'var(--color-arena)',
                  padding: '32px',
                  borderRadius: 'var(--radius-lg)',
                  textAlign: 'center',
                  height: '100%',
                }}>
                  <div style={{
                    width: '48px', height: '48px', borderRadius: '50%',
                    backgroundColor: 'rgba(153, 173, 144, 0.16)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 16px',
                  }}>
                    <info.Icon size={22} style={{ color: 'var(--color-sage-dark)' }} />
                  </div>
                  <h3 style={{ fontSize: '18px', marginBottom: '12px' }}>{info.title}</h3>
                  {info.lines.map((line, j) => (
                    info.links && info.links[j] ? (
                      <a
                        key={j}
                        href={info.links[j]}
                        style={{
                          display: 'block',
                          color: 'var(--color-text-light)',
                          fontSize: '14px',
                          lineHeight: '1.8',
                          transition: 'color 0.3s ease',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-gold)'}
                        onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-light)'}
                      >
                        {line}
                      </a>
                    ) : (
                      <p key={j} style={{ color: 'var(--color-text-light)', fontSize: '14px', lineHeight: '1.8' }}>
                        {line}
                      </p>
                    )
                  ))}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Form & Map */}
      <section className="section bg-arena">
        <div className="wrapper">
          <div className="grid-2" style={{ gap: '64px' }}>
            {/* Form */}
            <AnimatedSection>
              <div style={{
                backgroundColor: 'var(--color-white)',
                padding: '48px',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-md)',
              }}>
                <span className="subtitle">ESCRÍBENOS</span>
                <h2 className="title-md" style={{ marginBottom: '32px' }}>Envíanos un mensaje</h2>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div className="grid-2" style={{ gap: '20px' }}>
                    <input
                      type="text"
                      placeholder="Nombre completo"
                      className="form-input"
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      required
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="form-input"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="grid-2" style={{ gap: '20px' }}>
                    <input
                      type="tel"
                      placeholder="Teléfono"
                      className="form-input"
                      value={formData.telefono}
                      onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                    />
                    <select
                      className="form-input"
                      value={formData.asunto}
                      onChange={(e) => setFormData({ ...formData, asunto: e.target.value })}
                      required
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="gekko-home">Gekko Home - Compra/Venta</option>
                      <option value="gekko-roomers">Gekko Roomers - Alquileres</option>
                      <option value="gekko-investment">Gekko Investment - Inversión</option>
                      <option value="gekko-refurbishing">Gekko Refurbishing - Reformas</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  <textarea
                    placeholder="Cuéntanos tu proyecto..."
                    rows={5}
                    className="form-input"
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    required
                  />

                  <button type="submit" className="btn btn-primary" style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px', justifyContent: 'center',
                  }}>
                    Enviar mensaje
                    <ArrowRight size={16} />
                  </button>
                </form>
              </div>
            </AnimatedSection>

            {/* Map */}
            <AnimatedSection delay={0.2}>
              <div style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                height: '100%',
                minHeight: '500px',
                boxShadow: 'var(--shadow-md)',
              }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3034.4!2d-3.6589!3d40.4893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDI5JzIxLjUiTiAzwrAzOSczMi4wIlc!5e0!3m2!1ses!2ses!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
