import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Blogs = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div style={{ height: '100vh' }} className='d-flex justify justify-content-center align-items-center'>
            <div data-aos="zoom-out" style={{ height: '20vh', backgroundColor: '#5B4CF0', color: 'white' }} className='p-4 rounded' >
                <h1>Blogs are comming soon..!</h1>
                {

                }
                <h4>This is a blog</h4>
            </div>
        </div>
    );
};

export default Blogs;
<h1>This is Blog page</h1>