import './index.scss'
import { faLinkedin, faGithub, faYoutube} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faUser,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link,NavLink } from 'react-router-dom';
import LogoS from '../../assets/portfolio/logo-s-1.png';
import LogoSubtitle from '../../assets/portfolio/logo_sub.png';

const Sidebar = () => {
    return (
        <div className="nav-bar">
        <Link className="logo" to="/">
            <img src={LogoS} alt="logo"/>
            <img className="sub-logo" src={LogoSubtitle} alt="slobodan"/>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4e4e4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4e4e4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4e4e4e"/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/dinosh-chriton-323846185/">
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://github.com/mdinoshc">
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCMf-AJWm1NQy-ahKUnbbdmQ">
                    <FontAwesomeIcon icon={faYoutube} color="#4d4d4e"/>
                </a>
            </li>
        </ul> 
    </div>
    )
}

export default Sidebar