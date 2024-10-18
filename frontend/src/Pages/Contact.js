import React, { useState } from 'react';
import './Styles/Contact.css';

import Insta from "../Assets/Icons/Instagram.svg";
import Email from "../Assets/Icons/Email.svg";
import Whatsapp from "../Assets/Icons/Whatsapp.svg";
import Linkedin from "../Assets/Icons/Linkedin.svg";
import emailjs from 'emailjs-com';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [loading, setLoading] = useState(false); // Add loading state

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true); // Set loading to true when sending

        emailjs.send(
            'service_h8nclye', // Replace with your EmailJS service ID
            'template_ohbttgi', // Replace with your EmailJS template ID
            formData,
            '4BCK1wZD-mhrfWHwh' // Replace with your EmailJS Public Key
        )
        .then((result) => {
            console.log('Email successfully sent!', result.text);
            alert('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' }); // Reset form
        })
        .catch((error) => {
            console.error('Error sending email:', error);
            alert('Error sending message. Please try again later.');
        })
        .finally(() => {
            setLoading(false); // Reset loading state
        });
    };

    return (
        <>
            <section id="Contact">
                <div className="Contact-Cont">
                    <div className="Contact-Main">
                        <div className="Contact-L">
                            <div className="Contact-Head">
                                <p>| CodeVant Technologies</p>
                            </div>
                            <div className="Contact-Body">
                                <p>At CodeVant Technologies, we specialize in cutting-edge solutions across IoT, machine learning, and web & app development. Our team is dedicated to providing high-quality, scalable, and innovative products that meet the evolving needs of the tech industry. From concept to completion, we bring your ideas to life.</p>
                            </div>
                            <div className="Contact-Social">
                                <a className="Contact-Social-Link" href="mailto:CodeVantTechnologies@gmail.com" target="_blank" rel="noopener noreferrer">
                                    <img src={Email} alt="Email"/>
                                    <p>CodeVantTechnologies@gmail.com</p>
                                </a>
                                <a className="Contact-Social-Link" href="https://wa.me/919871236504" target="_blank" rel="noopener noreferrer">
                                    <img src={Whatsapp} alt="Whatsapp"/>
                                    <p>+91 9871236504</p>
                                </a>
                                <a className="Contact-Social-Link" href="https://instagram.com/CodeVantTechnologies" target="_blank" rel="noopener noreferrer">
                                    <img src={Insta} alt="Instagram"/>
                                    <p>@CodeVantTechnologies</p>
                                </a>
                                <a className="Contact-Social-Link" href="https://linkedin.com/company/CodeVantTechnologies" target="_blank" rel="noopener noreferrer">
                                    <img src={Linkedin} alt="LinkedIn"/>
                                    <p>@CodeVantTechnologies</p>
                                </a>
                            </div>

                        </div>
                        <div className="Contact-R">
                            <p className="Contact-Form-Title">| Get in Touch</p>
                            <div>
                                <form onSubmit={sendEmail}>
                                    <input 
                                        id="name"
                                        name="name" 
                                        placeholder="Enter your full name" 
                                        type="text" 
                                        required 
                                        value={formData.name} 
                                        onChange={handleChange} 
                                    />
                                    <input 
                                        id="email"
                                        name="email" 
                                        placeholder="Enter your email address" 
                                        type="email" 
                                        required 
                                        value={formData.email} 
                                        onChange={handleChange} 
                                    />
                                    <textarea 
                                        id="message"
                                        name="message" 
                                        placeholder="Write your message here" 
                                        className="Contact-M" 
                                        required 
                                        value={formData.message} 
                                        onChange={handleChange}
                                    ></textarea>
                                    <button type="submit" disabled={loading}>
                                        {loading && <span className="loading-spinner"></span>} {/* Loading spinner */}
                                        {loading ? ' Sending...' : 'Submit'}
                                    </button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
