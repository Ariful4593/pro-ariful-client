import React from 'react';
import Header from '../Header/Header';
import About from '../About/About'
import MakeBeuty from '../MakeBeuty/MakeBeuty';
import Services from '../Services/Services';
import HireMe from '../HireMe/HireMe';
import RecentWork from '../RecentWork/RecentWork';
import Testimonial from '../Testimonial/Testimonial';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
const Home = () => {
    return (
        <div>
            <Header></Header>
            <About></About>
            <MakeBeuty></MakeBeuty>
            <Services></Services>
            <HireMe></HireMe>
            <RecentWork></RecentWork>
            <Testimonial></Testimonial>
            <Blog></Blog>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;