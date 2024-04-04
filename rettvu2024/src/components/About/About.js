import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import "./About.css";
import { DataStore } from "../Database";
import { getAboutRet, getImportantDate, getSpeakers, getSubmissionGuideline, getTopics } from "../../service/DataService";

const About = () => {
    const database = useContext(DataStore);
    // const About_content = database?.About_content;
    // const About_content_topic = database?.About_content_topic;
    // const Submission_Guideline = database?.Submission_Guideline;
    // const Speakers = database?.Speakers;
    // const About_Important_Date = database?.About_Important_Date;
    const [Speakers, setSpeakers] = useState([]);
    const [About_content, setAbout_content] = useState([]);
    const [About_content_topic, setAbout_content_topic] = useState([]);
    const [Submission_Guideline, setSubmission_Guideline] = useState([]);
    const [ImportantDate, setImportantDate] = useState([]);

    const handleGetSpeakers = async () => {
        try {
            const response = await getSpeakers();
            setSpeakers(response.data);
        } catch (error) {
        }
    };

    const handleGetImportantDate= async () => {
        try {
            const response = await getImportantDate();
            setImportantDate(response.data);
        } catch (error) {
        }
    };

    const handleGetAbout = async () => {
        try {
            const response = await getAboutRet();
            setAbout_content(response.data);
        } catch (error) {
        }
    };

    const handleGetTopic = async () => {
        try {
            const response = await getTopics();
            setAbout_content_topic(response.data);
        } catch (error) {
        }
    };

    function groupDataByTitle(data) {
        return data.reduce((acc, item) => {
            const { title, content } = item;
            if (!acc[title]) {
                acc[title] = [];
            }
            acc[title].push(content);
            return acc;
        }, {});
    }

    const handleGetSubmissionGuideline = async () => {
        try {
            const response = await getSubmissionGuideline();
            const groupedSubmissionGuideline = groupDataByTitle(response.data);
            const submissionGuideline = [groupedSubmissionGuideline];
            setSubmission_Guideline(submissionGuideline);
        } catch (error) {
            console.error("Error while fetching submission guideline:", error);
        }
    };

    useEffect(() => {
        handleGetSpeakers();
        handleGetAbout();
        handleGetTopic();
        handleGetSubmissionGuideline();
        handleGetImportantDate();
    }, []);

    return (
        <>
            <div className="About">
                <div className="About_content_text">
                    <h2>About RET</h2>
                    <p>{About_content[0]?.text}</p>
                    <Link className="Call-for-papers-link" to="/call-for-papers">
                        <span>Call For Papers</span>
                        <i className="fa-solid fa-up-right-from-square"></i>
                    </Link>
                </div>
                <div className="About_content_topics">
                    <>
                        <h2>The topics of the conference include, but are not limited to:</h2>
                        {About_content_topic.map((itemEvent, innerIndex) => (
                            <p key={innerIndex}>- {itemEvent.text}</p>
                        ))}
                    </>
                </div>
                <div className="About_image">
                    <img
                        src="https://reviewedu.net/wp-content/uploads/2021/10/159839653_3724976647552257_3313842260640766887_n.jpg"
                        alt=""
                    />
                    <span>Tra Vinh University</span>
                </div>
            </div>

            <div className="About_Important_Date">
                <h1>Important dates</h1>
                <div className="import_date">
                    {ImportantDate.map((date, index) => (
                        <div key={index} className="About_content_layout">
                            <div className="import_date_icon">
                                <i className="fa-solid fa-calendar-days"></i>
                            </div>
                            <div className="ACL-flex">
                                <h3>{date.titledate}</h3>
                                <h2 className={date.changedate !== "" && "modify_underline"}>{date.date}</h2>
                                {date.changedate !== "" && <h2>{date.changedate}</h2>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="Speakers_tital">
                <h1> Keynote Speakers</h1>
            </div>
            <div className="Speakers">
                {Speakers.map((speaker, index) => (
                    <div className="Speakers_item" key={index}>
                        {
                            speaker.scholar !== "" ?
                                <Link className="Speakers_item_img" to={speaker.scholar} target="_blank">
                                    <img src={speaker.imgsrc} alt="" />
                                </Link>
                                : <Link className="Speakers_item_img">
                                    <img src={speaker.imgsrc} alt="" />
                                </Link>
                        }
                        <h3>{speaker.name}</h3>
                        <p>{speaker.topic}</p>
                    </div>
                ))}
            </div>

            <div className="Submission_Guideline_tital">
                <h1> Submission Guidelines</h1>
            </div>

            <div className="Submission_Guideline">
                {Submission_Guideline.map((item, index) => (
                    <div key={index}>
                        <div className="Submission_Guideline_header">
                            {item.header.map((itemEvent, innerIndex) => (
                                <p
                                    key={innerIndex}
                                    dangerouslySetInnerHTML={{
                                        __html: itemEvent,
                                    }}
                                />
                            ))}
                        </div>
                        <div className="Submission_Guideline_body">
                            <ul>
                                {item.body.map((itemEvent, innerIndex) => (
                                    <li key={innerIndex} dangerouslySetInnerHTML={{ __html: itemEvent }} />
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default About;
