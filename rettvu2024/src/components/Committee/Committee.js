import { Link } from "react-router-dom";
import "./Committee.css";
import { Carousel } from "antd";
import { useContext } from "react";
import { DataStore } from "../Database";

const Committee = () => {

    const database = useContext(DataStore);

    console.log(database?.Committees);

    const Committees = database?.Committees;

    return (
        <div className="Committee">
            <div className="Committee-content">
                <div className="Committee_left">
                    {Committees.map((cm, index) => {
                        return (
                            <div className="Committee_item" key={index}>
                                <h2>{cm.title}</h2>
                                <div>
                                    <ul>
                                        {cm.content.map((ct, index) => {
                                            return <li>{`${ct}`}</li>;
                                        })}
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="Committee_right">
                    {/* <div className="Committee_item">
                        <h2>Latest News</h2>
                        <p>February 15th, 2024: </p>
                        <p>
                            The extension submission deadline (FIRM DEADLINE)
                            for CITA 2024.{" "}
                        </p>
                    </div> */}
                    <div className="Committee_item">
                        <h2>Previous Conferences</h2>
                        <p>
                            <Link to="https://sites.google.com/tvu.edu.vn/ret/program">RET 2023</Link>
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        </p>
                        <p>
                            <Link to="https://sites.google.com/tvu.edu.vn/ret/history/ret-2022">RET 2022</Link>
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        </p>
                        <p>
                            <Link to="https://sites.google.com/tvu.edu.vn/ret/history/ret-2021">RET 2021</Link>
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        </p>
                        <p>
                            <Link to="https://sites.google.com/tvu.edu.vn/ret/history/ret-2020">RET 2020</Link>
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        </p>
                        <p>
                            <Link to="https://sites.google.com/tvu.edu.vn/ret/history/ret-2019">RET 2019</Link>
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        </p>
                        <p>
                            <Link to="https://sites.google.com/tvu.edu.vn/ret/history/ret-2018">RET 2018</Link>
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Committee;
