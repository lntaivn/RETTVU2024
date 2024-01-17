
import "./App.css"
import { Layout, Menu, ConfigProvider, Avatar } from 'antd';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Committee from "./components/Committee/Committee";
import Header from "./components/Header/Header";

const { Content, Footer } = Layout;

const items = [
  {
    label: 'Program',
    key: 'home',
    path: '/', // Add the path for Program
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
          LOGO RET TVU 2024
        </div>    
        <Header/>
        <Content>
          <div className='Content'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/committee" element={<Committee />} />
            </Routes>
          </div>
        </Content>
        <Footer>
          <div className='Footer'></div>
        </Footer>
      </Layout>
    </div>
  );
};

export default App;
