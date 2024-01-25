
import "./Slider.css"
import logo from "../imgs/logoTVU.png"
import Fly from "../imgs/Fly.mp4"
import { Link, useLocation } from "react-router-dom";
import { Carousel, Avatar } from "antd";

const Slider = () => {

    return (
        <div className="List_Slide">
            <div className="List_Slide_logo">
                <p>The International Conference on Research in
                    <br/>
                    Engineering and Technology 2024</p>
            </div>
            <Carousel autoplay>
                <div className="Slide_video_fr">
                    <video autoPlay muted className="List_Slide_img" loop src={Fly}></video>
                </div>
                {/* <div>
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
                </div> */}
            </Carousel>

            <div className="List_Slide_stital">
                <ul>

                    <li className="modify_color_red">May 12, 2024: Submission Deadline</li>

                    <li>May 26, 2024: Acceptance Notification</li>

                    <li className="modify_color_yellow">July 21, 22, 2024: Conference</li>


                </ul>
            </div>
            <div className="List_Slide_overplay">

            </div>
        </div>
    )
}

export default Slider;