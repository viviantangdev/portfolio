import {
  FaBrain,
  FaBroom,
  FaLaptopCode,
  FaScrewdriverWrench,
  FaUser,
} from 'react-icons/fa6';
import { GiChemicalDrop } from 'react-icons/gi';import { RiDrinks2Line } from "react-icons/ri";


export const aboutHighlights = [
  {
    icon: <FaLaptopCode className='text-[var(--tw-accent)]' />,
    text: 'I build clean, responsive applications with a focus on user experience.',
  },
  {
    icon: <FaBrain className='text-[var(--tw-accent)]' />,
    text: 'I enjoy exploring new tools and technologies to sharpen my skills.',
  },
  {
    icon: <FaScrewdriverWrench className='text-[var(--tw-accent)]' />,
    text: 'I turn concepts into real, usable things that people actually enjoy using.',
  },
];

export const myApproach = [
  {
    icon: <FaUser className='text-[var(--tw-accent)]' />,
    text: 'Start with the user in mind.',
  },
  {
    icon: <FaBroom className='text-[var(--tw-accent)]' />,
    text: 'Write clean, maintainable code.',
  },
  {
    icon: <GiChemicalDrop className='text-[var(--tw-accent)]' />,
    text: 'Always open to trying new ways to solve problems.',
  },
];

export const outsideOfCoding = [
  {
    icon: <GiChemicalDrop className='text-[var(--tw-accent)]' />,
    text: 'Learning something new (not always code!).',
  },
  {
    icon: <RiDrinks2Line className='text-[var(--tw-accent)]' />,
    text: 'Refueling with something caffeinated.',
  },
  {
    icon: <FaScrewdriverWrench className='text-[var(--tw-accent)]' />,
    text: 'Building things just for fun.',
  },
 
];
