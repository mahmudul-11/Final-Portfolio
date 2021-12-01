import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router';

import './productDetails.css'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { Container } from 'react-bootstrap';

const ProjectDetails = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    const { id } = useParams();
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('/projectInfo.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [id])
    const project = projects.filter(p => p.id === parseInt(id));
    console.log(project)

    return (
        <div className='mt-5'>
            <h1 className='text-center fw-bolder'>Project Name : <span style={{ color: 'blue' }}> {project[0]?.n}</span> </h1>
            <div className='row mt-5' id='detail'>
                <div className='col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center flex-column ' data-aos="fade-up">
                    <div >
                        <img src={project[0]?.img1} width='100%' style={{ borderRadius: '25px', border: '10px solid #F79B42' }} />
                    </div>

                </div>
                <div className='col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center flex-column' data-aos="fade-up">
                    <div >
                        <img src={project[0]?.img2} width='100%' style={{ borderRadius: '25px', border: '10px solid #FE4268' }} />
                    </div>

                </div>
                <div className='col-sm-12 col-md-3 col-lg-3 d-flex justify-content-center flex-column ' >
                    <div >

                    </div>

                </div>
                <div className='col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center flex-column mt-3' data-aos="zoom-in" >
                    <div >
                        <img src={project[0]?.img3} width='100%' style={{ borderRadius: '25px', border: '10px solid #5E5CFC' }} id='special' />
                    </div>

                </div>


            </div>
            <Container className='row mt-2 mx-4' >

                <div className="col-md-12 col-sm-12 col-xs-12  d-flex justify-content-center flex-column p-4 mt-5" style={{ backgroundColor: '#F9B040', borderRadius: '25px', fontWeight: 800 }} data-aos="fade-up">
                    <h3 className='text-center fw-bolder'>Short Overview</h3>
                    <p style={{ fontSize: '20px', fontWeight: 600, textAlign: 'center' }}>{project[0]?.description}</p>
                </div>

            </Container>

            <Container className='row mt-5'>
                <div className='col-sm-12 col-lg-6'>
                    <div className="p-3" style={{ backgroundColor: '#5E5CFC', color: 'white', borderRadius: '25px' }}>
                        <h3 className="text-center fw-bolder">Project Objectives</h3>
                        <ul className='pt-2'>
                            <li><p>{project[0]?.b1}</p></li>
                            <li><p>{project[0]?.b2}</p></li>
                            <li><p>{project[0]?.b3}</p></li>
                            <li><p>{project[0]?.b4}</p></li>
                            <li><p>{project[0]?.b5}</p></li>

                        </ul>
                    </div>
                </div>
                <div className='col-sm-12 col-lg-6'>
                    <div className="p-3" style={{ backgroundColor: '#FE4268', color: 'white', borderRadius: '25px' }}>
                        <h3 className="text-center fw-bolder">Project Related Links</h3>
                        <div>
                            <a className='btn btn-success m-3 rounded' href={project[0]?.live}>Live Site Link</a>
                            <a className='btn btn-success  m-3 rounded' href={project[0]?.client}>Front-End Code Link</a>
                            {
                                project[0]?.server && <a className='btn btn-success  m-3 rounded' href={project[0]?.server}>Back-End Code Link</a>
                            }

                        </div>

                    </div>
                </div>

            </Container>

        </div>
    );
};

export default ProjectDetails;