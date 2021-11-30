import React, { useEffect } from 'react';
import './About.css'
import profile2 from '../../Images/profile2.png'
import { Container } from 'react-bootstrap';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Skills from '../Skills/Skills';

const About = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div >
            <div className='row mt-2'>
                <div className="col-md-12 col-sm-12 col-xs-12  d-flex justify-content-center mt-5">
                    <img src={profile2} alt="" width='250' height='250' style={{ borderRadius: '50%', marginTop: '20px auto', border: '10px solid #98ADAB' }} />
                </div>
            </div>
            <Container className='row mt-2 mx-4' id='about-text'>

                <div className="col-md-12 col-sm-12 col-xs-12  d-flex justify-content-center p-4 mt-5" style={{ backgroundColor: '#F9B040', borderRadius: '25px', fontWeight: 800 }} data-aos="fade-up">
                    <p style={{ fontSize: '20px', fontWeight: 600, textAlign: 'center' }}>I am a web developer. I prefer to work with JavaScript. As a web developer, I normally use React.js as a front-end library and Node.js as a back-end framework. I also work with Python programming language. Sometimes I used Django as a back-end framework. Artificial Intelligence is another field that interests me.</p>
                </div>

            </Container>
            <div className='row mt-5' >
                <div className="col-md-5 col-sm-12 col-xs-12 text-center py-4 " >
                    <div className='px-1 py-5' style={{ backgroundColor: '#5842E7', color: 'white', borderRadius: '15px 60px' }} data-aos="fade-up">
                        <h3 className='fw-bolder py-3'>Educational Background</h3>
                        <div className='row mx-3'>
                            <div className='col border border-end-0 p-2 '>
                                <h6 className='fw-bold'>Bachelor</h6>
                                <h6 className='fs-6'>( CSE )</h6>
                            </div>
                            <div className='col border'>
                                <p className='mt-3 fw-bold'>University of Asia Pacific</p>
                            </div>
                        </div>
                        <div className='row mx-3'>
                            <div className='col border border-end-0 p-2 '>
                                <h6 className='fw-bold'>Higher Secondary</h6>
                                <h6 className='fs-6'>( Scieence )</h6>
                            </div>
                            <div className='col border'>
                                <p className='mt-3 fw-bold'>Gurudayal Govt. College</p>
                            </div>
                        </div>
                        <div className='row mx-3'>
                            <div className='col border border-end-0 p-2 '>
                                <h6 className='fw-bold'>Secondary</h6>
                                <h6 className='fs-6'>( Science)</h6>
                            </div>
                            <div className='col border'>
                                <p className='mt-3 fw-bold'>Taljanga R.C.Roy High School</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-md-7 col-sm-12 col-xs-12 text-center"  >
                    <div className='mx-4 my-2 p-3' style={{ backgroundImage: "linear-gradient(#fc466b, #3f5efb)", borderRadius: '25px' }}>
                        <h3 className='fw-bolder py-3 text-white'>Technical Skills</h3>
                        <Skills></Skills>
                    </div>
                </div>
            </div>



        </div>


    );
};

export default About;