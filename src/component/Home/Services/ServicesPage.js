import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Services from './Services';
import './ServicePage.css';
import { useLocation } from 'react-router-dom';

const ServicesPage = () => {
    let location = useLocation()
    return (
        <div className={`${location.pathname === '/servicePage' ? 'servicePage' : ''}`}>
            <Navbar></Navbar>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default ServicesPage;