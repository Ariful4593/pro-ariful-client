import React from 'react';
import Navbar from '../Navbar/Navbar';
import Contact from './Contact';
import './ContactPage.css';
import { useLocation } from 'react-router-dom';

const ContactPage = () => {
    let location = useLocation();
    console.log(location.pathname)
    return (
        <div className={`${location.pathname === '/contact' ? 'contact-page' : ''}`}>
            <Navbar></Navbar>
            <Contact></Contact>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default ContactPage;