
import "./Slider.css"
import Fly from "../imgs/Fly.webm"
import { Carousel } from "antd";
import { useEffect, useState } from "react";
import { getImportantDate } from "../../service/DataService";

const Slider = () => {

    // Xác định thời điểm kết thúc (điều chỉnh ngày, giờ, phút, giây theo ngày cụ thể)
    // const endDate = new Date("2024-06-21T23:59:59");

    // State để lưu trữ thời gian đếm ngược
    const [endDate, setEndDate] = useState();
    const [ImportantDate, setImportantDate] = useState();
    const [countdown, setCountdown] = useState();

    const formatDate = (dateString) => {
        const dateParts = dateString.split('.'); // Tách ngày, tháng, năm từ chuỗi đầu vào
        const year = dateParts[2];
        const monthIndex = parseInt(dateParts[1], 10) - 1; // Chuyển tháng thành chỉ mục của mảng (0-11)
        const days = dateParts[0].split(','); // Tách ngày thành mảng các ngày
        const monthName = new Date(year, monthIndex).toLocaleString('en-us', { month: 'long' }); // Lấy tên của tháng

        let formattedDays = '';
        if (days.length === 1) {
            formattedDays = `${monthName} ${days[0]}, ${year}`; // Nếu chỉ có một ngày, sử dụng định dạng chuẩn
        } else {
            formattedDays = `${monthName} `;
            formattedDays += days.map((day) => `${day}`).join(', '); // Nếu có nhiều hơn một ngày, thêm tên tháng cho mỗi ngày
            formattedDays += `, ${year}`; // Thêm năm vào cuối
        }
        return formattedDays;
    };

    function convertToISOFormat(dateString) {
        const dateParts = dateString.split('.');
        const day = dateParts[0].split(',')[0]; // Lấy ngày đầu tiên
        const month = dateParts[1];
        const year = dateParts[2];

        // Tạo một đối tượng Date từ ngày và tháng đã tách
        const dateObject = new Date(`${year}-${month}-${day}`);

        // Thiết lập giờ, phút và giây cho đối tượng Date
        dateObject.setHours(23);
        dateObject.setMinutes(59);
        dateObject.setSeconds(59);

        // Format ngày thành chuỗi theo định dạng ISO 8601
        const isoString = dateObject.toISOString();

        return isoString;
    }

    const handleGetImportantDate = async () => {
        try {
            const response = await getImportantDate();
            setImportantDate(response.data);
            setEndDate(new Date(convertToISOFormat(response.data[2].date)));
        } catch (error) {
        }
    };

    useEffect(() => {
        handleGetImportantDate();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown(getTimeRemaining(endDate)); 
        }, 1000);

        // Clear interval để tránh memory leak
        return () => clearInterval(interval);
    }, [endDate]);

    // Hàm để tính toán thời gian còn lại
    function getTimeRemaining(endTime) { // Thêm tham số endTime vào hàm getTimeRemaining

        if (endDate) {
            const currentTime = new Date();
            const difference = endTime - currentTime;

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
        } else return;
    }

    return (
        <div className="List_Slide">
            <div className="List_Slide_logo">
                <p>The 2024 International Conference on Research in Engineering and Technology</p>
            </div>
            <Carousel autoplay>
                <div className="Slide_video_fr">
                    <video autoPlay muted className="List_Slide_img" loop>
                        <source src={Fly} type="video/webm" />
                    </video>
                </div>
            </Carousel>

            <div className="List_Slide_stital">
                {
                    countdown &&
                    <ul className="countdown">
                        <li className="countdown-item"><span className="countdown-number days">{countdown?.days}</span><span className="countdown-text">days</span></li>
                        <li className="countdown-item"><span className="countdown-number hours">{countdown?.hours}</span><span className="countdown-text">hours</span></li>
                        <li className="countdown-item"><span className="countdown-number minutes">{countdown?.minutes}</span><span className="countdown-text">minutes</span></li>
                        <li className="countdown-item"><span className="countdown-number seconds">{countdown?.seconds}</span><span className="countdown-text">seconds</span></li>
                    </ul>
                }
                {
                    ImportantDate &&
                    <ul>

                        <li className="modify_color_red">{formatDate(ImportantDate[0]?.date)}: {ImportantDate[0]?.titledate}</li>

                        <li>{formatDate(ImportantDate[1]?.date)}: {ImportantDate[1]?.titledate}</li>

                        <li className="modify_color_yellow">{formatDate(ImportantDate[2]?.date)}: {ImportantDate[2]?.titledate}</li>

                    </ul>
                }
            </div>
            <div className="List_Slide_overplay">

            </div>
        </div>
    )
}

export default Slider;