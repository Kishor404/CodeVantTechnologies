import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero"
import Members from "./Members";
import Services from './Services';

const Home=()=>{
    return(
    <>
        <section>
            <Hero/>
            <About/>
            <Services/>
            <Members/>
            <Contact/>
        </section>
    </>
    )
}

export default Home;