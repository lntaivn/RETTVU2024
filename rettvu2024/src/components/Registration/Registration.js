
import { useContext, useEffect, useState } from "react";
import { getRegistration } from "../../service/DataService";
import { Link } from 'react-router-dom';
import "./Registration.css";


const Registration = () => {

    const [Submission_Guideline, setSubmission_Guideline] = useState([]);

    const handleGetRegistration = async () => {
        try {
            const response = await getRegistration();
            setSubmission_Guideline(response.data);
            console.log(response.data);
        } catch (error) {
            console.error("Error while fetching Registration:", error);
        }
    };

    useEffect(() => {
        handleGetRegistration();
    }, []);

    return (
        <div className="Submission">
            <div className="Submission_Guideline_tital">
                <h1>Registration</h1>
            </div>
            <div className="Submission_Guideline">
                {Submission_Guideline.map((item, index) => (
                    <div key={index} className="Registration">
                        <div className="Submission_Guideline_header" dangerouslySetInnerHTML={{
                            __html: item.content,
                        }}
                        />

                        <div>
                            <b><span >Registration link:</span></b>
                        </div>
                        <div>
                            <div className="Submission_Guideline_body">
                                <ul>
                                    <li>
                                        <div>
                                        <span  className="mr_2 ml_2">{item.title_authors_presenters}</span>

                                            <a target='blank' href={item.link_authors_presenters}> Link <i className="fa-solid fa-up-right-from-square"></i> </a>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <span  className="mr_2 ml_2">{item.title_guests_participants}</span>
                                            <a target='blank' href={item.link_participants}> Link <i className="fa-solid fa-up-right-from-square"></i></a>
                                        </div>

                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <b><span >Due dates:</span></b>
                        </div>
                        <div>
                            <div className="Submission_Guideline_body">
                                <ul>
                                    <li>
                                        <div>
                                        <span  className="mr_2 ml_2">{item.title_authors_presenters}</span>
                                        <b><span>{item.due_dates_authors_presenters}</span></b>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <span  className="mr_2 ml_2">{item.title_guests_participants}</span>
                                            <b><span>{item.due_dates_guests_participants}</span></b>
                                        </div>

                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <div>
                            <span className="mr_2"> {item.title_authors_presenters}</span>
                            <span><b>{item.registration_due_date_for_authors_presenters}</b> </span>

                        </div>

                        <div>
                            <span className="mr_2"> {item.title_guests_participants}</span>
                            <span ><b>{item.registration_due_date_for_distinguished_guests_participants}</b></span>
                        </div> */}
                        <div dangerouslySetInnerHTML={{
                            __html: item.please_help_us,
                        }}
                        />

                        <div>
                            {item.if_you_need}
                        </div>

                        <div>
                            {item.we_look_forward}
                        </div>

                        <div dangerouslySetInnerHTML={{
                            __html: item.yours_sincerely,
                        }} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Registration;