'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Home } from 'lucide-react';

export default function GekkoHomePage() {
  return (
    <ServicePageTemplate
      title="Gekko Home"
      subtitle="Compra & Venta"
      description="Te acompañamos en la compra y venta de propiedades con asesoramiento personalizado y las mejores herramientas técnicas y legales."
      longDescription="En Gekko Home entendemos que comprar o vender una propiedad es una de las decisiones más importantes de tu vida. Por eso, ponemos a tu disposición un equipo de profesionales especializados que te guiarán en cada paso del proceso. Desde la valoración inicial hasta la firma ante notario, nos aseguramos de que cada detalle esté cuidado para que puedas tomar decisiones con total confianza y tranquilidad."
      features={[
        'Valoración profesional y análisis comparativo de mercado',
        'Asesoramiento personalizado adaptado a tus necesidades y presupuesto',
        'Gestión integral de documentación legal y administrativa',
        'Acompañamiento en todo el proceso de compraventa',
        'Red de contactos inmobiliarios para acceder a oportunidades exclusivas',
        'Negociación experta para conseguir las mejores condiciones',
        'Coordinación con notarías, registros y entidades financieras',
      ]}
      benefits={[
        'Ahorra tiempo con nuestra búsqueda proactiva de propiedades que se ajustan a tu perfil.',
        'Evita sorpresas desagradables con nuestro análisis técnico y legal previo a cualquier operación.',
        'Consigue mejores precios gracias a nuestro conocimiento profundo del mercado madrileño.',
        'Simplifica el proceso burocrático con nuestra gestión documental completa.',
        'Accede a propiedades off-market que no encontrarás en portales públicos.',
        'Toma decisiones informadas con nuestros informes detallados de cada propiedad.',
      ]}
      process={[
        { title: 'Consulta inicial', description: 'Nos reunimos para entender tus objetivos, preferencias y presupuesto. Definimos juntos el perfil de la propiedad ideal.' },
        { title: 'Búsqueda y selección', description: 'Activamos nuestra red de contactos y herramientas de búsqueda. Te presentamos opciones pre-filtradas que encajan con tu perfil.' },
        { title: 'Análisis y visitas', description: 'Organizamos las visitas, realizamos el análisis técnico y legal, y te asesoramos sobre cada propiedad.' },
        { title: 'Negociación y cierre', description: 'Negociamos en tu nombre, gestionamos la documentación y te acompañamos hasta la firma de escrituras.' },
      ]}
      image="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop"
      secondaryImage="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
      icon={Home}
    />
  );
}
