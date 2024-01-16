
import { Carousel } from 'antd';
import "./Home.css"
import { Link } from 'react-router-dom';

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
        </div>
    )
}

export default Home;