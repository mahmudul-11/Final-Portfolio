import React, { useEffect } from 'react';

import { Button, Container } from 'react-bootstrap';
import photo from '../../Images/profile.jpg'
import './Banner.css'
import Aos from 'aos';
import 'aos/dist/aos.css'
import pdf from '../../PDF/Mahmudul Hasan_Resume.pdf'



const Banner = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <Container className='mt-5' id='home'>
            <div className="row">
                <div className="col-md-5 col-sm-12 col-xs-12 new-class">
                    <div id='banner1' className='m-1 text-primary d-flex justify-content-end' data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <img src={photo} alt="" width='250' style={{ borderRadius: '50%', border: '10px solid #C1D3D2' }} />
                    </div>
                </div>
                <div className="col-md-7 col-sm-12 col-xs-12 new-class">
                    <div className='m-1 mt-2 px-3 d-flex flex-column justify-content-end'>
                        <p className='fs-4 fw-bold ' style={{ color: 'gray', }} >Hi,  This is </p>
                        <div data-aos="zoom-in" >
                            <h1 className='style-font fs-1' style={{ fontWeight: '900' }}>Mahmudul <span style={{ color: 'blue' }}> Hasan</span></h1>
                        </div>

                        <div>
                            <p style={{ textAlign: 'justify', fontWeight: 500, color: 'gray' }}>I am a web developer. I prefer to work with JavaScript. As a web developer, I normally use React.js as a front-end library and Node.js as a back-end framework. I also work with Python programming language. Sometimes I used Django as a back-end framework. Artificial Intelligence is another field that interests me.</p>
                        </div>
                        <div data-aos="zoom-out">

                            <a href={pdf} className='primary-button1 my-2 btn'> Download CV</a>
                            <a className='btn secondary-button1 ' href='#contact' > Contact Me</a>
                        </div>
                    </div>
                </div>

            </div>

        </Container>
    );
};

export default Banner;