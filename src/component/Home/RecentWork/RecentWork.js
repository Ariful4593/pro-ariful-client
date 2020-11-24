import React, { useEffect, useState } from 'react';
import Portfolio from '../Portfolio/Portfolio';
// import mountains from '../../../image/filter/mountains.jpg';
import lights from '../../../image/filter/lights.jpg';
import nature from '../../../image/filter/nature.jpg';
import creativeAgency from '../../../image/filter/logo192.png';
import volunteerLogo from '../../../image/filter/volunteerLogo.PNG';
import travelGuru from '../../../image/filter/travelGuru.PNG';
import doctorPortal from '../../../image/filter/doctor-portal.PNG';
import athena from '../../../image/filter/athena-design.PNG';
import redOnion from '../../../image/filter/red-onion.PNG'
import './RecentWork.css';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

const fakeData = [
    { name: 'Creative Agency', pic: creativeAgency, id: 1, describe: 'This is a software service selling website. Users can buy listed services by logging in to it. Users can log in with Gmail are registering with a manual email. Admin and User authorization implemented', type: 'portfolio', link: 'https://creative-agencys.web.app/', tools: 'React, Node, Mongo, Firebase' },
    { name: 'Volunteer Network', pic: volunteerLogo, id: 2, describe: 'This is a Social Working Platform.Users can register for any social service by logging in to it. Users can log in with Gmail are registering with a manual email. Admin can see all list also can delete', type: 'portfolio', link: 'https://volunteer-networkss.web.app/', tools: 'React, Node, Mongo, Firebase' },
    { name: 'Travel Guru', pic: travelGuru, id: 3, describe: 'Travel Guru is a travel agency website.  Indirectly Features: Sign in new user, Log in user, Password reset, Email Verification, Travel area map.  User Features: Won Book list, Book a travel area.', type: 'portfolio', link: 'http://travel-guru-web.web.app/' },
    { name: 'Doctors Portal', pic: doctorPortal, describe: 'Doctor Portal is a full-stack application that has a concise and well-structured dashboard. The UI provides doctors with an easy, clear way to create/read/update/delete (CRUD) patient information. The dashboard also integrates basic and common information such as a calendar, clock, and local weather.', id: 4, type: 'portfolio', link: 'https://doctor-portalss.web.app/', tools: 'React, Node, Mongo, Firebase' },
    { name: 'Athena Design', pic: athena, id: 5, describe: 'This is a complete react application. The library and technologies we used to create this project are - React, React-router-dom, Google font. Basically, we have to focus more on the design and responsiveness of this project.', type: 'portfolio', link: 'https://athena-designs.firebaseapp.com/', tools: 'BS4, React, Firebase' },
    { name: 'Red Onion', pic: redOnion, describe: 'A single-page restaurant application where people able to select food in their cart and checkout the cart with their information.', id: 6, type: 'portfolio', link: 'https://red-onion-foodss.firebaseapp.com/', tools: 'React, Node, Mongo, Firebase' },
]

const RecentWork = () => {
    const [currentCategory, setCurrentCategory] = useState('');

    const [currentMenu, setCurrentMenu] = useState([]);

    useEffect(() => {
        setCurrentCategory('portfolio')
    }, [])
    const handleMenu = (submenu) => {
        setCurrentCategory(submenu)
    }
    useEffect(() => {
        if (currentCategory !== '') {
            const current = fakeData.filter(cate => cate.type === currentCategory);
            setCurrentMenu(current)
        }
    }, [currentCategory])
    return (
        <div className="container mt-5">
            <h6 className="text-center text-light">MY RECENT WORK?</h6>
            <h2 className="text-center  text-light" id="My-Work">My Work .</h2>
            <h2 className="text-center text-primary">|</h2>
            <div className="main ">
                <hr />
                <h2 className="text-light">PORTFOLIO</h2>
                <div id="myBtnContainer">
                    <button onClick={() => handleMenu('portfolio')} className={`btn active ${currentCategory === 'portfolio' ? 'text-danger' : ' text-light'}`}> Show all</button>
                    <button onClick={() => handleMenu('personal-website')} className={`btn active ${currentCategory === 'personal-website' ? 'text-danger' : ' text-light'}`}> Personal Website</button>
                </div>
                <div className="row">
                    {
                        currentMenu.map(item => {
                            return (

                                <div className="col-md-4" key={item.id}>
                                    
                                        <a href={item.link}>
                                        <Fade left>
                                            <div className="card mt-2 w-100" style={{ background: '#162944' }}>
                                                <img className="card-img-top" src={item.pic} alt="Card  cap" />
                                                <div className="card-body">
                                                    <h5 className="card-title text-light">{item.name}</h5>
                                                    <p className="card-text text-light">{item.describe}</p>
                                                    <h5 className="text-secondary">{item.tools}</h5>
                                                </div>
                                            </div>
                                            </Fade>
                                        </a>

                                    

                                </div>

                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default RecentWork;