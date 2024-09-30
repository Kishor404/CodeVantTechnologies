import './Styles/Members.css'

import Member1 from "../Assets/Images/Members/Member1.jpg"

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
                            <p className="MemberName">John Doe</p>
                            <p>Software Developer</p>
                        </div>
                    </div>
                    <div className="MemberCard">
                        <div className="MemberImg">
                            <img src={Member1} alt="Member1"/>
                        </div>
                        <div className="MemberText">
                            <p className="MemberName">John Doe</p>
                            <p>Software Developer</p>
                        </div>
                    </div>
                    <div className="MemberCard">
                        <div className="MemberImg">
                            <img src={Member1} alt="Member1"/>
                        </div>
                        <div className="MemberText">
                            <p className="MemberName">John Doe</p>
                            <p>Software Developer</p>
                        </div>
                    </div>
                    <div className="MemberCard">
                        <div className="MemberImg">
                            <img src={Member1} alt="Member1"/>
                        </div>
                        <div className="MemberText">
                            <p className="MemberName">John Doe</p>
                            <p>Software Developer</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}

export default Members;