
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Admin.css"
import { useEffect, useState } from "react";
import { Button, Spin, notification } from "antd";
import { clearCache, getAboutRet, getCommittees, getContact, getImportantDate, getKey, getSpeakers, getSubmissionGuideline, getTopics, getTravelInfo } from "../../service/DataService";

const Admin = () => {

    const [spinning, setSpinning] = useState(false);
    const [api, contextHolder] = notification.useNotification();

    const location = useLocation();
    const navigate = useNavigate();
    const verify = location.state;

    useEffect(() => {
        if (verify === null) navigate("/verify");
    }, []);

    const openNotificationWithIcon = (type, msg) => {
        api[type]({
            message: msg
        });
    };

    const handleRestartServer = async () => {
        setSpinning(true);
        try {
            await clearCache();
            const functionsArray = [
                getSpeakers(),
                getTravelInfo(),
                getSubmissionGuideline(),
                getCommittees(),
                getTopics(),
                getImportantDate(),
                getAboutRet(),
                getKey(),
                getContact()
            ];

            Promise.all(functionsArray)
                .then((results) => {
                    setSpinning(false);
                    openNotificationWithIcon('success', 'Restart Successfully');
                })
                .catch((error) => {
                    setSpinning(false);
                    openNotificationWithIcon('error', 'Restart Failed');
                });
        } catch (error) {
            setSpinning(false);
            openNotificationWithIcon('error', 'Restart Failed');
        }
    }

    return (
        <div className="Admin">
            {contextHolder}
            <Spin spinning={spinning} fullscreen />
            {
                verify &&
                <div className="Admin_Control">
                    <div className='Verify_title'>
                        <h3>Admin for RET 2024</h3>
                        <span>Tra Vinh University</span>
                    </div>
                    <Button type="primary" icon={<i className="fa-solid fa-rotate-right"></i>} size="large" onClick={() => handleRestartServer()}>
                        Restart Server
                    </Button>
                    <Link
                        to="https://docs.google.com/spreadsheets/d/1GDbMvgccOrpWna1aKvF8jUyjahFEp2e2TUZKDmgwHUM/edit?usp=sharing"
                        target="blank"
                        className="Admin_Control_edit"
                    >
                        Edit content with Google Sheet  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </Link>
                    <Link
                        to="/"
                        className="Admin_Control_edit"
                    >
                        <i className="fa-solid fa-arrow-left-long"></i> Back
                    </Link>
                </div>
            }
        </div>
    )
}

export default Admin;