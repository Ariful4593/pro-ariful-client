import React from 'react';
import photo1 from '../../../image/arif.png'
import cv from '../../../image/Ariful-resume.pdf'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import './About.css';
const About = () => {
    return (
        <div className="container mt-4">
            <h6 className="text-center text-light">WHO AM I</h6>
            <h2 className="text-center text-light">About Me</h2>
            <h2 className="text-center text-primary">|</h2>

            <div className="row d-flex align-items-center">
                <Fade bottom>
                    <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                        <img className="w-100" src={photo1} alt="" />
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                        <h2 className="text-light">Hi</h2>
                        <p className="text-justify text-light">I’m <strong className="">Ariful Islam</strong>  . I am from Chittagong, I am Computer Science & Technology diploma student. I am an innovative front end developer with 2 years+ experience managing all aspects of the development process for small to medium size companies. I am passionate about long term value for our customer. My main strength is I have a positive attitude and my weakness is I don't feel comfortable until I complete my work in a given time.  </p>
                        <a href={cv} download className="hire-me">Download CV</a>
                        <Link to="contact" className="hire-me mt-2 sm-mt-0 ml-2 ">Hire Me</Link>

                    </div>
                </Fade>
            </div>


        </div>
    );
};

export default About;