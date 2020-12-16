import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker, faMobile, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useForm } from "react-hook-form";
import Footer from '../Footer/Footer';
import { useLocation } from 'react-router-dom';
const Contact = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        fetch('https://blooming-savannah-69825.herokuapp.com/contact', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        alert("Your order submitted")
    };

    let location = useLocation();
    console.log(location.pathname)

    return (
        <section className="d-flex align-items-center mt-5 parallax3">
            <div className="container">
                <h6 className="text-center ">GET IN TOUCH</h6>
                <h2 className="text-center " id="Contact">Contact .</h2>
                <h2 className="text-center text-primary">|</h2>
                <div className="row mt-5 contact">
                    <div className="col-md-4 text-center">
                        <FontAwesomeIcon icon={faMapMarker} />
                        <h4>My Location:</h4>
                        <h6>3481 Muradpur, Chittagong</h6>
                    </div>
                    <div className="col-md-4 text-center" style={{ fontSize: '30px' }}>
                        <FontAwesomeIcon icon={faMobile} />
                        <h4>Phone Number:</h4>
                        <h6>+880-1830134593</h6>
                    </div>
                    <div className="col-md-4 text-center" style={{ fontSize: '30px' }}>
                        <small className="text-center"><FontAwesomeIcon icon={faEnvelope} /></small>
                        <h4>Email Address:</h4>
                        <h6>ariful.og@gmail.com</h6>
                    </div>

                </div>
                <div className="row">
                    <div className="col-md-12">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-row mw-100">
                                <div className="form-group col-md-6">
                                    <label htmlFor="name">Name*</label>
                                    <input name="name" id="name" className="form-control" defaultValue="Ariful Islam" ref={register} />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="email">Name*</label>
                                    <input name="email" className="form-control" id="email" ref={register({ required: true })} />
                                    {errors.email && <span>This field is required</span>}
                                </div>
                                <div className="form-group col-md-12">
                                    <label htmlFor="subject">Subject*</label>
                                    <input name="subject" className="form-control" id="subject" ref={register({ required: true })} />
                                    {errors.subject && <span>This field is required</span>}
                                </div>
                                <div className="form-group col-md-12">
                                    <textarea name="textarea" className="form-control" rows="5"  ref={register} />
                                </div>

                            </div>

                            <input type="submit" />
                        </form>
                    </div>

                </div>
                <Footer></Footer>
            </div>
            
        </section>
    );
};

export default Contact;