import './Styles/Projects.css';
import PlantHealth from '../Assets/Images/Projects/Plant-Health.jpg';
import ProjectTemp from '../Assets/Images/Projects/Project-Temp.png';
import HeartDisease from '../Assets/Images/Projects/HeartDisease.png';

import { useEffect, useState } from 'react';

const Projects = () => {
    const [project, setProject] = useState("Project-IOT");

    useEffect(() => {
        document.querySelectorAll(".Project-Ding").forEach(el => el.style.display = "none");
        document.querySelectorAll(`.${project}`).forEach(el => el.style.display = "flex");
    }, [project]); // Add project to the dependency array to run this effect whenever the project changes

    const chgProject = (s) => {
        setProject(s);
    };

    useEffect(()=>{
        if(window.innerWidth<700){
            chgProject("Project-Pop")
        }
    },[window.innerWidth])

    

    return (
        <>
            <section id="Projects">
                <div className="Project-Cont">
                    <p className="Project-Title">| Projects</p>
                    <div className="Project-Display">
                        <div className="Project-Nav">
                            <button onClick={() => chgProject("Project-IOT")}>IOT</button>
                            <button onClick={() => chgProject("Project-ML")}>Machine Learning</button>
                            <button onClick={() => chgProject("Project-DA")}>Data Analysis</button>
                            <button onClick={() => chgProject("Project-APP")}>App Development</button>
                        </div>
                        <div className='ProjectRex'>
                            <div className="Project-Card-Cont">
                                <div className="Project-Card Project-Ding Project-IOT Project-Pop">
                                    <div className='Project-Card-Img'>
                                        <img src={PlantHealth} alt="Plant Health"/>
                                        <p className="Project-Card-Title">Plant Health Monitor</p>
                                    </div>
                                    <div className="Project-Card-Text">
                                        <p>Minim nostrud quis enim in ea ea minim excepteur ullamco id. Minim aliquip fugiat ex cillum reprehenderit id eiusmod ut deserunt eiusmod quis reprehenderit. Pariatur commodo aliqua ad minim proident anim. Est amet magna tempor ipsum non cillum exercitation. Ut velit cupidatat excepteur duis et deserunt.</p>
                                    </div>
                                </div>
                                <div className="Project-Card Project-Ding Project-IOT Project-Pop">
                                    <div className='Project-Card-Img'>
                                        <img src={ProjectTemp} alt="Plant Health"/>
                                        <p className="Project-Card-Title">Thermal Camera</p>
                                    </div>
                                    <div className="Project-Card-Text">
                                        <p>Quis in excepteur culpa mollit veniam labore pariatur qui in. Consequat magna nostrud et qui irure incididunt sit fugiat aliquip do. Voluptate occaecat ut officia non enim pariatur non aliquip exercitation. Consequat eu consequat velit elit velit est ad id pariatur ea elit esse est culpa.</p>
                                    </div>
                                </div>
                                <div className="Project-Card Project-Ding Project-ML Project-Pop">
                                    <div className='Project-Card-Img'>
                                        <img src={HeartDisease} alt="Plant Health"/>
                                        <p className="Project-Card-Title">Heart Disease Prediction</p>
                                    </div>
                                    <div className="Project-Card-Text">
                                        <p>Minim nostrud quis enim in ea ea minim excepteur ullamco id. Minim aliquip fugiat ex cillum reprehenderit id eiusmod ut deserunt eiusmod quis reprehenderit. Pariatur commodo aliqua ad minim proident anim. Est amet magna tempor ipsum non cillum exercitation. Ut velit cupidatat excepteur duis et deserunt.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Projects;
