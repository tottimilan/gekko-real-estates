'use client';

import Link from 'next/link';
import { blogPosts } from '@/lib/blog-data';
import AnimatedSection from '@/components/AnimatedSection';

const categories = ['Todos', ...Array.from(new Set(blogPosts.map((p) => p.category)))];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="wrapper">
          <AnimatedSection>
            <span className="subtitle">Gekko Blog</span>
            <h1 className="title-xl">Nuestro Blog</h1>
            <div className="gold-line centered" />
            <p className="body-text-lg" style={{ maxWidth: '600px', margin: '0 auto' }}>
              Artículos, guías y análisis sobre inversión inmobiliaria, reformas, tendencias del mercado y mucho más.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Categories */}
      <section style={{ backgroundColor: 'var(--color-white)', padding: '32px 0', borderBottom: '1px solid var(--color-border)' }}>
        <div className="wrapper">
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={i === 0 ? 'btn btn-primary' : 'btn btn-secondary'}
                style={{ padding: '10px 24px', fontSize: '11px' }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section bg-white">
        <div className="wrapper">
          <AnimatedSection>
            <Link href={`/blog/${blogPosts[0].slug}`} style={{ display: 'block' }}>
              <div className="grid-2" style={{ alignItems: 'center', gap: '48px' }}>
                <div style={{
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  aspectRatio: '16/10',
                  position: 'relative',
                }}>
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute', top: '16px', left: '16px',
                  }}>
                    <span className="tag tag-gold">{blogPosts[0].category}</span>
                  </div>
                </div>
                <div>
                  <span className="subtitle">ARTÍCULO DESTACADO</span>
                  <h2 className="title-lg" style={{
                    fontSize: '32px',
                    transition: 'color 0.3s ease',
                  }}>
                    {blogPosts[0].title}
                  </h2>
                  <div className="gold-line" />
                  <p className="body-text" style={{ marginBottom: '24px' }}>
                    {blogPosts[0].excerpt}
                  </p>
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: '12px',
                    color: 'var(--color-text-muted)', fontSize: '13px',
                  }}>
                    <span>{blogPosts[0].date}</span>
                    <span>·</span>
                    <span>{blogPosts[0].readTime} de lectura</span>
                  </div>
                </div>
              </div>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* All Posts */}
      <section className="section bg-arena">
        <div className="wrapper">
          <AnimatedSection>
            <div style={{ marginBottom: '48px' }}>
              <span className="subtitle">TODOS LOS ARTÍCULOS</span>
              <h2 className="title-lg">Últimas publicaciones</h2>
              <div className="gold-line" />
            </div>
          </AnimatedSection>

          <div className="grid-3">
            {blogPosts.slice(1).map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 0.08}>
                <Link href={`/blog/${post.slug}`} className="blog-card" style={{ height: '100%' }}>
                  <div className="blog-image">
                    <img src={post.image} alt={post.title} />
                  </div>
                  <div className="blog-body">
                    <span className="blog-category">{post.category}</span>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <div className="blog-meta">
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{post.readTime} de lectura</span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section bg-white" style={{ textAlign: 'center' }}>
        <div className="wrapper">
          <AnimatedSection>
            <span className="subtitle">MANTENTE INFORMADO</span>
            <h2 className="title-lg">¿Quieres recibir nuestros artículos?</h2>
            <div className="gold-line centered" />
            <p className="body-text" style={{ maxWidth: '500px', margin: '0 auto 32px' }}>
              Suscríbete a nuestro newsletter y recibe contenido exclusivo sobre inversión inmobiliaria.
            </p>
            <div className="newsletter-form" style={{ margin: '0 auto' }}>
              <input type="email" placeholder="Tu correo electrónico" />
              <button className="btn btn-primary" style={{ padding: '16px 24px' }}>
                Suscribirme
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
