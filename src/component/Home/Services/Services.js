import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaintBrush, faCogs, faCamera, faMobile, faLink, faWrench } from '@fortawesome/free-solid-svg-icons';
const Services = () => {
    return (
        <div className="container mt-5">
            <h6 className="text-center">WHAT DO I?</h6>
            <h2 className="text-center" id="Services">Services </h2>
            <h2 className="text-center text-primary">|</h2>
            <div className="row mt-5 services">
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                    <div className="card shadow-sm bg-white rounded">
                        <div className="card-body">
                            <h5 className="card-title mt-4"><FontAwesomeIcon icon={faPaintBrush} /> Web design</h5>

                            <p className="card-text text-left">Extreme attention to detail is the essence of Boo’s unique design concepts.</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                    <div className="card shadow bg-white rounded">
                        <div className="card-body">
                            <h5 className="card-title mt-4"><FontAwesomeIcon icon={faCogs} /> Web development</h5>

                            <p className="card-text text-left">Extreme attention to detail is the essence of Boo’s unique design concepts.</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                    <div className="card shadow-sm bg-white rounded" >
                        <div className="card-body">
                            <h5 className="card-title mt-4"><FontAwesomeIcon icon={faCamera} /> Photography</h5>

                            <p className="card-text text-left">Extreme attention to detail is the essence of Boo’s unique design concepts.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-4 services">
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                    <div className="card shadow-sm bg-white rounded">
                        <div className="card-body">
                            <h5 className="card-title mt-4"><FontAwesomeIcon icon={faMobile} /> Responsive Design</h5>

                            <p className="card-text text-left">Extreme attention to detail is the essence of Boo’s unique design concepts.</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 shadow-sm bg-white rounded">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title mt-4"><FontAwesomeIcon icon={faLink} /> Seo Friendly</h5>

                            <p className="card-text text-left">Extreme attention to detail is the essence of Boo’s unique design concepts.</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 shadow-sm bg-white rounded">
                    <div className="card" >
                        <div className="card-body">
                            <h5 className="card-title mt-4"><FontAwesomeIcon icon={faWrench} /> Support</h5>

                            <p className="card-text text-left">Extreme attention to detail is the essence of Boo’s unique design concepts.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;