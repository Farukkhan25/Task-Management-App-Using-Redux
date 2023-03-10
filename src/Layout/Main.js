import React from 'react';
import { Outlet } from "react-router-dom";
import Footer from '../Components/Shared/Footer/Footer';
import Header from '../Components/Shared/Header/Header';

const Main = () => {
    return (
      <div className="h-screen">
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    );
};

export default Main;