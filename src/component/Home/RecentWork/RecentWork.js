import React, { useEffect, useState } from 'react';
import Portfolio from '../Portfolio/Portfolio';
// import mountains from '../../../image/filter/mountains.jpg';
import lights from '../../../image/filter/lights.jpg';
import nature from '../../../image/filter/nature.jpg';
import creativeAgency from '../../../image/filter/logo192.png';
import volunteerLogo from '../../../image/filter/volunteerLogo.PNG';
import travelGuru from '../../../image/filter/travelGuru.PNG';
import doctorPortal from '../../../image/filter/doctor-portal.PNG';
import './RecentWork.css';
import { Link } from 'react-router-dom';
const fakeData = [
    { name: 'Creative Agency', pic: creativeAgency, id: 1, type: 'portfolio', link: 'https://creative-agencys.web.app/' },
    { name: 'Volunteer Network', pic: volunteerLogo, id: 2, type: 'portfolio', link: 'https://volunteer-networkss.web.app/' },
    { name: 'Travel Guru', pic: travelGuru, id: 3, type: 'portfolio', link: 'http://travel-guru-web.web.app/' },
    { name: 'Doctors Portal', pic: doctorPortal, id: 4, type: 'portfolio', link: 'https://doctor-portalss.web.app/' },
    { name: 'Creative Agency', pic: lights, id: 5, type: 'arif' },
    { name: 'Creative Agency', pic: nature, id: 6, type: 'arif' },
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
            <h6 className="text-center">MY RECENT WORK?</h6>
            <h2 className="text-center" id="My-Work">My Work .</h2>
            <h2 className="text-center text-primary">|</h2>
            <div className="main ">
                <hr />
                <h2>PORTFOLIO</h2>
                <div id="myBtnContainer">
                    <button onClick={() => handleMenu('portfolio')} className={`btn active ${currentCategory === 'portfolio' ? 'text-danger' : ''}`}> Show all</button>
                    <button onClick={() => handleMenu('personal-website')} className={`btn active ${currentCategory === 'personal-website' ? 'text-danger' : ''}`}> Personal Website</button>
                </div>
                <div className="row">
                    {
                        currentMenu.map(item => {
                            return (

                                <div className="col-md-3" key={item.id}>
                                    <Link to={item.link}>
                                        <h4>{item.name}</h4>
                                        <img className="w-100" src={item.pic} alt="" />
                                    </Link>
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