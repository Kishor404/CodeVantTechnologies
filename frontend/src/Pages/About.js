import './Styles/About.css'

import AboutImg from '../Assets/Images/About.jpg'

const About=()=>{
    return(
    <>
        <section id="About">
            <div className="About-Cont">
                <div className="About-L">
                    <div className="About-Img">
                        <img src={AboutImg} alt="About"/>
                    </div>
                </div>
                <div className="About-R">
                    <div>
                        <p className='About-Title'>| About Us</p>
                        <p className='About-p'>
                            At CodeVant Technologies, we are committed to delivering innovative, technology-driven solutions that empower businesses to thrive in the digital age. Our expertise spans IoT, AI, and custom software development, helping organizations streamline processes and achieve their goals.<br/>
                            With a focus on efficiency and growth, we collaborate closely with our clients to design solutions tailored to their unique needs. Our passion for technology and dedication to excellence drive us to continuously innovate and push the boundaries of what’s possible.
                        </p>
                    </div>
                    <a href='#Projects'>View Projects</a>
                </div>
            </div>
        </section>
    </>
    )
}

export default About;
