import { skills } from "./skills";
import datos_video from "../assets/projects/portada_datos_video.webp";
import alerta_sos from "../assets/projects/portada_alerta_sos.webp"
import labsol_academy from "../assets/projects/portada_labsol_academy.webp"

export const skillMap = skills.reduce((map, skill) => {
    map[skill.name] = skill;
    return map;
}, {});

export const projects = [
  {
    id: 1,
    name: 'Alerta SOS',
    context: 'Tesis · 2024–presente',
    description: 'App Android que alerta a tus contactos de confianza al agitar el teléfono y comparte tu ubicación en vivo.',
    img: alerta_sos,
    imgAlt: 'Pantallas de la app: inicio de sesión, alerta activa y notificaciones',
    dev: [
      skillMap['Flutter'],
      skillMap['TypeScript'],
      skillMap['Node JS'],
      skillMap['PostgreSQL'],
      skillMap['Socket.IO'],
      skillMap['Docker'],
      skillMap['Firebase'],
    ],
    code: '',
    demo: ''
  },
  {
    id: 2,
    name: 'Labsol Academy',
    context: 'Servicio social · 2023 · Equipo de 4',
    description: 'Módulo de cursos de una plataforma educativa: cursos del usuario, reproducción de contenido y comentarios.',
    img: labsol_academy,
    imgAlt: 'Página de inicio de la plataforma vista en el navegador',
    dev: [
      skillMap['Django'],
      skillMap['Python'],
      skillMap['MySQL'],
      skillMap['Bootstrap'],
      skillMap['JavaScript'],
    ],
    code: '',
    demo: ''
  },
  {
    id: 3,
    name: 'Transmisión de video y datos',
    context: 'Proyecto escolar · 2022 · Equipo de 2',
    description: 'Aplicación en Java que transmite video y datos entre dos computadoras mediante sockets TCP.',
    img: datos_video,
    imgAlt: 'Ilustración de una videollamada entre varias personas',
    dev: [
      skillMap['Java'],
    ],
    code: '',
    demo: ''
  },
  // Pendiente decidir si se muestra: no aparece en el CV y falta recordar el propósito del proyecto
  /*
  {
    id: 4,
    name: 'CACEI',
    description: 'Desarrollo web con Django, lenguaje Python, base de datos MySQL, entorno de desarrollo Docker, control de versión GitHub, estilos CSS y Bootstrap, lenguaje de marcado HTML, Cloudflare y AWS.',
    img: placeholder,
    dev: [
      skillMap['Django'],
      skillMap['Python'],
      // skillMap['MySQL'],
      // skillMap['Docker'],
      skillMap['CSS'],
      skillMap['HTML'],
      skillMap['Bootstrap'],
    ],
    code: '',
    demo: ''
  },
  */
];
