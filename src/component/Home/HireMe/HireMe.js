import React from 'react';
import { Link } from 'react-router-dom';
import './HireMe.css'
const HireMe = () => {
    return (
        <section className="parallax d-flex align-items-center mt-5">
            <div className="container ">
                <Link to='contact'>
                    <h1 className="text-center text-white mt-5">Hire me for your next project</h1>
                </Link>

            </div>
        </section>
    );
};

export default HireMe;