import Link from "next/link"
import {FaGithub, FaLinkedinIn, FaYoutube, FaTwitter} from 'react-icons/fa'
import { SiLeagueoflegends } from "react-icons/si";

const socials = [
    {icon: <FaGithub />, path: "https://github.com/jaytat132"},
    {icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/jay-tat-697510163/"},
    {icon: <SiLeagueoflegends />, path: "https://www.op.gg/summoners/na/DeeJay-DOGGY"},

]

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item,index) => {
            return (
                <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            );
        })}
    </div>

  );
};

export default Social