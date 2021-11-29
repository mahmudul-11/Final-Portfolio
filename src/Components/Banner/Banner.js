import React from 'react';
import { Button } from 'react-bootstrap';
import photo from '../../Images/profile.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div className='mt-5'>
            <div className="row">
                <div className="col-md-5 col-sm-12 col-xs-12 ">
                    <div className='m-1 text-primary d-flex justify-content-end'>
                        <img src={photo} alt="" width='250' style={{ borderRadius: '50%', border: '10px solid #C1D3D2' }} />
                    </div>
                </div>
                <div className="col-md-7 col-sm-12 col-xs-12">
                    <div className='m-1 mt-2 px-3 d-flex flex-column justify-content-end'>
                        <p className='fs-4 fw-bold' style={{ color: 'gray' }} >Hi,  This is </p>
                        <h1 className='style-font fw-bolder fs-1'>Mahmudul Hasan</h1>
                        <div>
                            <p style={{ textAlign: 'justify', fontWeight: 600, color: 'gray' }}>I am a Web developer. I prefer to with JavaScript. As a web developer, I normally use React.js as a front-end libray and Node.js as a back-end framework. I also work with Python programming language. Sometimes i used Django as a back-end framework. Artificial Intelligence is another field that interests me.</p>
                        </div>
                        <div>

                            <Button className='primary-button1 my-2'> Download CV</Button>
                            <Button className='secondary-button1 '> Contact Me</Button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Banner;