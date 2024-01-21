import { Link } from "react-router-dom";
import "./Committee.css";
import { Carousel } from "antd";
import { useContext } from "react";
import { DataStore } from "../Database";

const Committee = () => {

    const database = useContext(DataStore);

    console.log(database?.Committees);

    const Committees = database?.Committees;
    //     {
    //         title: "Chairman Program Committee:",
    //         content: [
    //             "Assoc. Prof. Nguyen Minh Hoa - Rector of Tra Vinh University",
    //         ],
    //     },
    //     {
    //         title: "Vice Chairman Program Committee:",
    //         content: [
    //             "Dr. Vo Phuoc Hung - Dean of School of Engineering and Technology, Tra Vinh University",
    //             "Dr. Huynh Cong Khoi - Head of Science and Technology Office, Tra Vinh University",
    //         ],
    //     },
    //     {
    //         title: "Technical Program Chairs:",
    //         content: [
    //             "Dr. Pham Quoc Phong - Vice Dean of School of Engineering and Technology, Tra Vinh University",
    //             "Assoc. Prof. Nguyen Thai Son - Director of Resource Development Institute, Tra Vinh University",
    //         ],
    //     },
    //     {
    //         title: "Co-Program Chair:",
    //         content: [
    //             "Dr. Truong Van Men - Deputy Head of Mechanical Engineering Department;",
    //             "Dr. Nguyen Nhut Lam - Head of Information Technology;",
    //             "Dr. Cao Phuong Thao - Head of Electrical - Electronics Department;",
    //             "Dr. Huynh Van Hiep - Head of Civil Engineering Department;",
    //         ],
    //     },
    //     {
    //         title: "Technical Program Committee:",
    //         content: [
    //             "Prof. Tang-Chieh Liu - FCU, Taiwan;",
    //             "Prof. Cheng Ching - Hwa - FCU, Taiwan;",
    //             "Prof. Nguyen Tat Dac - Tra Vinh University;",
    //             "Prof. Tze-Yee-Ho -  FCU, Taiwan;",
    //             "Assoc. Prof. Đo Đuc Ton -  Đại học Nazarbayev, Kazakhstan;",
    //             "Prof. Hsi-Min Chen -  FCU, Taiwan;",
    //             "Assoc. Prof. Nguyen Hieu Minh - Tra Vinh University;",
    //             "Assoc. Prof. Tran Van Chinh - Tra Vinh University;",
    //             "Dr. Brian Dick - VIU, Canada;",
    //             "Dr. Bui Van Tung - Thai Nguyen University;",
    //             "Dr. Dang Xuan Trong - Hositco, Viet Nam;",
    //             "Dr. Hoang Trung Kien - Tra Vinh University;",
    //             "Dr. Lam Thanh Thep - Tra Vinh University;",
    //             "Dr. Le Nam Tuan - Tra Vinh University;",
    //             "Dr. Le Tuong Thanh - Tra Vinh University;",
    //             "Dr. Ngo Huu Huy - Thai Nguyen University;",
    //             "Dr. Nguyen Bao An - Tra Vinh University;",
    //             "Dr. Nguyen Duc Tue - Tra Vinh University;",
    //             "Dr. Nguyen Khac Huan - Tra Vinh University;",
    //             "Dr. Nguyen Thanh Tam - Tra Vinh University;",
    //             "Dr. Nguyen Tran Diem Hạnh - Tra Vinh University;",
    //             "Dr. Nguyen Tuan Nghia - Tra Vinh University;",
    //             "Dr. Nguyen Viet Phan - Tra Vinh University;",
    //             "Dr. Pham Van Hoan - Tra Vinh University;",
    //             "Dr. Tran Song Toan - Tra Vinh University;",
    //             "Dr. Tran Van Tan - Tra Vinh University;",
    //             "Dr. Truong Hoang Linh - Tra Vinh University;",
    //             "Dr. Truong Van Men - Tra Vinh University;",
    //             "Dr. Van Huu Hue - Tra Vinh University;",
    //             "Dr. Van Huu Thinh - Tra Vinh University;",
    //             "Dr. Vu Quang Hieu - Tra Vinh University;",
    //             "Dr. Vu Thang - Tra Vinh University;",
    //             "Dr. Nguyen Duc Binh - Thai Nguyen University;",
    //             "Dr. Duong Van Hieu - Tien Giang University;",
    //             "Dr. Nguyen Thanh Tuan - Kien Giang Colleges;",
    //             "Dr. Do Nguyen Duy Phuong - Can Tho University;",
    //             "Dr. Quach Ngoc Thinh - Can Tho University;",
    //             "Dr. Nguyen Hoang Vu - Can Tho University;",
    //             "Dr. Luong Vinh Quoc Danh - Can Tho University;",
    //             "Dr. Phan Tan Tai - Tra Vinh University;",
    //         ],
    //     },
    //     {
    //         title: "Secretary:",
    //         content: [
    //             "MEng. Dang Hoang Vu - Tra Vinh University;",
    //             "MEng. Ha Thi Thuy Vi - Tra Vinh University;",
    //             "MEng. Bui Thi Thu Thuy - Tra Vinh University;",
    //             "MEng. Huynh Thi My Dung - Tra Vinh University;",
    //         ],
    //     },
    // ];

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
                <div className="Committee-left">
                    {Committees.map((cm, index) => {
                        return (
                            <div className="Committee_item" key={index}>
                                <h2>{cm.title}</h2>
                                <div>
                                    {cm.content.map((ct, index) => {
                                        return <p>{`${index + 1}:  ${ct}`}</p>;
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
