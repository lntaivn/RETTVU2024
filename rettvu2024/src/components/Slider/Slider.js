
import "./Slider.css"
import Fly from "../imgs/Fly.webm"
import { Carousel } from "antd";
import { useEffect, useState } from "react";

const Slider = () => {

    // Xác định thời điểm kết thúc (điều chỉnh ngày, giờ, phút, giây theo ngày cụ thể)
    const endDate = new Date("2024-06-21T23:59:59");

    // State để lưu trữ thời gian đếm ngược
    const [countdown, setCountdown] = useState(getTimeRemaining());

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown(getTimeRemaining());
        }, 1000);

        // Clear interval để tránh memory leak
        return () => clearInterval(interval);
    }, []);

    // Hàm để tính toán thời gian còn lại
    function getTimeRemaining() {
        const currentTime = new Date();
        const difference = endDate - currentTime;

        if (difference <= 0) {
            // Nếu thời gian kết thúc đã qua, trả về thời gian 0
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        // Tính toán số ngày, giờ, phút và giây còn lại
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    }

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
                <ul className="countdown">
                    <li className="countdown-item"><span className="countdown-number days">{countdown.days}</span><span className="countdown-text">days</span></li>
                    <li className="countdown-item"><span className="countdown-number hours">{countdown.hours}</span><span className="countdown-text">hours</span></li>
                    <li className="countdown-item"><span className="countdown-number minutes">{countdown.minutes}</span><span className="countdown-text">minutes</span></li>
                    <li className="countdown-item"><span className="countdown-number seconds">{countdown.seconds}</span><span className="countdown-text">seconds</span></li>
                </ul>
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