import React, { useEffect } from 'react';
import htm from '../../Images/skills/html.png'
import cs from '../../Images/skills/css.png'
import jss from '../../Images/skills/js.png'
import pyh from '../../Images/skills/python.png'
import boot from '../../Images/skills/bootstrap.png'
import tail from '../../Images/skills/tailwind.png'
import mu from '../../Images/skills/mui.png'
import fir from '../../Images/skills/firebase.png'
import net from '../../Images/skills/netlify.png'
import rea from '../../Images/skills/react.js.png'
import nod from '../../Images/skills/node.png'
import mo from '../../Images/skills//mongo.png'
import hero from '../../Images/skills/heroku.png'
import './Skills.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Container } from 'react-bootstrap';

const Skills = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])
    return (

        <div className="container" >
            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-6 text-center">
                    <div className='small-card  m-1 d-flex flex-column justify-content-center ' data-aos="flip-down"
                    >
                        <img src={htm} alt="" width='90%' height='60' />
                        <h6 className='mt-1 fw-bolder'>HTML</h6>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 text-center">
                    <div className='small-card  m-1 d-flex flex-column justify-content-center ' data-aos="flip-down"
                    >
                        <img src={cs} alt="" width='90%' height='60' />
                        <h6 className='mt-1 fw-bolder'>CSS</h6>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 text-center">
                    <div className='small-card  m-1 d-flex flex-column justify-content-center ' data-aos="flip-down"
                    >
                        <img src={jss} alt="" width='90%' height='60' style={{ borderRadius: '10px' }} />
                        <h6 className='mt-1 fw-bolder'>JS</h6>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 text-center">
                    <div className='small-card  m-1 d-flex flex-column justify-content-center ' data-aos="flip-down"
                    >
                        <img src={pyh} alt="" width='90%' height='60' />
                        <h6 className='mt-1 fw-bolder'>Python</h6>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 text-center">
                    <div className='small-card  m-1 d-flex flex-column justify-content-center ' data-aos="flip-down"
                    >
                        <img src={boot} alt="" width='90%' height='60' />
                        <h6 className='mt-1 fw-bolder'>BootStrap</h6>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 text-center">
                    <div className='small-card  m-1 d-flex flex-column justify-content-center ' data-aos="flip-down"
                    >
                        <img src={tail} alt="" width='90%' height='60' />
                        <h6 className='mt-1 fw-bolder'>Tailwind</h6>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 text-center">
                    <div className='small-card  m-1 d-flex flex-column justify-content-center ' data-aos="flip-down"
                    >
                        <img src={mu} alt="" width='90%' height='60' />
                        <h6 className='mt-1 fw-bolder'>MUI</h6>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 text-center">
                    <div className='small-card  m-1 d-flex flex-column justify-content-center ' data-aos="flip-down"
                    >
                        <img src={fir} alt="" width='90%' height='60' />
                        <h6 className='mt-1 fw-bolder'>Firebase</h6>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 text-center">
                    <div className='small-card  m-1 d-flex flex-column justify-content-center ' data-aos="flip-down"
                    >
                        <img src={net} alt="" width='90%' height='60' />
                        <h6 className='mt-1 fw-bolder'>Netlify</h6>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 text-center">
                    <div className='small-card  m-1 d-flex flex-column justify-content-center ' data-aos="flip-down"
                    >
                        <img src={hero} alt="" width='90%' height='60' />
                        <h6 className='mt-1 fw-bolder'>Heroku</h6>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 text-center">
                    <div className='small-card  m-1 d-flex flex-column justify-content-center ' data-aos="flip-down"
                    >
                        <img src={rea} alt="" width='90%' height='60' />
                        <h6 className='mt-1 fw-bolder'>React</h6>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 text-center">
                    <div className='small-card  m-1 d-flex flex-column justify-content-center ' data-aos="flip-down"
                    >
                        <img src={nod} alt="" width='90%' height='60' />
                        <h6 className='mt-1 fw-bolder'>Node</h6>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 text-center">
                    <div className='small-card  m-1 d-flex flex-column justify-content-center ' data-aos="flip-down"
                    >
                        <img src={mo} alt="" width='90%' height='60' />
                        <h6 className='mt-1 fw-bolder'>MongoDB</h6>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Skills;