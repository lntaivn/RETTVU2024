
import { Avatar } from "antd";
import logo from "../imgs/logoTVU.png"
import "./Header.css"
import { Link, useLocation } from "react-router-dom";

const Header = () => {

    const location = useLocation();

    return (
        <div className="Header">
            <div className="Header-left">
                <div className="Header-logo" >
                    <Avatar src={logo} size={35} />
                </div>
                <div className="Header-tab">
                    <Link to="/about" className={location.pathname.startsWith('/about') ? "Header-link Heade-active" : "Header-link"}>About RET</Link>
                </div>
                <div className="Header-tab">
                    <Link to="/committee" className={location.pathname.startsWith('/committee') ? "Header-link Heade-active" : "Header-link"}>Committee</Link>
                </div>
                <div className="Header-tab">
                    <Link to="/program" className={location.pathname.startsWith('/program') ? "Header-link Heade-active" : "Header-link"}>Program</Link>
                </div>
                <div className="Header-tab">
                    <Link to="/submission" className={location.pathname.startsWith('/submission') ? "Header-link Heade-active" : "Header-link"}>Submission</Link>
                </div>
                <div className="Header-tab">
                    <h3
                        className={location.pathname.startsWith('/travel-information') || location.pathname.startsWith('/travel-notes') || location.pathname.startsWith('/contact-us')
                            ? "Header-link Heade-group-active Header-group"
                            : "Header-link Header-group"}
                    >
                        <span>Support</span><i class="fa-solid fa-caret-down"></i>
                    </h3>
                    <div className="Header-tab_child">
                        <Link to="/travel-information" className={location.pathname.startsWith('/travel-information') ? "Header-link Heade-active" : "Header-link"}>Travel Information</Link>
                        <Link to="/travel-notes" className={location.pathname.startsWith('/travel-notes') ? "Header-link Heade-active" : "Header-link"}>Travel Notes</Link>
                        <Link to="/contact-us" className={location.pathname.startsWith('/contact-us') ? "Header-link Heade-active" : "Header-link"}>Contact Us</Link>
                    </div>
                </div>
                <div className="Header-tab">
                    <h3
                        className={location.pathname.startsWith('/ret-2023') 
                        || location.pathname.startsWith('/ret-2022') 
                        || location.pathname.startsWith('/ret-2021')
                        || location.pathname.startsWith('/ret-2020') 
                        || location.pathname.startsWith('/ret-2019')
                        || location.pathname.startsWith('/ret-2018')
                            ? "Header-link Heade-group-active Header-group"
                            : "Header-link Header-group"}
                    >
                        <span>History</span><i class="fa-solid fa-caret-down"></i>
                    </h3>
                    <div className="Header-tab_child">
                        <Link to="/ret-2023" className={location.pathname.startsWith('/ret-2023') ? "Header-link Heade-active" : "Header-link"}>RET 2023</Link>
                        <Link to="/ret-2022" className={location.pathname.startsWith('/ret-2022') ? "Header-link Heade-active" : "Header-link"}>RET 2022</Link>
                        <Link to="/ret-2021" className={location.pathname.startsWith('/ret-2021') ? "Header-link Heade-active" : "Header-link"}>RET 2021</Link>
                        <Link to="/ret-2020" className={location.pathname.startsWith('/ret-2020') ? "Header-link Heade-active" : "Header-link"}>RET 2020</Link>
                        <Link to="/ret-2019" className={location.pathname.startsWith('/ret-2019') ? "Header-link Heade-active" : "Header-link"}>RET 2019</Link>
                        <Link to="/ret-2018" className={location.pathname.startsWith('/ret-2018') ? "Header-link Heade-active" : "Header-link"}>RET 2018</Link>
                    </div>
                </div>
            </div>
            <div className="Header-middle">
                <input type="text" placeholder="Tìm kiếm"/>
            </div>
            <div className="Header-right">
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}

export default Header;