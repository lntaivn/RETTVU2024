import { Link } from "react-router-dom";
import "./Committee.css";
import { Carousel } from "antd";
import { useContext, useEffect } from "react";
import { DataStore } from "../Database";

const Committee = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const database = useContext(DataStore);

    console.log(database?.Committees);

    const Committees = database?.Committees;

    return (
        <div className="Committee">
            <Carousel autoplay>
                <div className="Slide-img">
                    <img
                        src="https://image.bnews.vn/MediaUpload/Org/2020/06/15/trung-tam-hoc-lieu-tvu.jpg"
                        alt=""
                    />
                </div>
            </Carousel>
            <div className="Committee-content">
                <div className="Committee_left">
                    {Committees.map((cm, index) => {
                        return (
                            <div className="Committee_item" key={index}>
                                <h2>{cm.title}</h2>
                                <div>
                                    {cm.content.map((ct, index) => {
                                        return <p>{`- ${ct}`}</p>;
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="Committee_right">
                    <div className="Committee_item">
                        <h2>Latest News</h2>
                        <p>February 15th, 2024: </p>
                        <p>
                            The extension submission deadline (FIRM DEADLINE)
                            for CITA 2024.{" "}
                        </p>
                    </div>
                    <div className="Committee_item">
                        <h2>Previous Conferences</h2>
                        <p>
                            <Link to="/ret-2023">RET 2023</Link>
                        </p>
                        <p>
                            <Link to="/ret-2022">RET 2022</Link>
                        </p>
                        <p>
                            <Link to="/ret-2021">RET 2021</Link>
                        </p>
                        <p>
                            <Link to="/ret-2020">RET 2020</Link>
                        </p>
                        <p>
                            <Link to="/ret-2019">RET 2019</Link>
                        </p>
                        <p>
                            <Link to="/ret-2018">RET 2018</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Committee;
