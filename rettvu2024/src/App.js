
import "./App.css"
import { Layout, Menu, ConfigProvider, Avatar } from 'antd';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Committee from "./components/Committee/Committee";
import Header from "./components/Header/Header";
import Program from "./components/program/program";
import Map from "./components/map/map";
import Footer from "./components/Footer/Footer";
import logo from "./components/imgs/logoTVU.png";

const { Content } = Layout;

const items = [
  {
    label: 'Program',
    key: 'mail',
    path: '/',
  },
  {
    label: 'Organizing Committee',
    key: 'committee',
    path: '/committee', // Add the path for Organizing Committee
  },
  {
    label: 'Contact',
    key: 'contact',
    path: '/contact', // Add the path for Organizing Committee
  },
  {
    label: 'History',
    key: 'history',
    path: '/history', // Add the path for Organizing Committee
  },
  {
    label: 'About RET',
    key: 'about',
    path: '/about', // Add the path for Organizing Committee
  },
];

const App = () => {
  return (
    <div className='App'>
      <Layout>
        <div className='Banner'>
          <Avatar src={logo} size={50} />
          <h2>RET 2024 BY TRA VINH UNIVERSITY</h2>
        </div>
        <Header />
        <Content>
          <div className='Content'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/committee" element={<Committee />} />
              <Route path="/program" element={<Program />} />
              <Route path="/map" element={<Map />} />
              <Route path="/map" element={<Map />} />
              <Route path="/map" element={<Map />} />
            </Routes>
          </div>
        </Content>
        <Footer />
      </Layout>
    </div>
  );
};

export default App;
