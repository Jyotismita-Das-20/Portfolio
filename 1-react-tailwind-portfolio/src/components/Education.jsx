import Graduation from "./Graduation";
import Section from "./Section";
import { BookOpen } from 'lucide-react';

const Education = () => {
  return <Section icon={ <BookOpen />} sectionTitle="Education">
    <Graduation title="Bachelor of Science in Computer science" school="University of Technology" year="2015-2019" />

    <Graduation title="Fullstack web development" school="Kg coding" year="2024-2025" />
  </Section>

}

export default Education;