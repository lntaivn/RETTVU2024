
import "./submission.css"
import logo from "../imgs/logoTVU.png"
import { useContext } from "react";
import { DataStore } from "../Database";
import { Link, useLocation } from "react-router-dom";
import { Avatar } from "antd";

const Submission = () => {

    const database = useContext(DataStore);
    const Submission_Guideline = database?.Submission_Guideline;

    return (
        <div className="Submission">
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
        </div>
    )
}

export default Submission;