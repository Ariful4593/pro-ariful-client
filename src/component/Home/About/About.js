import React from 'react';
import photo1 from '../../../image/me2.png'
import cv from '../../../image/Ariful-resume.pdf'
import { Link } from 'react-router-dom';
const About = () => {
    return (
        <div className="container mt-4">
            <h6 className="text-center">WHO AM I</h6>
            <h2 className="text-center">About Me</h2>
            <h2 className="text-center text-primary">|</h2>
            <div className="row d-flex align-items-center">
                <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                    <img className="w-100" src={photo1} alt="" />
                </div>
                <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                    <h2>Hello</h2>
                    <p className="text-left">I’m <strong className="text-muted">Ariful Islam</strong>  . I am a Web Developer, and I'm very passionate and dedicated to my work. With 3 years experience as a professional Web Developer, I have acquired the skills and knowledge necessary to make your project a success.</p>
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <h5>Name: Ariful Islam</h5>
                            <h5>Age: 23</h5>
                        </div>
                        <div className="col-md-6">
                            <h5>Address: Bangladesh</h5>
                            <h5>Phone: +880-1830134593</h5>
                        </div>
                    </div>
                    <a href={cv} download>
                        <button type="button" className="btn btn-primary bg-primary mt-5">Download CV</button></a>
                    <Link to='contact'>
                        <button type="button" className="btn btn-secondary bg-primary mt-5">Hire Me</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default About;