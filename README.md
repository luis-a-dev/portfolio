# Portafolio · Luis Adrián

Sitio personal donde presento mis proyectos, quién soy y cómo contactarme. Desarrollador backend y móvil.

**Ver el sitio:** https://luis-a-dev.github.io/portfolio/

## Qué incluye

- **Proyectos:** tarjetas con portada, contexto, descripción y tecnologías de cada proyecto.
- **Sobre mí:** presentación breve y descarga del CV.
- **Contacto:** formulario que envía el mensaje por correo, con aviso de envío exitoso o fallido.
- Diseño adaptable a celular, tableta y computadora, con animaciones al entrar cada sección.

## Tecnologías

- [React 19](https://react.dev/) y [Vite](https://vite.dev/)
- CSS propio, sin frameworks de estilos
- [react-icons](https://react-icons.github.io/react-icons/) para los íconos
- Fuente [Geist](https://fontsource.org/fonts/geist) servida desde el propio sitio
- [Formspree](https://formspree.io/) para el formulario de contacto
- GitHub Actions y GitHub Pages para publicar

## Ejecutarlo en tu computadora

Requiere Node.js 20 o superior.

```bash
npm install
npm run dev
```

El sitio abre en `http://localhost:5173/portfolio/`.

| Comando | Qué hace |
|---|---|
| `npm run dev` | Servidor de desarrollo con recarga automática |
| `npm run build` | Genera la versión para publicar en `dist/` |
| `npm run preview` | Sirve `dist/` para revisar la versión final |
| `npm run lint` | Revisa el código con ESLint |

## Estructura

```
src/
├── components/   # Una carpeta por sección: Hero, Project, About, Contact…
├── data/         # Contenido editable: proyectos, tecnologías y redes
├── hooks/        # Lógica reutilizable (animaciones al hacer scroll, tamaño de pantalla)
├── assets/       # Imágenes, íconos y CV, organizados por sección
└── index.css     # Variables de diseño y estilos globales
public/           # Archivos que se publican tal cual (robots.txt, ícono)
```

Para agregar o editar un proyecto basta con modificar `src/data/project.js`.

## Publicación

Cada cambio que llega a la rama `master` se compila y publica automáticamente en GitHub Pages mediante el workflow de [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

## Contacto

- LinkedIn: [linkedin.com/in/lahc-is](https://www.linkedin.com/in/lahc-is)
- GitHub: [github.com/luis-a-dev](https://github.com/luis-a-dev)
