import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Services from './Services';
import './ServicePage.css'
const ServicesPage = () => {
    return (
        <div className="servicePage">
            <Navbar></Navbar>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default ServicesPage;