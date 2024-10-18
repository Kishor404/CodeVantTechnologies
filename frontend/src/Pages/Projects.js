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
    }, [project]);

    const chgProject = (s) => {
        setProject(s);
    };

    useEffect(() => {
        if (window.innerWidth < 700) {
            chgProject("Project-Pop");
        }
    }, [window.innerWidth]);

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
                                        <img src={PlantHealth} alt="Plant Health" />
                                        <p className="Project-Card-Title">Plant Health Monitor</p>
                                    </div>
                                    <div className="Project-Card-Text">
                                        <p>
                                            This project focuses on using IoT sensors to monitor the health of plants by collecting data such as soil moisture, temperature, and humidity. The system provides real-time feedback and suggestions for optimal plant care, enabling smart gardening solutions for both individuals and agriculture.
                                        </p>
                                    </div>
                                </div>

                                <div className="Project-Card Project-Ding Project-IOT Project-Pop">
                                    <div className='Project-Card-Img'>
                                        <img src={ProjectTemp} alt="Thermal Camera" />
                                        <p className="Project-Card-Title">Thermal Camera</p>
                                    </div>
                                    <div className="Project-Card-Text">
                                        <p>
                                            The Thermal Camera project involves creating a system that uses thermal imaging to detect temperature variations in real-time. This is particularly useful for applications such as security, fire prevention, or medical screening. The IoT-based system ensures remote monitoring and data logging for analysis.
                                        </p>
                                    </div>
                                </div>

                                <div className="Project-Card Project-Ding Project-ML Project-Pop">
                                    <div className='Project-Card-Img'>
                                        <img src={HeartDisease} alt="Heart Disease Prediction" />
                                        <p className="Project-Card-Title">Heart Disease Prediction</p>
                                    </div>
                                    <div className="Project-Card-Text">
                                        <p>
                                            This machine learning project predicts the likelihood of heart disease by analyzing medical data such as blood pressure, cholesterol levels, and other health metrics. By using classification algorithms, this system helps in identifying high-risk patients early, enabling preventative healthcare measures.
                                        </p>
                                    </div>
                                </div>

                                <div className="Project-Card Project-Ding Project-DA Project-Pop">
                                    <div className='Project-Card-Img'>
                                        <img src={ProjectTemp} alt="Data Analysis Project" />
                                        <p className="Project-Card-Title">Retail Sales Data Analysis</p>
                                    </div>
                                    <div className="Project-Card-Text">
                                        <p>
                                            This data analysis project analyzes retail sales data to uncover patterns in consumer behavior, product performance, and seasonal trends. Through visualization and predictive models, the project helps businesses make informed decisions, improve inventory management, and enhance customer satisfaction.
                                        </p>
                                    </div>
                                </div>

                                <div className="Project-Card Project-Ding Project-APP Project-Pop">
                                    <div className='Project-Card-Img'>
                                        <img src={ProjectTemp} alt="App Development Project" />
                                        <p className="Project-Card-Title">Fitness Tracker App</p>
                                    </div>
                                    <div className="Project-Card-Text">
                                        <p>
                                            The Fitness Tracker app is designed to monitor and track users' physical activities, sleep patterns, and nutrition. It provides real-time feedback, workout recommendations, and progress tracking through a user-friendly interface, aiming to improve users' overall fitness and well-being.
                                        </p>
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
