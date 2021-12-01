import React, { useEffect } from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css'

const singleProject = () => {


    return (
        <div className="col-md-4 col-sm-12 col-xs-12 ">
            <div data-aos="fade-down" className='card-style  py-2'
                style={{ backgroundImage: "linear-gradient(#fc466b,#3f5efb )" }}>

                <div className='d-flex justify-content-center mb-2'>
                    <img src="" alt="" width='90%' height='180' style={{ borderRadius: '10px' }} />
                </div>
                <h5 className='text-center text-white fw-bolder'> Niche Business"Bike Store"</h5>
                <p className='mt-2 text-center text-white'>Using this site you can order your favourit bike and also manage your orders using dashboard.</p>
                <div className='d-flex justify-content-evenly pb-2'>
                    <a href="https://bike-store-12.web.app/" className='btn btn-warning'>Live Site</a>
                    <a href="https://github.com/mahmudul-11/niche-market-bike-store-front-end" className='btn btn-warning px-4'>Code</a>
                </div>
            </div>

        </div>
    );
};

export default singleProject;