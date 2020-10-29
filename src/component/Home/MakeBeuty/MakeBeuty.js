import React from 'react';

const MakeBeuty = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <h2>Make beauty Things With Passion.</h2>
                    <p className="text-left">I designer and developer services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface.</p>
                    <button type="button" className="btn btn-primary">Read More</button>
                </div>
                <div className="col-md-6">
                    <h5>CSS</h5>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: '87%'}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">87%</div>
                    </div>
                    <h5>Javascript</h5>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: '75%'}}  aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">75%</div>
                    </div>
                    <h5>React</h5>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: '70%'}}  aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">70%</div>
                    </div>
                    <h5>Node Js</h5>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: '80%'}}  aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">80%</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeBeuty;