import './Styles/Members.css'

import Member1 from "../Assets/Images/Members/Member1.jpg"
import Member2 from "../Assets/Images/Members/Member2.jpg"
import Member3 from "../Assets/Images/Members/Member3.jpg"
import Member4 from "../Assets/Images/Members/Member4.jpg"


const Members=()=>{
    return(
    <>
        <section id="Members">
            <div className="Member-Cont">
                <p className="MemberTitle">| Members</p>
                <div className="MemberAll">
                    <div className="MemberCard">
                        <div className="MemberImg">
                            <img src={Member1} alt="Member1"/>
                        </div>
                        <div className="MemberText">
                            <p className="MemberName">Mike Tyson</p>
                            <p>Software Developer</p>
                        </div>
                    </div>
                    <div className="MemberCard">
                        <div className="MemberImg">
                            <img src={Member2} alt="Member1"/>
                        </div>
                        <div className="MemberText">
                            <p className="MemberName">RodTang</p>
                            <p>Data Analystic</p>
                        </div>
                    </div>
                    <div className="MemberCard">
                        <div className="MemberImg">
                            <img src={Member3} alt="Member1"/>
                        </div>
                        <div className="MemberText">
                            <p className="MemberName">Ariana Grande</p>
                            <p>Mobile App Developer</p>
                        </div>
                    </div>
                    <div className="MemberCard">
                        <div className="MemberImg">
                            <img src={Member4} alt="Member1"/>
                        </div>
                        <div className="MemberText">
                            <p className="MemberName">Kiyotaka Ayanakoji</p>
                            <p>IOT Developer</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}

export default Members;