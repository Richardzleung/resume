import React from 'react'
import { mdiGithub, mdiFacebook, mdiLinkedin, mdiEmail } from '@mdi/js'; 
import { 
  SiPostgresql, 
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiRedux,
  SiJest,
  SiCodewars,
  SiMongodb
} from "react-icons/si";
import native from '../static/images/native.png';
import patientator from '../static/images/patientator.png'

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
    icon: mdiGithub
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/richardzleung/",
    title: "Richardzleung",
    icon: mdiLinkedin
  },
  {
    label: "Email",
    link: "mailto:richardzleung@gmail.com",
    title: "richardzleung@gmail.com",
    icon: mdiEmail
  },
  {
    label: "Facebook",
    link: "https://www.facebook.com/richardleung13",
    title: "RichardLeung13",
    icon: mdiFacebook
  }
];


const frontEndSkills = [
  {
    label: 'Javascript',
    link: 'https://github.com/Richardzleung/resume',
    icon: <SiJavascript style={{ color: '#f0db4f', background: '#323330' }}/>
  },
  {
    label: 'Typescript',
    link: 'https://github.com/Richardzleung/Fullstack-Open/tree/master/part9/patientator-fullstack',
    icon: <SiTypescript style={{ color: '#007acc', background: '#ffffff' }}/>
  },
  {
    label: 'CSS3',
    link: 'https://github.com/Richardzleung/resume',
    icon: <SiCss3 />
  },
  {
    label: 'HTML5',
    link: 'https://github.com/Richardzleung/resume',
    icon: <SiHtml5 />

  },
  {
    label: 'React',
    link: 'https://github.com/Richardzleung/resume',
    icon: <SiReact style={{ color: '#61DBFB', background: '#ffffff' }}/>
  },
  {
    label: 'Redux',
    link: 'https://github.com/Richardzleung/Fullstack-Open/blob/master/part6/anecdotes-redux',
    icon: <SiRedux style={{ color: '#764abc', background: '#ffffff' }}/>
  },
  {
    label: 'Jest',
    link: 'https://github.com/Richardzleung/Fullstack-Open/tree/master/part5',
    icon: <SiJest style={{ color: '#944058', background: '#ffffff' }}/>
  },
];

const backEndSkills = [
  {
    label: 'Express',
    link: 'https://github.com/Richardzleung/Fullstack-Open/tree/master/part5'
  },
  {
    label: 'Data structures & Algorithms',
    link: 'https://www.codewars.com/users/Richardzleung',
    icon: <SiCodewars style={{ color: '#a42d1e', background: '#262729' }}/>
  }, 
  {
    label: 'Test Driven Development',
    link: 'https://github.com/Richardzleung/Fullstack-Open/tree/master/part5'
  },
];

const databaseSkills = [
  {
    label: 'MongoDB',
    link: 'https://github.com/Richardzleung/Fullstack-Open/tree/master/part5',
    icon: <SiMongodb />
  },
  {
    label: 'PostgreSQL',
    icon: <SiPostgresql />
  }
];

const mobileSkills = [
  {
    label: 'React Native',
    link: 'https://github.com/Richardzleung/rate-repository-app',
    icon: <SiReact />
  },
];

export { navLinks, projects, handles, frontEndSkills, databaseSkills, backEndSkills, mobileSkills };