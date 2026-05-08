# Gekko Real Estates

Web moderna y elegante para Gekko Real Estate Investment & Properties Management, SL.

## Tecnologías

- **Next.js 16** - Framework React con App Router
- **Tailwind CSS** - Estilos utilitarios
- **Framer Motion** - Animaciones fluidas
- **Lucide React** - Iconos
- **TypeScript** - Tipado estático

## Características

- Diseño dark luxury con acentos dorados
- Totalmente responsive (móvil, tablet, desktop)
- Animaciones suaves y profesionales
- SEO optimizado
- Formulario de contacto
- Páginas de servicios detalladas
- Estadísticas animadas
- Testimonios de clientes

## Estructura de Páginas

```
/                     -> Home (landing principal)
/servicios            -> Servicios generales
/servicios/gekko-home -> Gekko Home
/servicios/gekko-roomers -> Gekko Roomers  
/servicios/gekko-investment -> Gekko Investment
/servicios/gekko-refurbishing -> Gekko Refurbishing
/nosotros             -> Sobre la empresa
/contacto             -> Formulario de contacto
```

## Paleta de Colores

| Color | Código | Uso |
|-------|--------|-----|
| Negro | `#0A0A0A` | Fondo principal |
| Oro | `#AD8837` | Acentos, CTAs, detalles premium |
| Blanco | `#FAFAFA` | Textos principales |
| Gris oscuro | `#1A1A1A` | Tarjetas, secciones alternativas |
| Gris suave | `#888888` | Textos secundarios |

## Desarrollo Local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Abrir http://localhost:3000
```

## Build de Producción

```bash
# Crear build optimizado
npm run build

# Iniciar servidor de producción
npm run start
```

## Despliegue en Railway

1. Conecta tu repositorio de GitHub a Railway
2. Railway detectará automáticamente que es un proyecto Next.js
3. El archivo `railway.json` ya contiene la configuración necesaria
4. Railway construirá y desplegará automáticamente

### Variables de entorno (opcional)

Si necesitas variables de entorno, añádelas en el dashboard de Railway:

- `NODE_ENV=production`

## Contacto

- **Email:** info@gekkorealestates.com
- **Teléfono:** +34 917 045 896 / +34 639 131 654
- **Dirección:** Av. de Manoteras, 30, 28050 Madrid, España

---

© 2026 Gekko Real Estate Investment & Properties Management, SL
