
import movioImage from '../assets/movio.png';
import portfolioImage from '../assets/portfolio.png';
import pomodoroImage from '../assets/pomodoro.png';
import organoteImage from '../assets/organote.png';
import projectboardImage from '../assets/projectboard.png';

export const projects = [
  {
    title: 'ProjectBoard',
    description:
      'A moderna and minimal task management board, where you can organize your projects, tesks and crate notes all in one place.',
    techStacks: ['React', 'Typescript', 'Tailwind', 'Local storage', ],
    liveUrl: 'https://viviantangdev.github.io/projectboard/',
    githubUrl: 'https://github.com/viviantangdev/projectboard',
    image: projectboardImage,
  },
  {
    title: 'Movio',
    description:
      'A modern, user-friendly cinema management and ticket booking application that allows users to browse movies, view showtimes and book seats.',
    techStacks: ['React', 'Typescript', 'Tailwind', 'Axios', ],
    liveUrl: 'https://viviantangdev.github.io/movio/',
    githubUrl: 'https://github.com/viviantangdev/movio',
    image: movioImage,
  },
  {
    title: 'OrgaNote',
    description:
      'A simple Notes app built with React + TypeScript that lets you create, edit, and delete notes — and organize them with tags.',
    techStacks: ['React', 'Typescript', 'Tailwind', 'Local storage'],
    liveUrl: 'https://viviantangdev.github.io/organote/',
    githubUrl: 'https://github.com/viviantangdev/organote',
    image: organoteImage,
  },
  {
    title: 'Pomodoro',
    description:
      'A simple and interactive Pomodoro Timer app to boost productivity using focused work intervals.',
    techStacks: ['React', 'Javascript', 'Tailwind'],
    liveUrl: 'https://viviantangdev.github.io/pomodoro/',
    githubUrl: 'https://github.com/viviantangdev/pomodoro',
    image: pomodoroImage,
  },
  {
    title: 'Portfolio',
    description:
      'My personal portfolio website where i share projects, skills and journey as a developer. Designed with a clean UI and responsive layout to provide an engaging user experiense across devices.',
    techStacks: ['React', 'Javascript', 'Tailwind'],
    liveUrl: 'https://viviantangdev.netlify.app/',
    githubUrl: 'https://github.com/viviantangdev/portfolio',
    image: portfolioImage,
  },
];
