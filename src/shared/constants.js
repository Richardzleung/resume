import { mdiGithub, mdiFacebook, mdiLinkedin, mdiEmail } from '@mdi/js'; 

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

const technicalSkills = [
 {
   label: 'Javascript',
   link: 'https://github.com/Richardzleung/resume'
 },
 {
   label: 'Typescript',
   link: 'https://github.com/Richardzleung/Fullstack-Open/tree/master/part9/patientator-fullstack'
 },
 {
   label: 'CSS',
   link: 'https://github.com/Richardzleung/resume'
 },
 {
   label: 'HTML5',
   link: 'https://github.com/Richardzleung/resume'
 },
 {
   label: 'React',
   link: 'https://github.com/Richardzleung/resume'
 },
 {
  label: 'React Native',
  link: 'https://github.com/Richardzleung/rate-repository-app'
  },
 {
   label: 'Redux',
   link: 'https://github.com/Richardzleung/Fullstack-Open/blob/master/part6/anecdotes-redux'
 },
 {
   label: 'Data structures & Algorithms',
   link: 'https://www.codewars.com/users/Richardzleung'
 }, 
 {
   label: 'Test Driven Development',
   link: 'https://github.com/Richardzleung/Fullstack-Open/tree/master/part5'
 },
 {
   label: 'MongoDB',
   link: 'https://github.com/Richardzleung/Fullstack-Open/tree/master/part5'
 }
 
];


export { navLinks, projects, handles, technicalSkills };