import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';
import Swal from 'sweetalert2';

const socialMediaIcons = [
  {
    link: 'https://github.com/viviantangdev',
    icon: <FaGithub />,
  },
  {
    link: 'https://www.linkedin.com/in/viviantangdev/',
    icon: <FaLinkedin />,
  },
  {
    link: 'mailto:viviantang.dev@gmail.com',
    icon: <MdAlternateEmail />,
  },
];

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append('access_key', process.env.REACT_APP_WEB3FORMS_PUBLIC_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: 'Thank you!',
        text: 'Message sent successfully!',
        icon: 'success',
        confirmButtonColor: 'rgb(var(--accent))',
      });
    }
  };

  return (
    <section id='contact'>
      <h2>Contact me</h2>
      <br></br>
      <p>Feel free to connect with me.</p>
      <div className='socailMedia'>
        <ul>
          {socialMediaIcons.map(({ link, icon }, key) => (
            <li>
              <a
                href={link}
                key={key}
                target='_blank'
                rel='noopener noreferrer'
                className='md:text-custom-text text-custom-accent hover:text-custom-accent hover:scale-110 transition-all duration-200 ease-in-out'
              >
                {icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <br></br>
      <div className='w-auto'>
        <form onSubmit={onSubmit} className='flex flex-col space-y-3'>
          <div className='flex items-center space-x-5'>
            <div className='flex flex-col w-full'>
              <label htmlFor='name' className='text-custom-text py-2'>
                Name
              </label>
              <input
                required
                type='text'
                name='name'
                placeholder='Enter your name here'
                className='rounded-lg p-2'
              />
            </div>
            <div className='flex flex-col w-full'>
              <label htmlFor='email' className='text-custom-text py-2'>
                Email
              </label>
              <input
                required
                type='email'
                name='email'
                placeholder='Enter your email here'
                className='rounded-lg p-2'
              />
            </div>
          </div>

          <div className='flex flex-col w-full'>
            <label htmlFor='message' className='text-custom-text py-2'>
              Message
            </label>
            <textarea
              required
              name='message'
              placeholder='Enter your message here'
              className='rounded-lg p-2 min-h-40'
            ></textarea>
          </div>
          <button type='submit' className=''>
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
