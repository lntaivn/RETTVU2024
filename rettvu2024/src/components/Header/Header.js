
import { Avatar, Drawer, Menu, ConfigProvider } from "antd";
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import logo from "../imgs/logoTVU.png"
import "./Header.css"
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Header = () => {

    const location = useLocation();

    const [openSearch, setOpenSearch] = useState(false);
    const [openMobileMenu, setOpenMobileMenu] = useState(false);

    const showDrawer = () => {
        setOpenMobileMenu(true);
    };
    const onClose = () => {
        setOpenMobileMenu(false);
    };

    const getItem = (label, key, icon, children, type) => {
        return {
            key,
            icon,
            children,
            label,
            type,
        };
    }

    const items = [
        getItem(<Link to="/" onClick={() => {onClose()}}>About RET</Link>, 'about'),
        getItem(<Link to="/committee" onClick={() => {onClose()}}>Committee</Link>, 'committee'),
        getItem(<Link to="/program" onClick={() => {onClose()}}>Program</Link>, 'program'),
        getItem(<Link to="/submission" onClick={() => {onClose()}}>Submission</Link>, 'submission'),
        getItem('Support', 'support', null, [
            getItem(<Link to="/travel-information" onClick={() => {onClose()}}>Travel Information</Link>, 'travel-information'),
            getItem(<Link to="/travel-notes" onClick={() => {onClose()}}>Travel Notes</Link>, 'travel-notes'),
            getItem(<Link to="/contact-us" onClick={() => {onClose()}}>Contact Us</Link>, 'contact us'),
        ]),
        getItem('History', 'sub4', null, [
            getItem(<Link to="/ret-2023" onClick={() => {onClose()}}>RET 2023</Link>, 'ret-2023'),
            getItem(<Link to="/ret-2022" onClick={() => {onClose()}}>RET 2022</Link>, 'ret-2022'),
            getItem(<Link to="/ret-2021" onClick={() => {onClose()}}>RET 2021</Link>, 'ret-2021'),
            getItem(<Link to="/ret-2020" onClick={() => {onClose()}}>RET 2020</Link>, 'ret-2020'),
            getItem(<Link to="/ret-2019" onClick={() => {onClose()}}>RET 2019</Link>, 'ret-2019'),
            getItem(<Link to="/ret-2018" onClick={() => {onClose()}}>RET 2018</Link>, 'ret-2018'),
        ]),
    ];

    const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

    const [openKeys, setOpenKeys] = useState(['sub1']);
    const onOpenChange = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

    return (
        <div className="Header">
            <div className="Header-left">
                <div className="Header-logo" >
                    <Link to="/"><Avatar src={logo} size={35} /></Link>
                    <Link to="/"><div className="Header-name">RET 2024</div></Link>
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
            {/* {
                openSearch &&
                <div className="Header-middle">
                    <input type="text" placeholder="Tìm kiếm" />
                </div>
            } */}
            <div className="Header-right" onClick={() => { setOpenSearch(!openSearch) }}>
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="Header-mobile-right" onClick={() => { showDrawer() }}>
                <i class="fa-solid fa-bars"></i>
            </div>
            <Drawer title="TVU RET 2024" onClose={onClose} open={openMobileMenu} width={300} >
                <Menu
                    mode="inline"
                    openKeys={openKeys}
                    onOpenChange={onOpenChange}
                    items={items}
                    style={{ width: "100%", border: "none", fontWeight: "500", fontSize: "16px" }}
                />
            </Drawer>
        </div >
    )
}

export default Header;