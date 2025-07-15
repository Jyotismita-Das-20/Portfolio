import List from "./List";
import Section from "./Section";
import { Award } from 'lucide-react';

const Extracurrical = () => {
  const CurricularItems = [
    "Volunteer at local coding bootcamp for underprivileged youth",
    "Organized community clean-up events",
    "Member of university's tech club",
  ];
  return <Section icon={<Award />} sectionTitle="Extracurrical Activities">
    <List items={CurricularItems}/>
  </Section>

}

export default Extracurrical;