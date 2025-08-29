import SectionTitle from '../components/SectionTitle';
import { socials } from '../data/socials';

const Contact = () => {
  return (
    <section className='pb-25'>
      <SectionTitle title={'Connect with me'} />
      <div className='flex gap-1.5'>
        {socials.map((social) => (
          <div className='card gap-2 w-[95px] flex flex-col justify-center items-center'>
            {social.icon}
            {social.title}
          </div>
        ))}
      </div>
    </section>
    /*TODO Add social links with icon and text*/
  );
};

export default Contact;
