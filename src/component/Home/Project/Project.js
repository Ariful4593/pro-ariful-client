import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import RecentWork from '../RecentWork/RecentWork';
import './Project.css'
const Project = () => {
    return (
        <div className="project">
            <Navbar></Navbar>
            <RecentWork></RecentWork>
            <Footer></Footer>
        </div>
    );
};

export default Project;