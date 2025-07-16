import Section from "./Section";
import { Code } from 'lucide-react';
import Pill from "./Pill";

const Skills = () => {
  const skillTitles = ["JavaScript", "React", "Python", "SQL", "Git", "AWS", "Docker"];
  return <Section icon={<Code />} sectionTitle="Skills">
    {skillTitles.map(title => <Pill key={title} title={title} />)}
  </Section>

}

export default Skills;