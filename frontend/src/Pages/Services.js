import './Styles/Services.css'

import IOTImg from '../Assets/Images/Services/iot.png'
import DAImg from '../Assets/Images/Services/Data-Analysis.png'
import AppImg from '../Assets/Images/Services/App.png'
import WebImg from '../Assets/Images/Services/Web.jpg'

const Services = () => {
    return (
        <>
            <section id="Services">
                <div className="Services-Cont">
                    <p className="Services-Title">| Services</p>
                    <div className="Services-Card-All">
                        <div className="Services-Card">
                            <div className='Services-Img'>
                                <img src={IOTImg} alt="IOT Projects" />
                            </div>
                            <div className="Services-Card-In">
                                <div className="Services-Card-Cont">
                                    <p className="Services-Card-Title">IOT Projects</p>
                                    <p className="Services-Card-Text">
                                        We specialize in delivering cutting-edge IoT solutions that seamlessly connect devices, automate processes, and provide real-time data insights. Our IoT systems enhance efficiency and bring innovation to industries such as healthcare, manufacturing, and smart homes.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="Services-Card">
                            <div className='Services-Img'>
                                <img src={DAImg} alt="Data Analysis Projects" />
                            </div>
                            <div className="Services-Card-In">
                                <div className="Services-Card-Cont">
                                    <p className="Services-Card-Title">Data Analysis Projects</p>
                                    <p className="Services-Card-Text">
                                        Our team provides expert data analysis services to help businesses make data-driven decisions. We offer solutions like data mining, predictive analytics, and visualization tools that turn raw data into actionable insights, enhancing business strategy and operational performance.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="Services-Card">
                            <div className='Services-Img'>
                                <img src={AppImg} alt="App Development" />
                            </div>
                            <div className="Services-Card-In">
                                <div className="Services-Card-Cont">
                                    <p className="Services-Card-Title">App Development</p>
                                    <p className="Services-Card-Text">
                                        We design and develop mobile applications tailored to your business needs. Whether you're looking for iOS or Android apps, we deliver user-friendly, scalable, and high-performing apps that improve user engagement and drive business growth.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="Services-Card">
                            <div className='Services-Img'>
                                <img src={WebImg} alt="Web Development" />
                            </div>
                            <div className="Services-Card-In">
                                <div className="Services-Card-Cont">
                                    <p className="Services-Card-Title">Website Development</p>
                                    <p className="Services-Card-Text">
                                        We create responsive, secure, and SEO-optimized websites that enhance your online presence. Our web development services include e-commerce platforms, corporate websites, and custom web solutions that drive traffic, increase conversions, and improve brand visibility.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services;
