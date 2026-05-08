'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Users } from 'lucide-react';

export default function GekkoRoomersPage() {
  return (
    <ServicePageTemplate
      title="Gekko Roomers"
      subtitle="Gestión de Alquileres"
      description="Gestión integral de alquileres temporales y home staging, maximizando la rentabilidad de tu inversión inmobiliaria."
      longDescription="Gekko Roomers nace para dar respuesta a propietarios que quieren maximizar la rentabilidad de sus inmuebles sin las complicaciones de la gestión diaria. Nos encargamos de todo: desde la preparación del inmueble con home staging profesional hasta la atención 24/7 a los inquilinos, pasando por la optimización de precios y el mantenimiento preventivo. Tu única tarea será revisar los informes mensuales de rentabilidad."
      features={[
        'Gestión completa de alquileres temporales y de media estancia',
        'Home staging profesional para maximizar el atractivo del inmueble',
        'Fotografía profesional y tour virtual 360°',
        'Atención a inquilinos y huéspedes 24/7 en múltiples idiomas',
        'Mantenimiento preventivo y correctivo de la propiedad',
        'Reporting mensual detallado con métricas de ocupación y rentabilidad',
        'Optimización dinámica de precios según demanda y temporada',
      ]}
      benefits={[
        'Incrementa tus ingresos entre un 30% y 80% comparado con el alquiler tradicional.',
        'Despreocúpate de la gestión diaria: nosotros nos encargamos de todo.',
        'Mantén tu propiedad en perfecto estado con nuestro programa de mantenimiento.',
        'Diversifica el riesgo con rotación de inquilinos en vez de depender de un solo pagador.',
        'Accede a informes transparentes con todas las métricas de tu inversión.',
        'Recupera la flexibilidad: puedes usar tu propiedad cuando lo necesites.',
      ]}
      process={[
        { title: 'Evaluación', description: 'Analizamos tu propiedad, su ubicación y potencial de rentabilidad. Definimos la estrategia óptima de explotación.' },
        { title: 'Preparación', description: 'Realizamos home staging, sesión fotográfica profesional y publicamos en las principales plataformas.' },
        { title: 'Gestión activa', description: 'Gestionamos reservas, check-in/out, limpieza, mantenimiento y atención al inquilino de forma integral.' },
        { title: 'Reporting', description: 'Te enviamos informes mensuales detallados con ocupación, ingresos, gastos y rentabilidad neta.' },
      ]}
      image="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1980&auto=format&fit=crop"
      secondaryImage="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop"
      icon={Users}
    />
  );
}
