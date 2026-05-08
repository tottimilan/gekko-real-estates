'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Wrench } from 'lucide-react';

export default function GekkoRefurbishingPage() {
  return (
    <ServicePageTemplate
      title="Gekko Refurbishing"
      subtitle="Reformas Integrales"
      description="Reformas integrales y diseño de interiores siguiendo los principios del feng shui para crear espacios armónicos y revalorizar tu propiedad."
      longDescription="Gekko Refurbishing combina la excelencia técnica en reformas integrales con la sabiduría ancestral del feng shui para crear espacios que no solo son estéticamente impactantes, sino que también promueven el bienestar y la armonía. Nuestro equipo de arquitectos, interioristas y artesanos cualificados transforma propiedades ordinarias en espacios extraordinarios, aumentando significativamente su valor de mercado."
      features={[
        'Reformas integrales llave en mano con presupuesto cerrado',
        'Diseño de interiores con aplicación de principios feng shui',
        'Visualización arquitectónica 3D fotorrealista antes de empezar',
        'Gestión y coordinación de todos los gremios y proveedores',
        'Control riguroso de calidad, plazos y presupuesto',
        'Asesoramiento en materiales sostenibles y eficiencia energética',
        'Certificación energética post-reforma',
      ]}
      benefits={[
        'Visualiza el resultado final antes de invertir un solo euro con nuestros renders 3D.',
        'Revaloriza tu propiedad hasta un 30% con una reforma bien ejecutada.',
        'Sin sorpresas: presupuesto cerrado y plazos garantizados contractualmente.',
        'Un único interlocutor para todo el proyecto, simplificando al máximo tu experiencia.',
        'Crea espacios que generan bienestar gracias a la integración del feng shui.',
        'Mejora la certificación energética y reduce los costes de mantenimiento.',
      ]}
      process={[
        { title: 'Evaluación y diseño', description: 'Visitamos la propiedad, escuchamos tus ideas y elaboramos el proyecto con renders 3D para que veas el resultado.' },
        { title: 'Presupuesto detallado', description: 'Preparamos un presupuesto cerrado desglosado por partidas, sin letra pequeña ni costes ocultos.' },
        { title: 'Ejecución de obra', description: 'Coordinamos todos los gremios, supervisamos diariamente y te informamos del avance en tiempo real.' },
        { title: 'Entrega y garantía', description: 'Verificamos cada detalle, entregamos la obra y te ofrecemos garantía completa sobre todos los trabajos.' },
      ]}
      image="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
      secondaryImage="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=2070&auto=format&fit=crop"
      icon={Wrench}
    />
  );
}
