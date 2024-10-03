import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Projects from "./Projects";
import Services from './Services';

const Home=()=>{
    return(
    <>
        <section>
            <Hero/>
            <About/>
            <Services/>
            <Projects/>
            <Contact/>
        </section>
    </>
    )
}

export default Home;