import type { NextPage } from "next";
import { FaFile, FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoTableau } from "react-icons/io5";
import { Section } from "../components";

const LINKS = [
  {
    icon: MdEmail,
    link: "mailto:lisapatel1998@gmail.com",
  },
  {
    icon: FaGithub,
    link: "https://github.com/LISAPATEL98",
  },
  {
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/lisaapatel",
  },
  {
    icon: IoLogoTableau,
    link: "https://public.tableau.com/app/profile/lisa7954#!/",
  },
  {
    icon: FaMedium,
    link: "https://lisaapatel.medium.com/",
  },
  {
    icon: FaFile,
    link: "https://drive.google.com/file/d/1ZMFkTSLvxA1lSpF5tMa0iZjD5kby_XI7/view?usp=sharing",
  },
];

const Contact: NextPage = () => {
  return (
    <div className="container">
      <h2 className="mt-10 text-center text-2xl font-bold">Contact Me</h2>
      <Section type="dark">
        <p className="text-center">
          I enjoy meeting new people and collaborating or even just talking over
          some good coffee, so please feel free to reach out!
        </p>
        <div className="flex justify-center items-center mt-8">
          {LINKS.map(({ link, icon }, i) => {
            const Comp = icon;
            return (
              <a
                key={link}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="mr-5 last:mr-0"
              >
                <Comp size={40} />
              </a>
            );
          })}
        </div>
      </Section>
    </div>
  );
};

export default Contact;
