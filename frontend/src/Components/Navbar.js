import './Components.css';
import Menu from '../Assets/Icons/Hamburger.svg';
import Logo from '../Assets/Icons/Hamburger.svg';
import { useState } from 'react';

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <>  
            <section className='Filler'>

            </section>
            <section id='Navbar'>
                <div className="Navbar-Cont">
                    <div className="Navbar-L">
                        <div>
                            <p>CodeVant Technologies</p>
                        </div>
                    </div>
                    <div className="Navbar-R">
                        <div>
                            <a href="#Home">Home</a>
                            <a href="#About">About</a>
                            <a href="#Services">Services</a>
                            <a href="#Projects">Projects</a>
                            <a href="#Members">Members</a>
                            <a href="#Contact">Contact</a>
                        </div>
                    </div>
                    {/* Responsive part */}
                    <div className={`Navbar-R-Res ${isNavOpen ? 'open' : ''}`}>
                        <div>
                            <a href="#Home">Home</a>
                            <a href="#About">About</a>
                            <a href="#Services">Services</a>
                            <a href="#Projects">Projects</a>
                            <a href="#Members">Members</a>
                            <a href="#Contact">Contact</a>
                        </div>
                        <div className="Navbar-R-Res-Logo">
                            <img src={Logo} alt="Logo" />
                        </div>
                    </div>
                    <a className="Navbar-Icon" onClick={toggleNav}>
                        <img src={Menu} alt="Menu" />
                    </a>
                </div>
            </section>
        </>
    );
};

export default Navbar;
