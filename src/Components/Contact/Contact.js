import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import './Contact.css'
import Aos from 'aos';
import 'aos/dist/aos.css'

const Contact = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    const sentEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_n3zoy1q', 'template_yo1t8pb', e.target,
            'user_tK3QT4B5vNMoWQuKoeRHj')
            .then(res => {
                alert("Messsage has been sent...!")
                console.log(res)
            })
            .catch(err => console.log(err))
    }
    return (
        <div id='contact' className='mt-5'>
            <div>
                <h1 className='text-center ' style={{ fontSize: '55px', fontWeight: '900' }}> Contact <span style={{ color: 'blue' }}>Me</span></h1>
            </div>
            <Container className='mt-5'>
                <div className="row">
                    <div className="col-md-6 col-sm-12 col-xs-12 d-flex flex-column justify-content-center my-4" data-aos="fade-up-right">
                        <div className='contact-info' >
                            <h3 className='text-center fw-bolder'>Contact Info</h3>
                            <div className='mt-4'>
                                <h6 className=''><strong>Email: </strong> 17101120@uap-bd.edu</h6>
                                <h6 className=''><strong>Phone </strong>  +8801789553323</h6>
                                <h6 className=''><strong>Address: </strong>  14 no. Sakhari Nagar Lane <br />Gandaria, Dhaka 1204, Bangladesh</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-xs-12 form-style p-4">
                        <h3 className='text-center text-white'>Quick Message</h3>
                        <form data-aos="zoom-in" onSubmit={sentEmail} >
                            <input name='name' className='mb-2 mt-4 ' type='text' placeholder='Your Name' />
                            <input name='email' className='mb-2 ' type='email' placeholder='Your Email' />
                            <input name='subject' className='mb-2 ' type='text' placeholder='Subject' />
                            <textarea name='message' className='mb-2' placeholder='Your Message' rows='5' />
                            <input className='mb-2  contact-button1 ' type='submit' value='Send Message' />
                        </form>

                    </div>

                </div>

            </Container>
        </div>
    );
};

export default Contact;