
import { Carousel, Collapse } from 'antd';
import "./Home.css"
import { Link } from 'react-router-dom';
const { Panel } = Collapse;

const text = `
                <ul>
                    <li>
                        <strong>13:00-13:20:</strong>
                        <br />
                        <strong>[Paper 11]</strong> Research of State of Charge (SOC) and State of Energy (SOE) of Lithium Ion Battery in Electric Vehicle
                        <br />
                        <em>Authors:</em> Khac Huan Nguyen, Anh Tuan Nguyen, Trong Tan Bui
                        <br />
                        <em>Chairs:</em> Dr. Mai Phuoc Trai, Dr. Truong Van Men
                    </li>
                </ul>
         
           
                <ul>
                    <li>
                        <strong>13:20-13:40:</strong>
                        <br />
                        <strong>[Paper 2]</strong> Assessment of the status and classification of labor conditions for workers operating in the textile industry and proposed solutions to improve labor conditions
                        <br />
                        <em>Authors:</em> Dang Xuan Trong, Tran Bao Huy, Nguyen Trung Mung, Tang Tan Minh
                        <br />
                        <em>Chairs:</em> Dr. Mai Phuoc Trai, Dr. Truong Van Men
                    </li>
                </ul>
            
           
                <ul>
                    <li>
                        <strong>13:40-14:00:</strong>
                        <br />
                        <strong>[Paper 43]</strong> Designing Hardware-in-the-Loop Model for Traction Control System on the Vehicle
                        <br />
                        <em>Authors:</em> Tan Tai Phan
                        <br />
                        <em>Chairs:</em> Dr. Mai Phuoc Trai, Dr. Truong Van Men
                    </li>
                </ul>
           
        `;
const items = [
    {
      key: '1',
      label: (
          <div>
              <span>
                  <span style={{ color: 'red' }}>ROOM 1 (SESSION 1):</span>
                  <span class='modify_Upto'> ROOM B21.201</span>
                  <br />
                  <span><b>Session chairs:</b> Dr. Mai Phuoc Trai, Dr. Truong Van Men</span>
              </span>
          </div>
      ),
      children: <div dangerouslySetInnerHTML={{ __html: text }} />,
    },
    {
      key: '2',
      label: (
        <div>
            <span>
                <span style={{ color: 'red' }}>ROOM 2 (SESSION 2):</span>
                <span class='modify_Upto'> ROOM B21.202</span>
                <br />
                <span><b>Session chairs:</b> Assoc. Prof. Dr. Van Huu Thinh, Dr. Duong Ngoc Bich</span>
            </span>
        </div>
    ),
      children: <div dangerouslySetInnerHTML={{ __html: text }} />,
    },
    {
      key: '3',
      label: (
        <div>
            <span>
                <span style={{ color: 'red' }}>ROOM 3 (SESSION 3):</span>
                <span class='modify_Upto'> ROOM B21.203</span>
                <br />
                <span><b>Session chairs:</b> Dr. Vo Phuoc Hung, Dr. Nguyen Duc Binh, Dr. Nguyen Bao An</span>
            </span>
        </div>
    ),
      children: <div dangerouslySetInnerHTML={{ __html: text }} />,
    },
    {
        key: '4',
        label: (
          <div>
              <span>
                  <span style={{ color: 'red' }}>ROOM 4 (SESSION 4):</span>
                  <span class='modify_Upto'> ROOM B21.204</span>
                  <br />
                  <span><b>Session chairs:</b> Dr. Huynh Phuoc Hai, Dr. Nguyen Nhut Lam, Dr. Tran Song Toan</span>
              </span>
          </div>
      ),
        children: <div dangerouslySetInnerHTML={{ __html: text }} />,
      },
      {
        key: '5',
        label: (
          <div>
              <span>
                  <span style={{ color: 'red' }}>ROOM 5 (SESSION 5):</span>
                  <span class='modify_Upto'> ROOM B21.205</span>
                  <br />
                  <span><b>Session chairs:</b> Assoc. Prof. Dr.  Ton Duc Do, Dr. Thach Le Khiem, Dr. Cao Phuong Thao</span>
              </span>
          </div>
      ),
        children: <div dangerouslySetInnerHTML={{ __html: text }} />,
      },
      {
        key: '6',
        label: (
          <div>
              <span>
                  <span style={{ color: 'red' }}>ROOM 6 (SESSION 6):</span>
                  <span class='modify_Upto'> ROOM B21.207</span>
                  <br />
                  <span><b>Session chairs:</b> Dr. Huynh Van Hiep, Dr. Nguyen Xuan Son</span>
              </span>
          </div>
      ),
        children: <div dangerouslySetInnerHTML={{ __html: text }} />,
      },
  ];

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
            <div class="program">
                <h1>CONFERENCE PROGRAM</h1>
                <h2>
                    I. Session 1, Saturday July 22nd, 2023
                </h2>
                <div class="program_title_detail"><ul><li> <h2>Room:</h2> <h1>E21.105</h1> <Link to="/map">View map</Link></li></ul></div>
                <div class="schedule">
                    <ul>
                        <li>
                            <span class="time">8:00-8:30:</span>
                            <span class="event">Welcome Delegates</span>
                        </li>
                        <li>
                            <span class="time">8:30-9:00:</span>
                            <span class="event">Conference opening</span>
                            <span class="event">Performances welcome</span>
                            <span class="event">Opening speech: Assoc. Prof. Dr. Diep Thanh Tung, Vice Rector, Tra Vinh University, Vietnam</span>
                            <span class="event">Seminar preliminary Dr. Pham Quoc Phong, Vice Dean - School of Engineering and Technology, Tra Vinh University, Vietnam</span>
                        </li>
                        <li>
                            <span class="time">9:00-9:50:</span>
                            <span class="event"><b>Keynote Speech 1: Wind speed estimation and prediction for control, operation, and planning of wind power plants</b></span>
                            <span class="event">Speaker: Assoc. Prof. Dr. Do Duc Ton - Nazarbayev University, Kazakhstan</span>
                            <span class="event">Keynote Session Chairs:</span>
                            <span class="event">Dr. Pham Van Hoan, Tra Vinh University, Vietnam</span>
                            <span class="event">Dr. Thach Le Khiem, Tra Vinh University, Vietnam</span>
                        </li>
                        <li>
                            <span class="time">9:50-10:40:</span>
                            <span class="event"><b>Keynote Speech 2: AI in manufacturing</b></span>
                            <span class="event">Speaker: Mr. Vo Duy Nhat, Mitsubishi Electric Vietnam Co., LTD</span>
                            <span class="event">Keynote Session Chairs:</span>
                            <span class="event">Assoc. Prof. Dr. Do Duc Ton, Nazarbayev University, Kazakhstan</span>
                            <span class="event">Dr. Thach Le Khiem, Tra Vinh University, Vietnam</span>
                        </li>
                        <li>
                            <span class="time">10:40-11:30:</span>
                            <span class="event"><b>Keynote Speech 3: Refining Programming Education: Integrating Essential Software Engineering Practices</b></span>
                            <span class="event">Speaker: Dr. Nguyen Bao An - Tra Vinh University</span>
                            <span class="event">Keynote Session Chairs:</span>
                            <span class="event">Assoc. Prof. Dr. Nguyen Thai Son, Director - Resource Development Institute, Tra Vinh University, Vietnam</span>
                            <span class="event">Dr. Vo Phuoc Hung, Dean - School of Engineering and Technology, Tra Vinh University, Vietnam</span>
                        </li>
                        <li>
                            <span class="time">11:30-11:45:</span>
                            <span class="event">Group Photo</span>
                        </li>
                    </ul>
                </div>
                <h2>
                     II. Session 2, Saturday July 22nd, 2023
                </h2>
           
                <div class="schedule">
                    <ul>
                        <li>
                            <span class="time">12:30-13:00:</span>
                            <span class="event">Welcome Delegates</span>
                        </li>
                        <li>
                            <span class="time">13:00-14:00:</span>
                        </li>
                    </ul>
                </div>    
                <h1 class="modify_program_h1">Parallel sessions (13:00-14:00, <Link to="/map">View map</Link>)</h1>
                <div class="program_event_click_arrow">

                    <Collapse>
                    {items.map(item => (
                        <Panel key={item.key} header={item.label}>
                        {item.children}
                        </Panel>
                    ))}
                    </Collapse>
                </div>
            </div>
        </div>
    )
}

export default Home;