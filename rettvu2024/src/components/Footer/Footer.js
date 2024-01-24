
import "./Footer.css"
import logo from "../imgs/logoTVU.png"

import { Link, useLocation } from "react-router-dom";
import { Avatar } from "antd";

const Footer = () => {

    return (
        <div className="Footer">
            <div className="Footer_info">
                <h3>Copyright © RET 2024</h3>
                <h2>Tra Vinh University</h2>
            </div>
            <p>Email: ret_conf@tvu.edu.vn</p>
        </div>
    )
}

export default Footer;