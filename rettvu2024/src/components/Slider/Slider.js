
import "./Slider.css"
import Fly from "../imgs/Fly.webm"
import { Carousel } from "antd";

const Slider = () => {

    return (
        <div className="List_Slide">
            <div className="List_Slide_logo">
                <p>The International Conference on Research in Engineering and Technology 2024</p>
            </div>
            <Carousel autoplay>
                <div className="Slide_video_fr">
                    <video autoPlay muted className="List_Slide_img" loop>
                        <source src={Fly} type="video/webm" />
                    </video>
                </div>
            </Carousel>

            <div className="List_Slide_stital">
                <ul>

                    <li className="modify_color_red">May 12, 2024: Submission Deadline</li>

                    <li>May 25, 2024: Acceptance Notification</li>

                    <li className="modify_color_yellow">June 21, 22, 2024: Conference</li>


                </ul>
            </div>
            <div className="List_Slide_overplay">

            </div>
        </div>
    )
}

export default Slider;