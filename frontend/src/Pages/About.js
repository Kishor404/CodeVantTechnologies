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
                        <p className='About-p'>Anim qui sit Lorem ut labore non dolor irure ullamco duis in in. Mollit dolore ad aliquip sit sint quis ut mollit nisi. Voluptate consectetur veniam ipsum exercitation ut nostrud esse quis. Eiusmod laborum aliqua dolore fugiat aliqua esse sit labore mollit. Ut labore est irure laboris est ipsum irure voluptate nulla.<br/> Aute et qui cupidatat laboris exercitation consequat. Enim est et anim do amet et quis sunt deserunt. Est tempor in fugiat Lorem nisi in id. Cupidatat nostrud do eiusmod reprehenderit nulla magna consectetur qui voluptate laboris. Cillum fugiat et deserunt labore occaecat dolore irure sit commodo mollit esse. Minim dolor ea dolor eu adipisicing deserunt do aliqua esse id.</p>
                    </div>
                    <a href='#Projects'>View Projects</a>
                </div>
            </div>
            
        </section>
    </>
    )
}

export default About;