import { useContext, useEffect, useState } from "react";
import { Card, Carousel, Collapse, Timeline } from 'antd';
import "./Program.css"
import { Link } from 'react-router-dom';
import { DataStore } from "../Database";
import { getConferenceProgram, getParallelSession1, getParallelSession2 } from "../../service/DataService";
const { Panel } = Collapse;

const Program = () => {

    const [conferenceProgram, setConferenceProgram] = useState([]);
    const [parallelSession1, setParallelSession1] = useState([]);
    const [parallelSession2, setParallelSession2] = useState([]);

    const handleGetParallelSessions = async () => {
        try {
            const [response1, response2, response3] = await Promise.all([getConferenceProgram(), getParallelSession1(), getParallelSession2()]);

            setConferenceProgram(response1.data);
            setParallelSession1(response2.data);
            setParallelSession2(response3.data);

            console.log(response1.data);
            console.log(response2.data);
            console.log(response3.data);

        } catch (error) {
            console.error("Error while fetching Registration:", error);
        }
    };

    useEffect(() => {
        handleGetParallelSessions();
    }, [])

    return (
        <div className="Program">
            <div className="Submission_Guideline_tital">
                <h1>Conference Program</h1>
            </div>
            <div className="Session_Container">
                <div>
                    <div className="Session_item">
                        <h2>I. {conferenceProgram[0]?.session}</h2>
                        <h3>{conferenceProgram[0]?.date}</h3>
                    </div>
                    <div className="Session_timeline">
                        <Timeline pending>
                            {conferenceProgram[0]?.content.map((item, index) => (
                                <Timeline.Item key={index}>
                                    <div className="Session_timeline_item">
                                        <div className="Session_timeline_node">
                                            <strong>{item.time}</strong>
                                        </div>
                                        <div className="Session_timeline_description">
                                            <p>
                                                {item.description.split('\n').map((line, idx) => (
                                                    <span key={idx}>
                                                        {line}
                                                        <br />
                                                    </span>
                                                ))}
                                            </p>
                                        </div>
                                    </div>
                                </Timeline.Item>
                            ))}
                        </Timeline>
                    </div>
                </div>
                <div>
                    <div className="Session_item">
                        <h2>II. {conferenceProgram[1]?.session}</h2>
                        <h3>{conferenceProgram[1]?.date}</h3>
                    </div>
                    <div className="Session_timeline">
                        <Timeline pending>
                            {conferenceProgram[1]?.content.map((item, index) => (
                                <Timeline.Item key={index}>
                                    <div className="Session_timeline_item">
                                        <div className="Session_timeline_node">
                                            <strong>{item.time}</strong>
                                        </div>
                                        <div className="Session_timeline_description">
                                            <p>
                                                {item.description.split('\n').map((line, idx) => (
                                                    <span key={idx}>
                                                        {line}
                                                        <br />
                                                    </span>
                                                ))}
                                            </p>
                                        </div>
                                    </div>
                                </Timeline.Item>
                            ))}
                        </Timeline>
                    </div>
                </div>
            </div>
            {/* <div>
                <h2>Parallel sessions (13:00-14:00)</h2>
                <div>

                </div>
            </div> */}
        </div>
    )
}
export default Program;