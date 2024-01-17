
import { Carousel, Avatar } from 'antd';
import "./Home.css"
import { Link } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';

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
            <div className='Speakers'>
                <div className='Speakers_item'>
                    <div className='Speakers_item_img'>
                        <img src="https://www.jaist.ac.jp/~ogata/ogata.png" alt=""/>
                    </div>
                    <h3>Kazuhiro Ogata</h3>
                    <span>Professor</span>
                    <p>Keynote 1: Security Protocol Model Checking based on Algebraic Specifications</p>
                </div>
                <div className='Speakers_item'>
                    <div className='Speakers_item_img'>
                        <img src="https://isds.ctu.edu.vn/2023/images/upload/keynotes/masayuki_fukuzawa.png" alt=""/>
                    </div>
                    <h3>Kazuhiro Ogata</h3>
                    <span>Professor</span>
                    <p>Keynote 1: Security Protocol Model Checking based on Algebraic Specifications</p>
                </div>
                <div className='Speakers_item'>
                    <div className='Speakers_item_img'>
                        <img src="https://isds.ctu.edu.vn/2023/images/upload/keynotes/masayuki_fukuzawa.png" alt=""/>
                    </div>
                    <h3>Kazuhiro Ogata</h3>
                    <span>Professor</span>
                    <p>Keynote 1: Security Protocol Model Checking based on Algebraic Specifications</p>
                </div>
                <div className='Speakers_item'>
                    <div className='Speakers_item_img'>
                        <img src="https://isds.ctu.edu.vn/2023/images/upload/keynotes/masayuki_fukuzawa.png" alt=""/>
                    </div>
                    <h3>Kazuhiro Ogata</h3>
                    <span>Professor</span>
                    <p>Keynote 1: Security Protocol Model Checking based on Algebraic Specifications</p>
                </div>
                <div className='Speakers_item'>
                    <div className='Speakers_item_img'>
                        <img src="https://isds.ctu.edu.vn/2023/images/upload/keynotes/masayuki_fukuzawa.png" alt=""/>
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