import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Blog from './Blog';
import './BlogPage.css'
const BlogPage = () => {
    return (
        <div className="blog">
            <Navbar></Navbar>
            <Blog></Blog>
            <Footer></Footer>
        </div>
    );
};

export default BlogPage;