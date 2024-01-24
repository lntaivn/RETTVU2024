
import "./Responsive.css"
import "./App.css"
import { useContext, useEffect, useState } from "react";
import { Layout, Menu, ConfigProvider, Avatar, Spin } from 'antd';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Committee from "./components/Committee/Committee";
import Header from "./components/Header/Header";
import Map from "./components/map/map";
import Footer from "./components/Footer/Footer";
import logo from "./components/imgs/logoTVU.png";
import About from "./components/About/About";
import Program from "./components/Program/Program";
import TravelInformation from "./components/Travel/TravelInformation";
import Slider from "./components/Slider/Slider";
import Submission from "./components/Submission/submission";

const { Content } = Layout;

const App = () => {

  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 500);

  }, [location.pathname])

  return (
    <div className='App'>
      {
        loading &&
        <Spin fullscreen />
      }
      <Layout>
        <div className='Banner'>
          <Avatar src={logo} size={50} />
          <h2>RET 2024 BY TRA VINH UNIVERSITY</h2>
        </div>
        <Header />
        <Content>
          <div className='Content'>
            <Slider/>
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/committee" element={<Committee />} />
              <Route path="/program" element={<Program />} />
              <Route path="/about" element={<About />} />
              <Route path="/submission" element={<Submission />} />
              <Route path="/travel-information" element={<TravelInformation />} />
              {/* <Route path="/map" element={<Map />} /> */}
            </Routes>
          </div>
        </Content>
        <Footer />
      </Layout>
    </div>
  );
};

export default App;
