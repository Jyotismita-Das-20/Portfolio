import List from "./List";
import Section from "./Section";
import { Heart } from 'lucide-react';

const Hobbies = () => {
  const hobbies = ["Reading", "Traveling", "Cooking", "Photography", "Gaming"];
  return <Section icon={ <Heart />} sectionTitle="Hobbies & Interests">
    <List items={hobbies}/>
  </Section>
}

export default Hobbies;