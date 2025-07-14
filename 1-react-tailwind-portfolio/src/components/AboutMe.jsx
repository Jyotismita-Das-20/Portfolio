import { User } from 'lucide-react';
import Section from './Section';

const AboutMe = () => {
  return (
    <Section icon={<User />} sectionTitle="About Me">
  <p>
    I am a passionate web developer with a keen interest in creating dynamic and responsive web applications. My journey in web development has equipped me with a solid foundation in HTML, CSS, and JavaScript, along with experience in modern frameworks like React.
  </p>
  </Section>
  );
}

export default AboutMe;