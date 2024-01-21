
import { useContext } from "react";
import { Carousel, Collapse } from 'antd';
import "./Home.css"
import { Link } from 'react-router-dom';
import { DataStore } from "../Database";
const { Panel } = Collapse;

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

const Home = () => {
    const database = useContext(DataStore);

    const SESSION_1 = database?.SESSION_1;
    const SESSION_2 = database?.SESSION_2;
    const ITEMS_LIST_ROOM = database?.ITEMS_LIST_ROOM;


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

    return (
        <div className="Home">
            <div className='list_Slide_img'>
            <Carousel autoplay>
                <div>
                <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                <h3 style={contentStyle}>4</h3>
                </div>
            </Carousel>
            </div>
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