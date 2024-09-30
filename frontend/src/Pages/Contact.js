import './Styles/Contact.css'

const Contact=()=>{
    return(
    <>
        <section id="Contact">
            <div>
                <div>
                    <div>

                    </div>
                    <p>Instagram</p>
                    <p>LinkedIn</p>
                    <p>X</p>
                </div>
                <div>
                    <div>
                        <form>
                            <input placeholder="Email ID" type='email' required='true'/>
                            <input placeholder="Message" type='text'required='true'/>
                            <button type="Sumbit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}

export default Contact;