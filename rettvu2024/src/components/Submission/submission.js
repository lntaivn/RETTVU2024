
import "./submission.css"
import logo from "../imgs/logoTVU.png"
import { useContext, useEffect, useState } from "react";
import { DataStore } from "../Database";
import { Link, useLocation } from "react-router-dom";
import { Avatar } from "antd";
import { getSubmissionGuideline } from "../../service/DataService";

const Submission = () => {

    const database = useContext(DataStore);

    const [Submission_Guideline, setSubmission_Guideline] = useState([]);

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
        handleGetSubmissionGuideline();
    }, []);

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
                                    <li key={innerIndex} dangerouslySetInnerHTML={{ __html: itemEvent }} />
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