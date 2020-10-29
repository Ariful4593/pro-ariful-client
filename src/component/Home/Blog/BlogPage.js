import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Blog from './Blog';

const BlogPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Blog></Blog>
            <Footer></Footer>
        </div>
    );
};

export default BlogPage;