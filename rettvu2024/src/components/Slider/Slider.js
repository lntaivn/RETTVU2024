
import "./Slider.css"
import logo from "../imgs/logoTVU.png"
import { Link, useLocation } from "react-router-dom";
import { Carousel, Avatar } from "antd";

const Slider = () => {

    return (
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
    )
}

export default Slider;