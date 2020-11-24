import React from 'react';
import img1 from '../../../image/my-blog/stop-using-console.jpg';
import img2 from '../../../image/my-blog/master-javascript.jpeg';
import img3 from '../../../image/my-blog/begginer-guide.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

const blogData = [
  { title: 'Stop Using console.log() In JavaScript', img: img1, uploadedTime: 'Oct 29 · 4 min read |', details: 'Are you a JavaScript developer who uses console.log() often to debug your code? There is nothing wrong in it....', linkTo: 'https://medium.com/javascript-in-plain-english/stop-using-console-log-in-javascript-d29d6c24dc26', id: 1, name: 'Ariful Islam' },
  { title: 'Master the JavaScript Interview: What is a Promise?', img: img2, uploadedTime: 'Oct 29 · 4 min read |', details: 'Master the JavaScript Interview” is a series of posts designed to prepare candidates for common questions they are likely to', linkTo: 'https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261', id: 2, name: 'Ariful Islam' },
  { title: 'A Beginner’s Guide to Server-Side Web Development with Node.js', img: img3, uploadedTime: 'Oct 29 · 4 min read |', details: 'For the bulk of my web career, I’ve worked exclusively on the client-side of things. Designing responsive layouts, creating.....', linkTo: 'https://blog.bitsrc.io/a-beginners-guide-to-server-side-web-development-with-node-js-17385da09f93', id: 3, name: 'Ariful Islam' },

]
const Blog = () => {
  return (
    <div className="container mt-5">
      <h6 className="text-center text-light">SEE LATEST NEWS</h6>
      <h2 className="text-center text-light" id="Blog">My Blog .</h2>
      <h2 className="text-center text-primary">|</h2>
      <div className="row">
        <div className="card-deck">
          {
            blogData.map(item => {
              return (
                <div className="card" key={item.id}>
                  <Fade bottom>
                    <img src={item.img} className="card-img-top h-50" alt="..." />
                    <div className="card-body">
                      <a href={item.linkTo} target="_blank">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text text-left">{item.uploadedTime}</p>
                        <p className="mt-5 text-left">{item.details}</p>
                      </a>

                    </div>
                    <div className="card-footer">
                      <small className="text-muted font-weight-bold"><a href="https://www.facebook.com/ArifulislamNationalInstitute/" target="_blank"><FontAwesomeIcon icon={faUser} /> {item.name}</a></small>
                    </div>
                  </Fade>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Blog;