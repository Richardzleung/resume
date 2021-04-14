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
import smallPatientator from 'static/images/patientator/patientator_cibnxs_c_scale,w_190.png';
import largePatientator from 'static/images/patientator/patientator_cibnxs_c_scale,w_1080.png';
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
    srcset:`${smallPatientator} 190w, ${largePatientator} 1080w`,
    src: largePatientator
  },
];

const handles = [
  {
    label: "GitHub",
    link: "https://github.com/Richardzleung",
    title: "Richardzleung",
    icon: <FiGithub size='32px' title='Github logo' style={{ color: 'whitesmoke' }}/>
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/richardzleung/",
    title: "Richardzleung",
    icon: <FiLinkedin size='32px' title='Linkedin logo' style={{ color: 'whitesmoke' }}/>
  },
  {
    label: "Email",
    link: "mailto:richardzleung@gmail.com",
    title: "richardzleung@gmail.com",
    icon: <FiMail size='32px' title='Email logo' style={{ color: 'whitesmoke' }}/>
  },
  {
    label: "Facebook",
    link: "https://www.facebook.com/richardleung13",
    title: "RichardLeung13",
    icon: <FiFacebook size='32px' title='Facebook logo' style={{ color: 'whitesmoke' }}/>
  }
];


const frontEndSkills = [
  {
    label: 'Javascript',
    link: 'https://github.com/Richardzleung/resume',
    icon: <SiJavascript style={{ color: '#f0db4f' }} size='32px' title='Javascript logo'/>,
    testing: SiJavascript.src
  },
  {
    label: 'Typescript',
    link: 'https://github.com/Richardzleung/Fullstack-Open/tree/master/part9/patientator-fullstack',
    icon: <SiTypescript style={{ color: '#007acc' }} size='32px' title='Typescipt logo'/>
  },
  {
    label: 'CSS3',
    link: 'https://github.com/Richardzleung/resume',
    icon: <img src={css} alt='CSS' className='skill-icon'/>
  },
  {
    label: 'HTML5',
    logo: 'https://github.com/Richardzleung/resume',
    icon: <img src={html} alt='HTML5 logo' className='skill-icon'/>

  },
  {
    label: 'React',
    link: 'https://github.com/Richardzleung/resume',
    icon: <SiReact style={{ color: '#61DBFB' }} size='32px' title='React logo'/>
  },
  {
    label: 'Redux',
    link: 'https://github.com/Richardzleung/Fullstack-Open/blob/master/part6/anecdotes-redux',
    icon: <SiRedux style={{ color: '#764abc' }} size='32px' title='Redux logo'/>
  },
  {
    label: 'Testing Library',
    link: 'https://github.com/Richardzleung/resume',
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
    icon: <SiCodewars style={{ color: '#a42d1e' }} size='32px' title='Code Wars logo'/>
  }, 
  {
    label: 'Jest',
    link: 'https://github.com/Richardzleung/Fullstack-Open/tree/master/part5',
    icon: <SiJest style={{ color: '#944058' }} size='32px' title='Jest logo'/>
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
    icon: <SiPostgresql size='32px' style={{ color: '#336791' }} title='Postgresql logo'/>
  }
];

const mobileSkills = [
  {
    label: 'React Native',
    link: 'https://github.com/Richardzleung/rate-repository-app',
    icon: <SiReact size='32px' title='React Native logo'/>
  },
];

export { navLinks, projects, handles, frontEndSkills, databaseSkills, backEndSkills, mobileSkills };