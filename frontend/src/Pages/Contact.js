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
                                <p>Sunt fugiat ut nostrud mollit pariatur proident minim commodo cillum proident mollit. Non excepteur cupidatat ullamco proident incididunt do ea magna consectetur incididunt velit id. Reprehenderit aliquip dolore aliquip quis anim mollit aliqua esse sunt enim. Amet et enim aliquip magna cupidatat. Exercitation anim excepteur amet reprehenderit ex ea quis officia quis excepteur velit. Non ad voluptate ut esse aute cillum.</p>
                            </div>
                            <div className="Contact-Social">
                                <a className="Contact-Social-Link" href="https://google.com" target="_blank" rel="noopener noreferrer">
                                    <img src={Email} alt="Email"/>
                                    <p>CodeVantTechnologies@gmail.com</p>
                                </a>
                                <a className="Contact-Social-Link" href="https://google.com" target="_blank" rel="noopener noreferrer">
                                    <img src={Whatsapp} alt="Whatsapp"/>
                                    <p>+91 9871236504</p>
                                </a>
                                <a className="Contact-Social-Link" href="https://google.com" target="_blank" rel="noopener noreferrer">
                                    <img src={Insta} alt="Instagram"/>
                                    <p>@CodeVantTechnologies</p>
                                </a>
                                <a className="Contact-Social-Link" href="https://google.com" target="_blank" rel="noopener noreferrer">
                                    <img src={Linkedin} alt="LinkedIn"/>
                                    <p>@CodeVantTechnologies</p>
                                </a>
                            </div>
                        </div>
                        <div className="Contact-R">
                            <p className="Contact-Form-Title">| Contact</p>
                            <div>
                                <form onSubmit={sendEmail}>
                                    <input 
                                        name="name" 
                                        placeholder="Name" 
                                        type="text" 
                                        required 
                                        value={formData.name} 
                                        onChange={handleChange} 
                                    />
                                    <input 
                                        name="email" 
                                        placeholder="Email ID" 
                                        type="email" 
                                        required 
                                        value={formData.email} 
                                        onChange={handleChange} 
                                    />
                                    <textarea 
                                        name="message" 
                                        placeholder="Message" 
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
