import AnimationFadeIn from '../components/AnimationFadeIn';
import SectionTitle from '../components/SectionTitle';
import { socials } from '../data/socials';

const Contact = () => {
  return (
    <section id="contact" className='pb-25'>
      <AnimationFadeIn>

      <SectionTitle title={'Connect with me'} />
      </AnimationFadeIn>
      <div className='flex gap-1.5'>
        {socials.map((social) => (
          <AnimationFadeIn>
            <a href={social.link} className='card gap-2 w-[95px] flex flex-col justify-center items-center'>
              {social.icon}
              {social.title}
            </a>
          </AnimationFadeIn>
        ))}
      </div>
    </section>
    /*TODO Add social links with icon and text*/
  );
};

export default Contact;
