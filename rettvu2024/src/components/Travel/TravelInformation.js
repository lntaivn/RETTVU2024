import { Link } from "react-router-dom";
import "./TravelInformation.css";
import { useContext } from "react";
import { DataStore } from "../Database";


const TravelInformation = () => {

    const database = useContext(DataStore);
    const TralvelInfor = database?.TralvelInfor;

    return (
        <div className="TravelInformation">
            <div className="TravelInformation_left">
                {
                    TralvelInfor?.map((tralvel, index) => {
                        return (
                            <div className="TravelInformation_item" key={index}>
                                <h2>{tralvel.title}</h2>
                                {
                                    tralvel.description.map((description, index) => {
                                        return (
                                            <p key={index}>{description}</p>
                                        )
                                    })
                                }

                                <div className="TravelInformation_item_img">
                                    <img src={tralvel.image} alt="" />
                                </div>
                                <span>{tralvel.imageName}</span>
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
