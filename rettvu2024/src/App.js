
import "./App.css"
import { Layout, Menu, ConfigProvider } from 'antd';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Committee from "./components/Committee/Committee";

const { Header, Content, Footer } = Layout;

const items = [
  {
    label: 'Program',
    key: 'mail',
    path: '/', // Add the path for Program
  },
  {
    label: 'Organizing Committee',
    key: 'app',
    path: '/committee', // Add the path for Organizing Committee
  },
  {
    label: 'About RET',
    key: 'SubMenu',
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
            path: '/option1', // Add the path for Option 1
          },
          {
            label: 'Option 2',
            key: 'setting:2',
            path: '/option2', // Add the path for Option 2
          },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
            path: '/option3', // Add the path for Option 3
          },
          {
            label: 'Option 4',
            key: 'setting:4',
            path: '/option4', // Add the path for Option 4
          },
        ],
      },
    ],
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
                colorPrimary: 'orange'
              }
            }}>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{ flex: 1, minWidth: 0, }}>
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
