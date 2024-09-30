import './Styles/Services.css'

import IOTImg from '../Assets/Images/Services/iot.png'
import DAImg from '../Assets/Images/Services/Data-Analysis.png'
import AppImg from '../Assets/Images/Services/App.png'
import WebImg from '../Assets/Images/Services/Web.jpg'


const Services=()=>{
    return(
    <>
        <section id="Services">
            <div className="Services-Cont">
                <p className="Services-Title">| Services</p>
                <div className="Services-Card-All">
                    <div className="Services-Card">
                        <div className='Services-Img'>
                            <img src={IOTImg} alt="IOT Projects"/>
                        </div>
                        <div className="Services-Card-In">
                            <div className="Services-Card-Cont">
                                <p className="Services-Card-Title">IOT Projects</p>
                                <p className="Services-Card-Text">Sunt aliqua cupidatat ipsum eu elit labore minim ipsum do. Ex sunt ad commodo ea est. <br/>Cillum proident velit labore aliqua ut sunt. Eu exercitation aliquip id occaecat duis est minim aliquip eiusmod anim excepteur id.</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="Services-Card">
                        <div className='Services-Img'>
                            <img src={DAImg} alt="Data Analysis Projects"/>
                        </div>
                        <div className="Services-Card-In">
                            <div className="Services-Card-Cont">
                                <p className="Services-Card-Title">Data Analysis Projects</p>
                                <p className="Services-Card-Text">Sunt aliqua cupidatat ipsum eu elit labore minim ipsum do. Ex sunt ad commodo ea est. <br/>Cillum proident velit labore aliqua ut sunt. Eu exercitation aliquip id occaecat duis est minim aliquip eiusmod anim excepteur id.</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="Services-Card">
                        <div className='Services-Img'>
                            <img src={AppImg} alt="App Development"/>
                        </div>
                        <div className="Services-Card-In">
                            <div className="Services-Card-Cont">
                                <p className="Services-Card-Title">App Development</p>
                                <p className="Services-Card-Text">Sunt aliqua cupidatat ipsum eu elit labore minim ipsum do. Ex sunt ad commodo ea est. <br/>Cillum proident velit labore aliqua ut sunt. Eu exercitation aliquip id occaecat duis est minim aliquip eiusmod anim excepteur id.</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="Services-Card">
                        <div className='Services-Img'>
                            <img src={WebImg} alt="Web Development"/>
                        </div>
                        <div className="Services-Card-In">
                            <div className="Services-Card-Cont">
                                <p className="Services-Card-Title">Website Development</p>
                                <p className="Services-Card-Text">Sunt aliqua cupidatat ipsum eu elit labore minim ipsum do. Ex sunt ad commodo ea est. <br/>Cillum proident velit labore aliqua ut sunt. Eu exercitation aliquip id occaecat duis est minim aliquip eiusmod anim excepteur id.</p>
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