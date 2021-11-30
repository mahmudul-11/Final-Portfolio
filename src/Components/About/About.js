import React, { useEffect } from 'react';
import './About.css'
import profile2 from '../../Images/profile2.png'
import { Container } from 'react-bootstrap';
import Aos from 'aos';
import 'aos/dist/aos.css'

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
            <div className='row mt-5' >
                <div className="col-md-5 col-sm-12 col-xs-12 text-center py-4 " style={{ backgroundColor: '#5842E7', color: 'white', borderRadius: '15px 60px' }} data-aos="fade-left">
                    <div className=''>
                        <h3 className='fw-bolder'>Educational Background</h3>
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
                <div className="col-md-7 col-sm-12 col-xs-12">
                    <h3>Technical Skills</h3>

                </div>
            </div>



        </div>


    );
};

export default About;