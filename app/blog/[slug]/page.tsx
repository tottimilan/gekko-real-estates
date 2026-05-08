'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import { getBlogPost, getLatestPosts } from '@/lib/blog-data';
import AnimatedSection from '@/components/AnimatedSection';

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = getBlogPost(slug);
  const relatedPosts = getLatestPosts(3).filter((p) => p.slug !== slug).slice(0, 2);

  if (!post) {
    return (
      <section className="section bg-white" style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="wrapper">
          <h1 className="title-lg">Artículo no encontrado</h1>
          <p className="body-text" style={{ marginBottom: '32px' }}>El artículo que buscas no existe o ha sido movido.</p>
          <Link href="/blog" className="btn btn-primary">Volver al blog</Link>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="page-hero" style={{ paddingBottom: '48px' }}>
        <div className="wrapper">
          <AnimatedSection>
            <Link href="/blog" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              color: 'var(--color-gold)', fontSize: '13px', fontWeight: 500,
              marginBottom: '32px', transition: 'opacity 0.3s ease',
            }}>
              <ArrowLeft size={16} />
              Volver al blog
            </Link>

            <span className="tag tag-gold" style={{ display: 'inline-block', marginBottom: '24px' }}>
              {post.category}
            </span>

            <h1 className="title-xl" style={{ maxWidth: '800px', margin: '0 auto 24px' }}>
              {post.title}
            </h1>

            <div className="gold-line centered" />

            <div style={{
              display: 'flex', gap: '24px', justifyContent: 'center',
              color: 'var(--color-text-light)', fontSize: '13px',
              flexWrap: 'wrap', marginTop: '24px',
            }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Calendar size={14} /> {post.date}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Clock size={14} /> {post.readTime} de lectura
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Tag size={14} /> {post.category}
              </span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Image */}
      <section style={{ backgroundColor: 'var(--color-white)', paddingBottom: '0' }}>
        <div className="wrapper" style={{ maxWidth: '900px' }}>
          <AnimatedSection>
            <div style={{
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              aspectRatio: '16/9',
              boxShadow: 'var(--shadow-lg)',
              marginTop: '-32px',
            }}>
              <img
                src={post.image}
                alt={post.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="section bg-white" style={{ paddingTop: '48px' }}>
        <div className="wrapper" style={{ maxWidth: '800px' }}>
          <AnimatedSection>
            <article style={{
              fontSize: '16px',
              lineHeight: 1.9,
              color: 'var(--color-text)',
            }}>
              {post.content.split('\n').map((paragraph, i) => {
                const trimmed = paragraph.trim();
                if (!trimmed) return null;

                if (trimmed.startsWith('## ')) {
                  return (
                    <h2 key={i} style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontWeight: 800,
                      letterSpacing: '-0.025em',
                      fontSize: '32px',
                      color: 'var(--color-black)',
                      marginTop: '48px',
                      marginBottom: '24px',
                      lineHeight: 1.2,
                    }}>
                      {trimmed.replace('## ', '')}
                    </h2>
                  );
                }

                if (trimmed.startsWith('### ')) {
                  return (
                    <h3 key={i} style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontWeight: 800,
                      letterSpacing: '-0.02em',
                      fontSize: '22px',
                      color: 'var(--color-black)',
                      marginTop: '36px',
                      marginBottom: '14px',
                      lineHeight: 1.25,
                    }}>
                      {trimmed.replace('### ', '')}
                    </h3>
                  );
                }

                if (trimmed.startsWith('- **')) {
                  const match = trimmed.match(/- \*\*(.+?)\*\*:?\s*(.*)/);
                  if (match) {
                    return (
                      <div key={i} style={{
                        display: 'flex', alignItems: 'flex-start', gap: '12px',
                        marginBottom: '12px', paddingLeft: '8px',
                      }}>
                        <span style={{ color: 'var(--color-gold)', fontWeight: 700, flexShrink: 0 }}>•</span>
                        <p style={{ margin: 0 }}>
                          <strong style={{ color: 'var(--color-black)' }}>{match[1]}</strong>
                          {match[2] ? `: ${match[2]}` : ''}
                        </p>
                      </div>
                    );
                  }
                }

                if (trimmed.startsWith('- ')) {
                  return (
                    <div key={i} style={{
                      display: 'flex', alignItems: 'flex-start', gap: '12px',
                      marginBottom: '12px', paddingLeft: '8px',
                    }}>
                      <span style={{ color: 'var(--color-gold)', fontWeight: 700, flexShrink: 0 }}>•</span>
                      <p style={{ margin: 0 }}>{trimmed.replace('- ', '')}</p>
                    </div>
                  );
                }

                if (/^\d+\./.test(trimmed)) {
                  const match = trimmed.match(/^\d+\.\s+\*\*(.+?)\*\*:?\s*(.*)/);
                  if (match) {
                    return (
                      <div key={i} style={{
                        display: 'flex', alignItems: 'flex-start', gap: '12px',
                        marginBottom: '12px', paddingLeft: '8px',
                      }}>
                        <span style={{ color: 'var(--color-gold)', fontWeight: 700, flexShrink: 0, fontSize: '14px' }}>
                          {trimmed.match(/^(\d+)\./)?.[1]}.
                        </span>
                        <p style={{ margin: 0 }}>
                          <strong style={{ color: 'var(--color-black)' }}>{match[1]}</strong>
                          {match[2] ? `: ${match[2]}` : ''}
                        </p>
                      </div>
                    );
                  }
                }

                if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
                  return (
                    <p key={i} style={{
                      fontWeight: 600,
                      color: 'var(--color-black)',
                      marginTop: '32px',
                      marginBottom: '16px',
                      fontSize: '17px',
                      borderLeft: '3px solid var(--color-gold)',
                      paddingLeft: '16px',
                    }}>
                      {trimmed.replace(/\*\*/g, '')}
                    </p>
                  );
                }

                const formatted = trimmed
                  .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

                return (
                  <p
                    key={i}
                    style={{
                      marginBottom: '20px',
                      color: 'var(--color-text)',
                    }}
                    dangerouslySetInnerHTML={{ __html: formatted }}
                  />
                );
              })}
            </article>
          </AnimatedSection>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="section bg-arena">
          <div className="wrapper">
            <AnimatedSection>
              <div style={{ marginBottom: '48px' }}>
                <span className="subtitle">SIGUE LEYENDO</span>
                <h2 className="title-lg">Artículos relacionados</h2>
                <div className="gold-line" />
              </div>
            </AnimatedSection>

            <div className="grid-2">
              {relatedPosts.map((related, i) => (
                <AnimatedSection key={related.slug} delay={i * 0.1}>
                  <Link href={`/blog/${related.slug}`} className="blog-card" style={{ height: '100%' }}>
                    <div className="blog-image">
                      <img src={related.image} alt={related.title} />
                    </div>
                    <div className="blog-body">
                      <span className="blog-category">{related.category}</span>
                      <h3>{related.title}</h3>
                      <p>{related.excerpt}</p>
                      <div className="blog-meta">
                        <span>{related.date}</span>
                        <span>·</span>
                        <span>{related.readTime} de lectura</span>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section bg-white" style={{ textAlign: 'center' }}>
        <div className="wrapper">
          <AnimatedSection>
            <span className="subtitle">¿NECESITAS ASESORAMIENTO?</span>
            <h2 className="title-lg">¿Hablamos sobre tu proyecto?</h2>
            <div className="gold-line centered" />
            <p className="body-text" style={{ maxWidth: '500px', margin: '0 auto 32px' }}>
              Nuestro equipo de expertos está listo para ayudarte a tomar las mejores decisiones inmobiliarias.
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
