import React from 'react';
import Header from '../Header/Header';
import About from '../About/About'
import MakeBeuty from '../MakeBeuty/MakeBeuty';
import Services from '../Services/Services';
import HireMe from '../HireMe/HireMe';
import RecentWork from '../RecentWork/RecentWork';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import './Home.css';
const Home = () => {
    return (
        <div className="home">
            <Header></Header>
            <About></About>
            <MakeBeuty></MakeBeuty>
            <Services></Services>
            <HireMe></HireMe>
            <RecentWork></RecentWork>
            {/* <Testimonial></Testimonial> */}
            <Blog></Blog>
            <Contact></Contact>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Home;