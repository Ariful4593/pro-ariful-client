import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaintBrush, faCogs, faCamera, faMobile, faLink, faWrench } from '@fortawesome/free-solid-svg-icons';
import Fade from 'react-reveal/Fade';

const ourSrivice = [
    { id: 1, icon: faPaintBrush, title: ' Web design', describe: '', },
    { id: 2, icon: faCogs, title: 'Web development', describe: '', },
    { id: 3, icon: faCamera, title: 'Photography', describe: '', },
    { id: 4, icon: faMobile, title: 'Responsive Design', describe: '', },
    { id: 5, icon: faLink, title: 'Seo Friendly', describe: '', },
    { id: 6, icon: faWrench, title: 'Support', describe: '', },
]
const Services = () => {
    return (
        <div className="container mt-5">
            <h6 className="text-center text-light">WHAT DO I?</h6>
            <h2 className="text-center text-light" id="Services">Services </h2>
            <h2 className="text-center text-primary">|</h2>
            <div className="row mt-5 services">
                {
                    ourSrivice.map(item => {
                        return (
                            <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mt-2" key={item.id}>
                                <Fade left>
                                    <div className="card shadow-sm bg-white rounded" style={{ cursor: 'pointer' }}>
                                        <div className="card-body">
                                            <h5 className="card-title mt-4"><FontAwesomeIcon icon={item.icon} /> {item.title}</h5>
                                            <p className="card-text text-left">Extreme attention to detail is the essence of Boo’s unique design concepts.</p>
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Services;