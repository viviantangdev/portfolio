import SectionTitle from '../components/SectionTitle';
import { socials } from '../data/socials';

const Contact = () => {
  return (
    <section
      id='contact'
      data-aos='fade-in'
      data-aos-duration='3000'
      className='pb-25'
    >
      <SectionTitle title={'Connect with me'} />

      <div className='flex gap-1.5'>
        {socials.map((social, index) => (
          <a
            key={index}
                 data-aos='zoom-in'
      data-aos-duration='1000'
            href={social.link}
            className='card gap-2 w-[95px] flex flex-col justify-center items-center'
          >
            {social.icon}
            {social.title}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
