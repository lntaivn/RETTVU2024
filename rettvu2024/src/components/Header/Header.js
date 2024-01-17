
import { Avatar } from "antd";
import logo from "../imgs/logoTVU.png"
import "./Header.css"
import { Link, useLocation } from "react-router-dom";

const Header = () => {

    const location = useLocation();

    return (
        <div className="Header">
            <div className="Header-logo" >
                <Avatar src={logo} size={40} />
            </div>
            <Link to="/" className={location.pathname === '/' ? "Header-link Heade-active" : "Header-link"}>Program</Link>
            <Link to="/committee" className={location.pathname.startsWith('/committee') ? "Header-link Heade-active" : "Header-link"}>Committee</Link>
            <Link to="/about" className={location.pathname.startsWith('/about') ? "Header-link Heade-active" : "Header-link"}>About RET</Link>
            <Link to="/contact" className={location.pathname.startsWith('/contact') ? "Header-link Heade-active" : "Header-link"}>Contact</Link>
        </div>
    )
}

export default Header;