import { Twitter } from 'lucide-react';
import Section from "./Section";
import { Globe } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import SocialMedia from "./SocialMedia";
import { Github } from 'lucide-react';


const Contact = () => {
  const socialLinks = [
    {icon: <Linkedin />, title: "LinkedIn", url: "https://www.linkedin.com"},
    {icon: <Github />, title: "Github", url: "https://www.github.com"},
    {icon: <Twitter />, title: "Twitter", url: "https://www.twitter.com"}
  ];

  return <div className="pb-6">
    <Section icon={<Globe />} sectionTitle="Contact & Social Media">
      <p className="text-gray-700 mb-4">
      Email: jyotismita2005@gmail.com <br />
      Phone: +91 700-000-0000
      </p>
      {socialLinks.map(social => <SocialMedia icon={social.icon} title={social.title} key={social.title} url={social.url} />)}
    </Section>
  </div>
}

export default Contact;