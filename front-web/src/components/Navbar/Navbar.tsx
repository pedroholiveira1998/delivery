import './styles.css';
import  logo  from './../../assets/images/logo.svg';

function Navbar() {
    return (
        <nav className="navbar">
            <img className = "logo" src={ logo } alt="logo"></img>
            <a href="/">Delivery</a>
        </nav>
    );
}

export default Navbar;