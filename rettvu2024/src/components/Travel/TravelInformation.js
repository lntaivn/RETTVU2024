import { Link } from "react-router-dom";
import "./TravelInformation.css";
import { useContext, useEffect, useState } from "react";
import { DataStore } from "../Database";
import { getTravelInfo } from "../../service/DataService";


const TravelInformation = () => {

    const [TravelInfo, setTravelInfo] = useState([]);

    const handleGetTravelInfo = async () => {
        try {
            const response = await getTravelInfo();
            setTravelInfo(response.data);
        } catch (error) {
        }
    };

    useEffect(() => {
        handleGetTravelInfo();
    }, []);

    return (
        <div className="TravelInformation">
            <div className="TravelInformation_left">
                {
                    TravelInfo?.map((travel, index) => {
                        return (
                            <div className="TravelInformation_item" key={index}>
                                <h2>{travel.title}</h2>
                                <p>{travel.description}</p>

                                <div className="TravelInformation_item_img">
                                    <img src={travel.image} alt="" />
                                </div>
                                <span>{travel.imageName}</span>
                            </div >
                        )
                    })
                }
            </div>

            <div className="TravelInformation_right">
                <div className="Committee_item">
                    <h2>Previous Conferences</h2>
                    <p>
                        <Link to="https://sites.google.com/tvu.edu.vn/ret/program">RET 2023</Link>
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </p>
                    <p>
                        <Link to="https://sites.google.com/tvu.edu.vn/ret/history/ret-2022">RET 2022</Link>
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </p>
                    <p>
                        <Link to="https://sites.google.com/tvu.edu.vn/ret/history/ret-2021">RET 2021</Link>
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </p>
                    <p>
                        <Link to="https://sites.google.com/tvu.edu.vn/ret/history/ret-2020">RET 2020</Link>
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </p>
                    <p>
                        <Link to="https://sites.google.com/tvu.edu.vn/ret/history/ret-2019">RET 2019</Link>
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </p>
                    <p>
                        <Link to="https://sites.google.com/tvu.edu.vn/ret/history/ret-2018">RET 2018</Link>
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TravelInformation;
