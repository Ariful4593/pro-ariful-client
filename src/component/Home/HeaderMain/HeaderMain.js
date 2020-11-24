import React from 'react';
import './HeaderMain.css';
import Typical from 'react-typical';
import { Link } from 'react-router-dom';

const HeaderMain = () => {
    return (
        <div className=" my-details d-flex align-items-center justify-content-center">
            <div className="row w-100">
                <div className=" col-md-12 col-lg-12 col-xl-12 text-center ">
                    <h3 className="text-white">Hi, My name is </h3>
                    <h1 className="text-white display-3 font-weight-bold">Ariful Islam</h1>
                    <h1 className=" text-secondary font-weight-bold">MERN Stack Web Developer</h1><br></br>
                    
                    <h5 className="text-secondary">
                        I Work in{" "}
                        <span className="typeWritter">
                            <Typical
                                steps={[
                                    "React.js",
                                    2000,
                                    "Problem Solving",
                                    2500,
                                    "Node.js",
                                    3000,
                                    "MongoDB",
                                    2000,
                                    "Heroku",
                                    2000,
                                    "JavaScript(ES6)",
                                    2000,
                                    "JavaScript(ES7)",
                                    2000,
                                ]}
                                loop={Infinity}
                                wrapper="span"
                            />
                        </span>
                    </h5>
                    <div className="hireme-div">
                        <Link to="contact"><a href="" className="hire-me">Hire Me</a></Link>
                    
                    </div>
                    
                </div>

            </div>

        </div>
    );
};

export default HeaderMain;