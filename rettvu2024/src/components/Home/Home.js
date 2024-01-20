
import { Carousel, Collapse } from 'antd';
import "./Home.css"
import { Link } from 'react-router-dom';
const { Panel } = Collapse;
const SESSION_1 = [
    {
        "time": "8:00-8:30:",
        "event": ["Welcome Delegates"]
    },
    {
        "time": "8:30-9:00:",
        "event": [
            "Conference opening",
            "Performances welcome",
            "Opening speech: Assoc. Prof. Dr. Diep Thanh Tung, Vice Rector, Tra Vinh University, Vietnam",
            "Seminar preliminary Dr. Pham Quoc Phong, Vice Dean - School of Engineering and Technology, Tra Vinh University, Vietnam"
        ]
    },
    {
        "time": "9:00-9:50:",
        "event": [
            "<b>Keynote Speech 1: Wind speed estimation and prediction for control, operation, and planning of wind power plants</b>",
            "Speaker: Assoc. Prof. Dr. Do Duc Ton - Nazarbayev University, Kazakhstan",
            "Keynote Session Chairs:",
            "Dr. Pham Van Hoan, Tra Vinh University, Vietnam",
            "Dr. Thach Le Khiem, Tra Vinh University, Vietnam"
        ]
    },
    {
        "time": "9:50-10:40:",
        "event": [
            "<b>Keynote Speech 2: AI in manufacturing</b>",
            "Speaker: Mr. Vo Duy Nhat, Mitsubishi Electric Vietnam Co., LTD",
            "Keynote Session Chairs:",
            "Assoc. Prof. Dr. Do Duc Ton, Nazarbayev University, Kazakhstan",
            "Dr. Thach Le Khiem, Tra Vinh University, Vietnam"
        ]
    },
    {
        "time": "10:40-11:30:",
        "event": [
            "<b>Keynote Speech 3: Refining Programming Education: Integrating Essential Software Engineering Practices</b>",
            "Speaker: Dr. Nguyen Bao An - Tra Vinh University",
            "Keynote Session Chairs:",
            "Assoc. Prof. Dr. Nguyen Thai Son, Director - Resource Development Institute, Tra Vinh University, Vietnam",
            "Dr. Vo Phuoc Hung, Dean - School of Engineering and Technology, Tra Vinh University, Vietnam"
        ]
    },
    {
        "time": "11:30-11:45:",
        "event": ["Group Photo"]
    }
]

const SESSION_2 = [
    {
        "time": "12:30-13:00:",
        "event": [
            "Welcome Delegates"
        ]
    },
    {
        "time": "13:00-14:00:",
        "event": [

        ]
    }
]

const ITEMS_LIST_ROOM = [
    {
        "label_room_sessions": "ROOM 1 (SESSION 1):",
        "label_room_details": "ROOM B21.201",
        "Session_chairs": "Dr. Mai Phuoc Trai, Dr. Truong Van Men",
        "children": [
            {
                "time": "13:40-14:00:",
                "paper": 11,
                "description": "Research of State of Charge (SOC) and State of Energy (SOE) of Lithium Ion Battery in Electric Vehicle",
                "author": "Khac Huan Nguyen, Anh Tuan Nguyen, Trong Tan Bui",
                "chair": "Dr. Mai Phuoc Trai, Dr. Truong Van Men"
            },
            {
                "time": "13:40-14:00:",
                "paper": 11,
                "description": "Research of State of Charge (SOC) and State of Energy (SOE) of Lithium Ion Battery in Electric Vehicle",
                "author": "Khac Huan Nguyen, Anh Tuan Nguyen, Trong Tan Bui",
                "chair": "Dr. Mai Phuoc Trai, Dr. Truong Van Men"
            },
            {
                "time": "13:40-14:00:",
                "paper": 11,
                "description": "Research of State of Charge (SOC) and State of Energy (SOE) of Lithium Ion Battery in Electric Vehicle",
                "author": "Khac Huan Nguyen, Anh Tuan Nguyen, Trong Tan Bui",
                "chair": "Dr. Mai Phuoc Trai, Dr. Truong Van Men"
            }
        ]
    },
    {
        "label_room_sessions": "ROOM 3 (SESSION 3):",
        "label_room_details": "ROOM B21.203",
        "Session_chairs": "Dr. Vo Phuoc Hung, Dr. Nguyen Duc Binh, Dr. Nguyen Bao An",
        "children": [
            {
                "time": "13:40-14:00:",
                "paper": 11,
                "description": "Research of State of Charge (SOC) and State of Energy (SOE) of Lithium Ion Battery in Electric Vehicle",
                "author": "Khac Huan Nguyen, Anh Tuan Nguyen, Trong Tan Bui",
                "chair": "Dr. Mai Phuoc Trai, Dr. Truong Van Men"
            },
            {
                "time": "13:40-14:00:",
                "paper": 11,
                "description": "Research of State of Charge (SOC) and State of Energy (SOE) of Lithium Ion Battery in Electric Vehicle",
                "author": "Khac Huan Nguyen, Anh Tuan Nguyen, Trong Tan Bui",
                "chair": "Dr. Mai Phuoc Trai, Dr. Truong Van Men"
            },
            {
                "time": "13:40-14:00:",
                "paper": 11,
                "description": "Research of State of Charge (SOC) and State of Energy (SOE) of Lithium Ion Battery in Electric Vehicle",
                "author": "Khac Huan Nguyen, Anh Tuan Nguyen, Trong Tan Bui",
                "chair": "Dr. Mai Phuoc Trai, Dr. Truong Van Men"
            }
        ]
    },
    {
        "label_room_sessions": "ROOM 4 (SESSION 4):",
        "label_room_details": "ROOM B21.204",
        "Session_chairs": "Dr. Huynh Phuoc Hai, Dr. Nguyen Nhut Lam, Dr. Tran Song Toan",
        "children": [
            {
                "time": "13:40-14:00:",
                "paper": 11,
                "description": "Research of State of Charge (SOC) and State of Energy (SOE) of Lithium Ion Battery in Electric Vehicle",
                "author": "Khac Huan Nguyen, Anh Tuan Nguyen, Trong Tan Bui",
                "chair": "Dr. Mai Phuoc Trai, Dr. Truong Van Men"
            },
            {
                "time": "13:40-14:00:",
                "paper": 11,
                "description": "Research of State of Charge (SOC) and State of Energy (SOE) of Lithium Ion Battery in Electric Vehicle",
                "author": "Khac Huan Nguyen, Anh Tuan Nguyen, Trong Tan Bui",
                "chair": "Dr. Mai Phuoc Trai, Dr. Truong Van Men"
            },
            {
                "time": "13:40-14:00:",
                "paper": 11,
                "description": "Research of State of Charge (SOC) and State of Energy (SOE) of Lithium Ion Battery in Electric Vehicle",
                "author": "Khac Huan Nguyen, Anh Tuan Nguyen, Trong Tan Bui",
                "chair": "Dr. Mai Phuoc Trai, Dr. Truong Van Men"
            }
        ]
    },
    {
        "label_room_sessions": "ROOM 5 (SESSION 5):",
        "label_room_details": "ROOM B21.205",
        "Session_chairs": "Assoc. Prof. Dr.  Ton Duc Do, Dr. Thach Le Khiem, Dr. Cao Phuong Thao",
        "children": [
            {
                "time": "13:40-14:00:",
                "paper": 11,
                "description": "Research of State of Charge (SOC) and State of Energy (SOE) of Lithium Ion Battery in Electric Vehicle",
                "author": "Khac Huan Nguyen, Anh Tuan Nguyen, Trong Tan Bui",
                "chair": "Dr. Mai Phuoc Trai, Dr. Truong Van Men"
            },
            {
                "time": "13:40-14:00:",
                "paper": 11,
                "description": "Research of State of Charge (SOC) and State of Energy (SOE) of Lithium Ion Battery in Electric Vehicle",
                "author": "Khac Huan Nguyen, Anh Tuan Nguyen, Trong Tan Bui",
                "chair": "Dr. Mai Phuoc Trai, Dr. Truong Van Men"
            },
            {
                "time": "13:40-14:00:",
                "paper": 11,
                "description": "Research of State of Charge (SOC) and State of Energy (SOE) of Lithium Ion Battery in Electric Vehicle",
                "author": "Khac Huan Nguyen, Anh Tuan Nguyen, Trong Tan Bui",
                "chair": "Dr. Mai Phuoc Trai, Dr. Truong Van Men"
            }
        ]
    },
    {
        "label_room_sessions": "ROOM 6 (SESSION 6):",
        "label_room_details": "ROOM B21.206",
        "Session_chairs": "Dr. Huynh Van Hiep, Dr. Nguyen Xuan Son",
        "children": [
            {
                "time": "13:40-14:00:",
                "paper": 11,
                "description": "Research of State of Charge (SOC) and State of Energy (SOE) of Lithium Ion Battery in Electric Vehicle",
                "author": "Khac Huan Nguyen, Anh Tuan Nguyen, Trong Tan Bui",
                "chair": "Dr. Mai Phuoc Trai, Dr. Truong Van Men"
            },
            {
                "time": "13:40-14:00:",
                "paper": 11,
                "description": "Research of State of Charge (SOC) and State of Energy (SOE) of Lithium Ion Battery in Electric Vehicle",
                "author": "Khac Huan Nguyen, Anh Tuan Nguyen, Trong Tan Bui",
                "chair": "Dr. Mai Phuoc Trai, Dr. Truong Van Men"
            },
            {
                "time": "13:40-14:00:",
                "paper": 11,
                "description": "Research of State of Charge (SOC) and State of Energy (SOE) of Lithium Ion Battery in Electric Vehicle",
                "author": "Khac Huan Nguyen, Anh Tuan Nguyen, Trong Tan Bui",
                "chair": "Dr. Mai Phuoc Trai, Dr. Truong Van Men"
            }
        ]
    }
]

const items = ITEMS_LIST_ROOM.map((item, index) => {
    return ({
        key: index,
        label: (
            <div>
                <span>
                    <span style={{ color: 'red' }}>{item.label_room_sessions}</span>
                    <span className='modify_Upto'>{item.label_room_details}</span>
                    <br />
                    <span><b>Session chairs:</b>{item.Session_chairs}</span>
                </span>
            </div>
        ),
        children: (
            <div>
                {
                    item.children.map((itm, index) => {
                        return (
                            <ul>
                                <li>
                                    <strong>{itm.time}</strong>
                                    <br />
                                    <strong>[Paper {itm.paper}]</strong>{itm.description}
                                    <br />
                                    <em>Authors:</em>{itm.author}
                                    <br />
                                    <em>Chairs:</em>{itm.chair}
                                </li>
                            </ul>   
                        )
                    })
                }
            </div>
        )
    })
})

const Home = () => {
    return (
        <div className="Home">
            <Carousel autoplay>
                <div className='Slide-img'>
                    <img src="https://www.tvu.edu.vn/wp-content/uploads/2022/01/TVUXuan2022_1.jpg" alt="" />
                </div>
                <div className='Slide-img'>
                    <img src="https://www.tvu.edu.vn/wp-content/uploads/2021/12/anh1.jpg" alt="" />
                </div>
                <div className='Slide-img'>
                    <img src="https://image.bnews.vn/MediaUpload/Org/2020/06/15/trung-tam-hoc-lieu-tvu.jpg" alt="" />
                </div>
            </Carousel>
            <div className="program">
                <h1>CONFERENCE PROGRAM</h1>
                <h2>
                    I. Session 1, Saturday July 22nd, 2023
                </h2>
                <div className="program_title_detail"><ul><li> <h2>Room:</h2> <h1>E21.105</h1> <Link to="/map">View map</Link></li></ul></div>
                <div className="schedule">
                    <ul>
                        {SESSION_1.map(item => (
                            <li>
                                <span className="time">{item.time}</span>

                                {item.event.map(itemEvent => (
                                    <>
                                        <span className='event' dangerouslySetInnerHTML={{ __html: itemEvent }} />
                                    </>
                                ))}

                            </li>
                        ))}

                    </ul>
                </div>
                <h2>
                    II. Session 2, Saturday July 22nd, 2023
                </h2>

                <div className="schedule">
                    <ul>
                        {SESSION_2.map((item, index) => (
                            <li key={index}>
                                <span className="time">{item.time}</span>

                                {item.event.map((itemEvent, index) => (
                                    <>
                                        <span key={index} className='event' dangerouslySetInnerHTML={{ __html: itemEvent }} />
                                    </>
                                ))}

                            </li>
                        ))}
                    </ul>
                </div>
                <h1 className="modify_program_h1">Parallel sessions (13:00-14:00, <Link to="/map">View map</Link>)</h1>
                <div className="program_event_click_arrow">

                    <Collapse>
                        {items.map(item => (
                            <Panel key={item.key} header={item.label}>
                                {item.children}
                            </Panel>
                        ))}
                    </Collapse>
                </div>
            </div>


            <div className='Speakers'>
                <div className='Speakers_item'>
                    <div className='Speakers_item_img'>
                        <img src="https://www.jaist.ac.jp/~ogata/ogata.png" alt="" />
                    </div>
                    <h3>Kazuhiro Ogata</h3>
                    <span>Professor</span>
                    <p>Keynote 1: Security Protocol Model Checking based on Algebraic Specifications</p>
                </div>
                <div className='Speakers_item'>
                    <div className='Speakers_item_img'>
                        <img src="https://isds.ctu.edu.vn/2023/images/upload/keynotes/masayuki_fukuzawa.png" alt="" />
                    </div>
                    <h3>Kazuhiro Ogata</h3>
                    <span>Professor</span>
                    <p>Keynote 1: Security Protocol Model Checking based on Algebraic Specifications</p>
                </div>
                <div className='Speakers_item'>
                    <div className='Speakers_item_img'>
                        <img src="https://isds.ctu.edu.vn/2023/images/upload/keynotes/masayuki_fukuzawa.png" alt="" />
                    </div>
                    <h3>Kazuhiro Ogata</h3>
                    <span>Professor</span>
                    <p>Keynote 1: Security Protocol Model Checking based on Algebraic Specifications</p>
                </div>
                <div className='Speakers_item'>
                    <div className='Speakers_item_img'>
                        <img src="https://isds.ctu.edu.vn/2023/images/upload/keynotes/masayuki_fukuzawa.png" alt="" />
                    </div>
                    <h3>Kazuhiro Ogata</h3>
                    <span>Professor</span>
                    <p>Keynote 1: Security Protocol Model Checking based on Algebraic Specifications</p>
                </div>
                <div className='Speakers_item'>
                    <div className='Speakers_item_img'>
                        <img src="https://isds.ctu.edu.vn/2023/images/upload/keynotes/masayuki_fukuzawa.png" alt="" />
                    </div>
                    <h3>Kazuhiro Ogata</h3>
                    <span>Professor</span>
                    <p>Keynote 1: Security Protocol Model Checking based on Algebraic Specifications</p>
                </div>
            </div>
        </div>
    )
}
export default Home;