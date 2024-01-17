
import "./App.css"
import { Layout, Menu, ConfigProvider } from 'antd';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Committee from "./components/Committee/Committee";

const { Header, Content, Footer } = Layout;

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
          Banner
        </div>
        <Header style={{ display: 'flex', alignItems: 'center', zIndex: 99, padding: "0" }} className='Header'>
          <div className="demo-logo" />
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: '#f7961e'
              }
            }}>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{ flex: 1, minWidth: 0,backgroundColor: "#374f8a", fontWeight: "600" }}>
              {items.map(item => (
                <Menu.Item key={item.key}>
                  <Link to={item.path}>{item.label}</Link>
                </Menu.Item>
              ))}
            </Menu>
          </ConfigProvider>
        </Header>
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
