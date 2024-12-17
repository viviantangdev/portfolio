import React from 'react';
import logos from '../assets/logos/logos.json';


export const About = () => {
  return (
    <section id='about'>
      <h2 className=''>About me</h2>
      <br></br>
      <p>
        Hi, my name is Vivian with 2 years of experience in Frontend
        Development. I’m proficient in a variety of programming languages and
        technologies, and I specialize in building beautiful, responsive, and
        user-friendly web applications that deliver exceptional user
        experiences.
      </p>
      <br></br>
      <p>
        On a personal level, I am self-driven, hardworking, and quick to adapt.
        I’m also friendly and able to integrate well into any team. I enjoy the
        challenge of bringing designs to life, optimizing web performance and
        writing clean, maintainable code.
      </p>
      
      <div className='flex space-x-10 text-5xl py-10'>
       {logos.map((logo, index)=> (<img key={index} src={require(`../assets/logos/${logo.src}`)} alt={logo.alt}/>))}
      </div>
    </section>
  );
};
