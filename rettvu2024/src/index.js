import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DataStoreProvider } from './components/Database';
import Admin from './components/Admin/Admin';
import Verify from './components/Admin/Verify';
import { ConfigProvider } from 'antd';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ConfigProvider
      theme={{
        components: {
          Timeline: {
            itemPaddingBottom: 40,
            dotBorderWidth: 4
          },
        },
      }}
    >
      <DataStoreProvider>
        <Routes>
          <Route path="/verify" element={<Verify />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/*" element={<App />} />
        </Routes>
      </DataStoreProvider>
    </ConfigProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
