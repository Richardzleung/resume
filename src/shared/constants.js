import React from 'react'
import { FiGithub, FiFacebook, FiLinkedin, FiMail } from "react-icons/fi";
import { 
  SiPostgresql, 
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiJest,
  SiCodewars,
  SiSass,
  SiGit
} from "react-icons/si";
import spotifyClone from 'static/images/spotify-clone.webp';
import native from 'static/images/rate-repository-thumbnail.webp';
import patientator from 'static/images/patientator.webp';
import expressIcon from 'static/images/expressjs-icon.svg';
import octupus from 'static/images/octopus-64x64.webp';
import mongoDB from 'static/images/mongodb-icon-1.svg'
import css from 'static/images/css.svg';
import html from 'static/images/HTML5.svg'

const navLinks = [
  {
    to: "home",
    name: "Home"
  },
  {
    to: "about",
    name: "About"
  },
  {
    to: "skills",
    name: "Skills"
  },
  {
    to: "projects",
    name: "Projects"
  },
  {
    to: "contact",
    name: "Contact"
  }
];

const projects = [
  {
    id: "RATE_REPOSITORIES_APP",
    description: "Create reviews about repositories",
    title: "Rate Repository App",
    githubLink: "https://github.com/Richardzleung/rate-repository-app",
    dependencies:  ['React Native', 'GraphQL', 'Yup'],
    projectLiveSite: 'https://stormy-plains-60070.herokuapp.com',
    image: native
  },
  {
    id: "PATIENATOR_APP",
    description: "Track down your patients",
    title: "Patienator",
    githubLink: "https://github.com/Richardzleung/Fullstack-Open/tree/master/part9/patientator-fullstack",
    dependencies: ['Typescript', 'Express', 'Cors'],
    projectLiveSite:'https://mighty-fjord-81735.herokuapp.com',
    image: patientator
  },
  {
    id: "SPOTIFY_REDESIGN",
    description: "A redesign of the Spotify web app (WIP)",
    title: "Spotify Redesign",
    githubLink: "https://github.com/Richardzleung/Fullstack-Open/tree/master/part9/patientator-fullstack",
    dependencies: ['Typescript', 'Express', 'Next.js'],
    projectLiveSite:'',
    image: spotifyClone
  }
];

const handles = [
  {
    label: "GitHub",
    link: "https://github.com/Richardzleung",
    title: "Richardzleung",
    icon: <FiGithub size='32px' title='Github logo' />
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/richardzleung/",
    title: "Richardzleung",
    icon: <FiLinkedin size='32px' title='Linkedin logo' />
  },
  {
    label: "Email",
    link: "mailto:richardzleung@gmail.com",
    title: "richardzleung@gmail.com",
    icon: <FiMail size='32px' title='Email logo' />
  },
  {
    label: "Facebook",
    link: "https://www.facebook.com/richardleung13",
    title: "RichardLeung13",
    icon: <FiFacebook size='32px' title='Facebook logo'/>
  }
];


const frontEndSkills = [
  {
    label: 'Javascript',
    icon: <SiJavascript style={{ color: '#f0db4f' }} size='32px' title='Javascript logo'/>,
    style: { animationDelay: '0ms' }
  },
  {
    label: 'Typescript',
    icon: <SiTypescript style={{ color: '#007acc' }} size='32px' title='Typescipt logo'/>,
    style: { animationDelay: '100ms' }
  },
  {
    label: 'CSS3',
    icon: <img src={css} alt='CSS' className='skill-icon'/>,
    style: { animationDelay: '200ms' }
  },
  {
    label: 'Sass',
    icon: <SiSass size='32px' style={{ color: '#cc6699' }} title='SASS logo'/>,
    style: { animationDelay: '300ms' }
  },
  {
    label: 'HTML5',
    logo: 'https://github.com/Richardzleung/resume',
    icon: <img src={html} alt='HTML5 logo' className='skill-icon'/>,
    style: { animationDelay: '400ms' }
  },
  {
    label: 'React',
    icon: <SiReact style={{ color: '#61DBFB' }} size='32px' title='React logo'/>,
    style: { animationDelay: '500ms' }
  },
  {
    label: 'Redux',
    icon: <SiRedux style={{ color: '#764abc' }} size='32px' title='Redux logo'/>,
    style: { animationDelay: '600ms' }
    
  },
  {
    label: 'Testing Library',
    icon: <img src={octupus} alt='octopus-icon' className='skill-icon'/>,
    style: { animationDelay: '700ms' }
  }
  
];

const backEndSkills = [
  {
    label: 'Express',
    icon: <img src={expressIcon} alt='express-icon' className='skill-icon'/>,
    style: { animationDelay: '0ms' }
  },
  {
    label: 'Algorithms',
    icon: <SiCodewars style={{ color: '#a42d1e' }} size='32px' title='Code Wars logo'/>,
    style: { animationDelay: '200ms' }
  }, 
  {
    label: 'Jest',
    icon: <SiJest style={{ color: '#944058' }} size='32px' title='Jest logo'/>,
    style: { animationDelay: '400ms' }
  },
];

const databaseSkills = [
  {
    label: 'MongoDB',
    icon: <img src={mongoDB} alt='mongoDB-icon' className='skill-icon'/>,
    style: { animationDelay: '0ms' }
  },
  {
    label: 'PostgreSQL',
    icon: <SiPostgresql size='32px' style={{ color: '#336791' }} title='Postgresql logo'/>,
    style: { animationDelay: '250ms' }
  }
];

const miscSkills = [
  {
    label: 'React Native',
    icon: <SiReact size='32px' title='React Native logo' style={{ color: '#61DBFB' }} />,
    style: { animationDelay: '0ms' }
  },
  {
    label: 'Git',
    icon: <SiGit size='32px' title='Git logo' style={{ color: '#F1502F' }}/>,
    style: { animationDelay: '250ms' }
  }
];

export { navLinks, projects, handles, frontEndSkills, databaseSkills, backEndSkills, miscSkills };