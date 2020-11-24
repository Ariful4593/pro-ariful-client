import React from 'react';
import SkillBar from 'react-skillbars';
import Fade from 'react-reveal/Fade';

const skills = [
    { "type": 'HTML', "level": 90 },
    { "type": 'CSS', "level": 80 },
    { "type": 'Bootsrap', "level": 80 },
    { "type": 'Material UI', "level": 70 },
    { "type": 'JavaScript', "level": 85 },
    { "type": 'React', "level": 80 },
    { "type": 'Node JS', "level": 60 },
    { "type": 'Python', "level": 70 },
    { "type": 'C', "level": 60 },
    { "type": 'C#', "level": 60 },
]
const colors = {
    bar: '#3498DB',
    title: {
        text: '#fff',
        background: '#2573A6'
    }
}
const MakeBeuty = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <Fade bottom>
                        <h2 className="text-light">Make beauty Things With Passion.</h2>
                        <p className="text-left text-light">I designer and developer services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface.</p>
                        <button type="button" className="btn btn-primary mb-2">Read More</button>
                    </Fade>

                </div>
                <div className="col-md-6">
                    <SkillBar skills={skills} colors={colors} />
                </div>
            </div>
        </div>
    );
};

export default MakeBeuty;