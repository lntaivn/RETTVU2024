
import "./Footer.css"
import logo from "../imgs/logoTVU.png"

import { Link, useLocation } from "react-router-dom";
import { Avatar } from "antd";

const Footer = () => {

    return (
        <div className="Footer">
            <Avatar src={logo} size={40} />
            <div className="Footer_info">
                <h2>Copyright © RET 2024</h2>
                <h2>TRA VINH UNIVERSITY</h2>
            </div>
            <p>Email: ret_conf@tvu.edu.vn</p>
        </div>
    )
}

export default Footer;