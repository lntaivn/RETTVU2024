
import "./Slider.css"
import logo from "../imgs/logoTVU.png"
import flyVideo from "../imgs/Fly.mp4"
import { Link, useLocation } from "react-router-dom";
import { Carousel, Avatar } from "antd";

const Slider = () => {

    return (
        <div className="List_Slide">
            <Carousel autoplay>
                <div className="Slide_video_fr">
                    <video autoPlay muted className="List_Slide_img" loop src="https://firebasestorage.googleapis.com/v0/b/chat-app-5b28c.appspot.com/o/courses%2FFly.mp4?alt=media&token=edcd56d0-58f9-4a8f-a952-2b41a54f4a90"></video>
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

                    <li className="modify_color_red">May 12<sup>th</sup>, 2024: Submission Deadline</li>

                    <li>May 26<sup>th</sup>, 2024: Acceptance Notification</li>
                    
                    <li className="modify_color_yellow">July 21<sup>th</sup> - 22<sup>th</sup>, 2024: Conference</li>


                </ul>
            </div>
            <div className="List_Slide_overplay">

            </div>
        </div>
    )
}

export default Slider;