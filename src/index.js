import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
// import './index.css';
import Login from './app/pages/Login';
import About from './app/pages/About';
import Categories from './app/pages/Categories';
import Homepage from './app/pages';
import AfterLogin from './app/pages/AfterLogin';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Homepage />}/>
            <Route path="/login" element={<Login />}/>
            {/* <Route path="/signout" element={<Login />}/> */}
            <Route path="/about" element={<About />}/>
            <Route path="/categories" element={<Categories />}/>
            <Route path="/afterlogin" element={<AfterLogin />}/>
            </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);


