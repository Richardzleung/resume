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
} from "react-icons/si";
import native from 'static/images/rate-repository-thumbnail.svg';
import patientator from 'static/images/patientator.png'
import expressIcon from 'static/images/expressjs-icon.svg';
import octupus from 'static/images/octopus-64x64.png';
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
    description: "Make a review your favorite public GitHub repositories",
    title: "Rate Repository App",
    githubLink: "https://github.com/Richardzleung/rate-repository-app",
    dependencies:  ['React Native', 'Formik', 'Yup'],
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
];

const handles = [
  {
    label: "GitHub",
    link: "https://github.com/Richardzleung",
    title: "Richardzleung",
    icon: <FiGithub size='32px'/>
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/richardzleung/",
    title: "Richardzleung",
    icon: <FiLinkedin size='32px'/>
  },
  {
    label: "Email",
    link: "mailto:richardzleung@gmail.com",
    title: "richardzleung@gmail.com",
    icon: <FiMail size='32px'/>
  },
  {
    label: "Facebook",
    link: "https://www.facebook.com/richardleung13",
    title: "RichardLeung13",
    icon: <FiFacebook size='32px'/>
  }
];


const frontEndSkills = [
  {
    label: 'Javascript',
    link: 'https://github.com/Richardzleung/resume',
    icon: <SiJavascript style={{ color: '#f0db4f', background: '#323330' }} size='32px'/>
  },
  {
    label: 'Typescript',
    link: 'https://github.com/Richardzleung/Fullstack-Open/tree/master/part9/patientator-fullstack',
    icon: <SiTypescript style={{ color: '#007acc', background: '#ffffff' }} size='32px'/>
  },
  {
    label: 'CSS3',
    link: 'https://github.com/Richardzleung/resume',
    icon: <img src={css} alt='css' className='skill-icon'/>
  },
  {
    label: 'HTML5',
    link: 'https://github.com/Richardzleung/resume',
    icon: <img src={html} alt='html5-icon' className='skill-icon'/>

  },
  {
    label: 'React',
    link: 'https://github.com/Richardzleung/resume',
    icon: <SiReact style={{ color: '#61DBFB', background: '#ffffff' }} size='32px'/>
  },
  {
    label: 'Redux',
    link: 'https://github.com/Richardzleung/Fullstack-Open/blob/master/part6/anecdotes-redux',
    icon: <SiRedux style={{ color: '#764abc', background: '#ffffff' }} size='32px'/>
  },
  {
    label: 'Testing Library',
    icon: <img src={octupus} alt='octopus-icon' className='skill-icon'/>
  }
  
];

const backEndSkills = [
  {
    label: 'Express',
    link: 'https://github.com/Richardzleung/Fullstack-Open/tree/master/part5',
    icon: <img src={expressIcon} alt='express-icon' className='skill-icon'/>
  },
  {
    label: 'Algorithms',
    link: 'https://www.codewars.com/users/Richardzleung',
    icon: <SiCodewars style={{ color: '#a42d1e' }} size='32px'/>
  }, 
  {
    label: 'Jest',
    link: 'https://github.com/Richardzleung/Fullstack-Open/tree/master/part5',
    icon: <SiJest style={{ color: '#944058', background: '#ffffff' }} size='32px'/>
  },
];

const databaseSkills = [
  {
    label: 'MongoDB',
    link: 'https://github.com/Richardzleung/Fullstack-Open/tree/master/part5',
    icon: <img src={mongoDB} alt='mongoDB-icon' className='skill-icon'/>
  },
  {
    label: 'PostgreSQL',
    icon: <SiPostgresql size='32px' style={{ color: '#336791' }}/>
  }
];

const mobileSkills = [
  {
    label: 'React Native',
    link: 'https://github.com/Richardzleung/rate-repository-app',
    icon: <SiReact size='32px'/>
  },
];

export { navLinks, projects, handles, frontEndSkills, databaseSkills, backEndSkills, mobileSkills };