import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import aboutImg from '../../../images/about.jpg';
import './AboutUs.css';

const AboutUs = () => {

    return (
        <div className='m-5 m-sm-3 py-3 border rounded about'>
            <div className="row p-md-5">
                <div className="col-md-8 about-text p-lg-5 p-md-4">
                    <div className="">
                        <h6><span className="text-info rounded-pill">#About</span></h6>
                        <h1 className='text-dark'>Best Dental Clinic That
                            You Can Trust</h1>
                        <p className='text-Justify pe-3 me-3'>Our dentists are highly qualified professionals and supported by state-of-the-art dental equipments and technologies. We strive to ensure that our patients receive excellent care and personal attention, served with compassion and kindness. Because our patients are our most important asset, our goal is to develop long lasting, trusting relationships with them.</p>
                    </div>
                    <div className="pt-3 ">
                        <h4>Clneasing</h4>
                        <ProgressBar variant="info" animated now={77} />
                        <h4>Crown & Bridges</h4>
                        <ProgressBar variant="secondary" animated now={85} />
                        <h4>Root Canal</h4>
                        <ProgressBar variant="warning" animated now={90} />
                        <h4>Cosmetic Dentistry</h4>
                        <ProgressBar variant="primary" animated now={75} />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="about-img my-3">
                        <img className='w-75 img-fluid rounded' src={aboutImg} alt="" />
                    </div>
                </div>

            </div>


        </div>
    );
};

export default AboutUs;