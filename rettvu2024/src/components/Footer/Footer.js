
import "./Footer.css"
import logo from "../imgs/logoTVU.png"

import { Link, useLocation } from "react-router-dom";
import { Avatar } from "antd";

const Footer = () => {

    return (
        <div className="Footer">
            <Avatar src={logo} size={40} />
            <h2>RET 2024 TRA VINH UNIVERSITY</h2>
            <p>CONTACT US: ret_conf@tvu.edu.vn</p>
        </div>
    )
}

export default Footer;