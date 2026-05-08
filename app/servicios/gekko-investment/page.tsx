'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { TrendingUp } from 'lucide-react';

export default function GekkoInvestmentPage() {
  return (
    <ServicePageTemplate
      title="Gekko Investment"
      subtitle="Inversión Inmobiliaria"
      description="Identificamos las mejores oportunidades de inversión inmobiliaria con estrategias optimizadas, seguras y rentables."
      longDescription="Gekko Investment representa nuestra apuesta por la inversión inmobiliaria inteligente y basada en datos. Nuestro equipo analiza constantemente el mercado para identificar oportunidades que ofrezcan la mejor relación riesgo-rentabilidad. Desde la adquisición hasta la gestión posterior, controlamos todo el ciclo de inversión para asegurar que cada operación genere el máximo valor para nuestros inversores."
      features={[
        'Análisis exhaustivo de oportunidades con datos reales del mercado',
        'Estrategias de inversión personalizadas según perfil de riesgo',
        'Due diligence técnica, legal y financiera completa',
        'Optimización fiscal y estructuración de operaciones',
        'Seguimiento continuo de la rentabilidad de tu cartera',
        'Acceso a operaciones off-market y oportunidades exclusivas',
        'Gestión integral post-adquisición (reforma, alquiler, venta)',
      ]}
      benefits={[
        'Invierte con datos reales, no con intuiciones. Nuestro análisis reduce el riesgo significativamente.',
        'Accede a oportunidades que no están en el mercado público gracias a nuestra red de contactos.',
        'Maximiza tu rentabilidad con estrategias fiscales optimizadas para cada tipo de inversor.',
        'Ahorra tiempo con nuestra gestión integral: nosotros nos encargamos de todo el ciclo.',
        'Diversifica tu cartera con diferentes tipos de activos inmobiliarios.',
        'Benefíciate de nuestra experiencia con más de 50M€ en operaciones gestionadas.',
      ]}
      process={[
        { title: 'Perfil del inversor', description: 'Definimos tu perfil de riesgo, objetivos de rentabilidad y horizonte temporal de inversión.' },
        { title: 'Búsqueda de oportunidades', description: 'Analizamos el mercado con herramientas propias y nuestra red de contactos para identificar las mejores opciones.' },
        { title: 'Due diligence', description: 'Realizamos un análisis completo: técnico, legal, financiero y de mercado antes de cualquier decisión.' },
        { title: 'Ejecución y seguimiento', description: 'Gestionamos la operación completa y realizamos seguimiento continuo de la rentabilidad.' },
      ]}
      image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
      secondaryImage="https://images.unsplash.com/photo-1460472178825-e5240623afd5?q=80&w=2069&auto=format&fit=crop"
      icon={TrendingUp}
    />
  );
}
