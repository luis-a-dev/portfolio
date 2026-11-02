import { skills } from "./skills";

export const skillMap = skills.reduce((map, skill) => {
    map[skill.name] = skill;
    return map;
}, {});

export const projects = [
  {
    id: 1,
    name: 'Labsol Academy',
    description: 'Plataforma educativa en línea con cursos impartidos por profesionales para aprender nuevas habilidades.',
    img: '/src/assets/img/IMG_9713.jpg',
    dev: [
      skillMap['Django'],
      skillMap['Python'],
      // skillMap['MySQL'],
      // skillMap['Docker'],
      skillMap['JavaScript'],
      skillMap['CSS'],
      skillMap['HTML'],
      skillMap['Bootstrap'],
    ],
    code: '',
    demo: ''
  },
  {
    id: 2,
    name: 'CACEI',
    description: 'Desarrollo web con Django, lenguaje Python, base de datos MySQL, entorno de desarrollo Docker, control de versión GitHub, estilos CSS y Bootstrap, lenguaje de marcado HTML, Cloudflare y AWS.',
    img: '/src/assets/img/IMG_9713.jpg',
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
  {
    id: 3,
    name: 'Alerta UAZ',
    description: 'App móvil de emergencia: un botón de pánico envía tu ubicación en tiempo real a tus contactos de confianza.',
    img: '/src/assets/img/IMG_9713.jpg',
    dev: [
      skillMap['Flutter'],
      skillMap['Firebase'],
      // skillMap['Node JS'],
      // skillMap['MongoDB'],
      skillMap['SQLite'],
      // skillMap['Docker']
    ],
    code: '',
    demo: ''
  }
];
