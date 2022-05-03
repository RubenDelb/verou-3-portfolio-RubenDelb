import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { SiNetlify } from "react-icons/si";

const SocialMedia = () => {
  return (
    <div className='app__social' target="_blank" rel="noopener noreferrer">
        <a target="_blank" rel="noopener noreferrer" href='https://github.com/RubenDelb'>
            <BsGithub />
        </a>
        <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/ruben-delbrassine-ab861888/'>
            <BsLinkedin />
        </a>
    </div>
  )
}

export default SocialMedia