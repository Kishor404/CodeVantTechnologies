import './Components.css'

const Navbar=()=>{
    return(
    <>
        <section>
            <div className="Navbar-Cont">
                <div className="Navbar-L">
                    <div>
                        <p>404 Labs</p>
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
            </div>
        </section>
    </>
    )
}

export default Navbar;