import './styles.css';
import youtube from './../../assets/images/Youtube.svg';
import linkedin from './../../assets/images/Linkedin.svg';
import instagram from './../../assets/images/Instagram.svg';


function Footer() {
    return (
        <div className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://www.youtube.com/channel/UC3twHmWQwtqEO7u-gB_2f7g" target="_new">
                    <img src={ youtube } alt="youtube"></img>
                </a>
                <a href="https://www.linkedin.com/in/pedro-henrique-castro-de-oliveira-75335a1b2/" target="_new">
                    <img src={ linkedin } alt="linkedin"></img>
                </a>
                <a href="https://www.instagram.com/devsuperior.ig/?hl=pt" target="_new">
                    <img src={ instagram } alt="instagram"></img>
                </a>
            </div>
        </div>
    );
}

export default Footer;