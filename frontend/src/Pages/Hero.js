import './Styles/Hero.css'
import HeroImg from '../Assets/Images/Hero.jpg'

const Hero = () => {
    return (
        <>
            <section id="Home">
                <div className='Hero-Cont'>
                    {/* Left Section: Introduction */}
                    <div className='Hero-L'>
                        <p>Delivering <span>Innovative Solutions</span> for a <span>Connected Future</span>. We specialize in IoT, AI, and digital technologies to boost business efficiency.</p>
                    </div>

                    {/* Right Section: Image */}
                    <div className='Hero-R'>
                        <div className='Hero-Img'>
                            <img src={HeroImg} alt="Hero" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Custom Shape Divider for Design */}
            <div className="custom-shape-divider-bottom-1727621965">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
        </>
    );
}

export default Hero;
