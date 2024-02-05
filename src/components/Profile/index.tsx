import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

import styles from "./style.module.css";

interface ProfileProps {
  text: string;
  url: string;
}

const Profile = ({ text, url }: ProfileProps) => {
  const hoverBg =
    text === "Github"
      ? "github"
      : text === "Linkedin"
      ? "linkedin"
      : text === "Instagram"
      ? "instagram"
      : null;
  return (
    <li
      className={`cursor-pointer px-16 py-2 bg-grey text-white text-center rounded-md ${
        styles.item
      }
   ${
     hoverBg == "github"
       ? styles.github
       : hoverBg === "linkedin"
       ? styles.linkedin
       : hoverBg === "instagram"
       ? styles.instagram
       : null
   } `}
    >
      <a className="flex flex-row gap-2 items-center justify-center" href={url}>
        <span>
          {text === "Github" ? (
            <FaGithub />
          ) : text === "Linkedin" ? (
            <FaLinkedin></FaLinkedin>
          ) : text === "Instagram" ? (
            <AiFillInstagram></AiFillInstagram>
          ) : null}
        </span>
        <span>{text}</span>
      </a>
    </li>
  );
};

export default Profile;
