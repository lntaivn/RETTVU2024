import { Link } from "react-router-dom";
import { useContext } from "react";
import "./About.css";
import { Carousel } from "antd";
import { DataStore } from "../Database";

const About = () => {
    const database = useContext(DataStore);
    const About_content = database?.About_content;
    const About_content_topic = database?.About_content_topic;
    const Submission_Guideline = database?.Submission_Guideline;
    const Speakers = database?.Speakers;
    const About_Important_Date = database?.About_Important_Date;

    return (
        <>
            <div className="List_Slide">
                <Carousel autoplay>
                    <div>
                        <img
                            src="https://www.tvu.edu.vn/wp-content/uploads/2022/01/TVUXuan2022_1.jpg"
                            alt=""
                            className="List_Slide_img"
                        />
                    </div>
                    <div>
                        <img
                            src="https://www.tvu.edu.vn/wp-content/uploads/2021/12/anh1.jpg"
                            alt=""
                            className="List_Slide_img"
                        />
                    </div>
                    <div>
                        <img
                            src="https://image.bnews.vn/MediaUpload/Org/2020/06/15/trung-tam-hoc-lieu-tvu.jpg"
                            alt=""
                            className="List_Slide_img"
                        />
                    </div>
                </Carousel>
               
                <div className="List_Slide_stital">
                    <ul>
                        <li className="modify_color_red">February 15th, 2024: Extension submission deadline (FIRM DEADLINE)</li>

                        <li>March 31th, 2024: Notification of acceptance</li>

                        <li>April 20th, 2024: Camera ready and Registration</li>

                        <li>July 19th-20th, 2024: Conference</li>

                    </ul>
                </div>
                <div className="List_Slide_overplay">
                    
                </div>
            </div>
            
            <div className="About">
                <div className="About_content_text">
                    <h2>About Tra Vinh University</h2>
                    <p>{About_content.map((item) => item.Text)}</p>
                </div>
                <div className="About_content_topics">
                    {About_content_topic.map((item) => (
                        <>
                            <h2>{item.header}</h2>
                            {item.body.map((itemEvent, innerIndex) => (
                                <p key={innerIndex}>{itemEvent}</p>
                            ))}
                        </>
                    ))}
                </div>
                <div className="About_image">
                    <img
                        src="https://reviewedu.net/wp-content/uploads/2021/10/159839653_3724976647552257_3313842260640766887_n.jpg"
                        alt=""
                    />
                </div>
            </div>

            <div className="About_Important_Date">
                <h1>Important dates</h1>
                <div className="import_date">
                    {About_Important_Date.map((date, index) => (
                        <div key={index} className="About_content_layout">
                            <div className="import_date_icon">
                                <i className="fa-solid fa-calendar-days"></i>
                            </div>
                            <div className="ACL-flex">
                            <h3>{date.TitleDate}</h3>
                                <h2 className={date.ChangeDate!=="" && "modify_underline"}>{date.Date}</h2>
                                {date.ChangeDate!=="" && <h2>{date.ChangeDate}</h2>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="Speakers_tital">
                <h1> Keynote Speakers</h1>
            </div>
            <div className="Speakers">
                {Speakers.map((speaker) => (
                    <div className="Speakers_item">
                        <div className="Speakers_item_img">
                            <img src={speaker.imgSrc} alt="" />
                        </div>
                        <h3>{speaker.title}</h3>
                        <span>{speaker.title}</span>
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
                                    <li key={innerIndex}>{itemEvent}</li>
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
