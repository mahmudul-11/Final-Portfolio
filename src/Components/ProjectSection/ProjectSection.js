import React, { useEffect } from 'react';
import p1 from '../../Images/projects/1.png';
import p2 from '../../Images/projects/2.png';
import p3 from '../../Images/projects/3.png';
import './ProjectSection.css'
import Aos from 'aos';
import 'aos/dist/aos.css'

const ProjectSection = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div>
            <div className='mt-5'>
                <div className='mt-3'>
                    <h1 className='text-center ' style={{ fontSize: '55px', fontWeight: '900' }}> Proj<span style={{ color: 'blue' }}>ects</span></h1>
                </div>
                <div className="row mt-5">
                    <div className="col-md-4 col-sm-12 col-xs-12 ">
                        <div data-aos="fade-down" className='card-style  py-2'
                            style={{ backgroundImage: "linear-gradient(#fc466b,#3f5efb )" }}>

                            <div className='d-flex justify-content-center mb-2'>
                                <img src={p1} alt="" width='90%' height='180' style={{ borderRadius: '10px' }} />
                            </div>
                            <h5 className='text-center text-white fw-bolder'> Niche Business"Bike Store"</h5>
                            <p className='mt-2 text-center text-white'>Using this site you can order your favourit bike and also manage your orders using dashboard.</p>
                            <div className='d-flex justify-content-evenly pb-2'>
                                <a href="https://bike-store-12.web.app/" className='btn btn-warning'>Live Site</a>
                                <a href="https://github.com/mahmudul-11/niche-market-bike-store-front-end" className='btn btn-warning px-4'>Code</a>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-4 col-sm-12 col-xs-12">
                        <div className='card-style  py-2'
                            style={{ backgroundImage: "linear-gradient(#22c1c3,#fd1d1d,#3f5efb )" }}>

                            <div className='d-flex justify-content-center mb-2'>
                                <img src={p2} alt="" width='90%' height='180' style={{ borderRadius: '10px' }} />
                            </div>
                            <h5 className='text-center text-white fw-bolder'> Tourism  Related"Traveling World"</h5>
                            <p className='mt-2 text-center text-white'>Users are able to book their desire tour package and manage their orders using this web application</p>
                            <div className='d-flex justify-content-evenly pb-2'>
                                <a href="https://assignment-11-86bbc.web.app/" className='btn btn-warning'>Live Site</a>
                                <a href="https://github.com/mahmudul-11/Tourism-Related-website-front-end" className='btn btn-warning px-4'>Code</a>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-4 col-sm-12 col-xs-12">
                        <div data-aos="fade-up" className='card-style  py-2'
                            style={{ backgroundImage: "linear-gradient(#3f5efb,#22c1c3 )" }}>

                            <div className='d-flex justify-content-center mb-2'>
                                <img src={p3} alt="" width='90%' height='180' style={{ borderRadius: '10px' }} />
                            </div>
                            <h5 className='text-center text-white fw-bolder'> Intensive Care Hospital</h5>
                            <p className='mt-2 text-center text-white'>This is an healthcare related organisation's advertisement type website. Here all services are shown up.</p>
                            <div className='d-flex justify-content-evenly pb-2'>
                                <a href="https://healthcare-c8687.web.app/" className='btn btn-warning'>Live Site</a>
                                <a href="https://github.com/mahmudul-11/healthcare-basic-react" className='btn btn-warning px-4'>Code</a>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default ProjectSection;