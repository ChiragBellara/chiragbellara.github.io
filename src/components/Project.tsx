import React from "react";
import project1 from '../assets/images/project_1.png';
import project2 from '../assets/images/project_2.png';
import project3 from '../assets/images/project_3.png';
import project4 from '../assets/images/project_4.png';
import project5 from '../assets/images/project_5.png';
import project6 from '../assets/images/project_6.png';
import project7 from '../assets/images/project_7.jpg';
import project8 from '../assets/images/project_8.jpg';
import '../assets/styles/Project.scss';
import ProjectFeatureCard from "./ProjectFeatureCard";

const PROJECT_1_GIT = "https://github.com/ChiragBellara/Video-Translation-Using-Deep-Learning";
const PROJECT_2_GIT = "https://github.com/ChiragBellara/Bias_Detection_And_Mitigation_In_LLMs";
const PROJECT_3_GIT = "https://github.com/ChiragBellara/Crime_Rate_Analysis_in_Toronto";
const PROJECT_4_GIT = "https://github.com/ChiragBellara/Plastic_Waste_Profiling";
const PROJECT_5_GIT = "https://github.com/ChiragBellara/SQM_Street_Quality_Mapper";
const PROJECT_6_GIT = "https://github.com/ChiragBellara/BrainKey";
const PROJECT_7_GIT = "https://github.com/ChiragBellara/AI-SDR-Agent"
const PROJECT_8_GIT = "https://github.com/ChiragBellara/Neo_Risk_Analysis"


const PAPER2 = "https://github.com/ChiragBellara/Bias_Detection_And_Mitigation_In_LLMs/blob/main/Outcomes/Bias_and_Mitigation_in_LLMs.pdf"
const PAPER5 = "https://ieeexplore.ieee.org/document/9487763"
const PAPER6 = "https://www.ijcrt.org/papers/IJCRT2103649.pdf"

export default function Project() {
    return (
        <section className="projects-container" id="projects" aria-labelledby="projects-heading">
        <header className="projects-header">
            <h1>Projects</h1>
            <p className="projects-intro">
            Started with <span>What If?</span>. Ended with <span>Code</span>.
            </p>
        </header>

        <div className="projects-grid">
            <ProjectFeatureCard
            imageSrc={project7}
            imageAlt="AI-SDR"
            tags={["Python", "LangChain", "LangGraph", "FastAPI", "React"]}
            title="AI Sales Rep"
            blurb="AI-SDR is a multi-agent AI system that automates company research. It crawls websites, extracts relevant signals from unstructured content, and transforms them into structured company personas that sales teams can use to identify and qualify potential customers."
            ctaHref={PROJECT_7_GIT}
            />

            <ProjectFeatureCard
            imageSrc={project8}
            imageAlt="neo-risk-analysis"
            tags={["Python", "FastAPI", "React", "Vite"]}
            title="NEO Risk Analysis"
            blurb="An interactive data platform that analyzes Near-Earth Objects using NASA datasets to assess potential impact risks. It combines data engineering, visualization, and simulation to help explore asteroid trajectories, hazard levels, and orbital patterns around Earth."
            ctaHref={PROJECT_8_GIT}
            />

            <ProjectFeatureCard
            imageSrc={project1}
            imageAlt="ViXlate"
            tags={["Python", "TensorFlow", "Keras", "Flask", "JavaScript"]}
            title="ViXlate"
            blurb="A video translation platform that turns sign language into spoken English using deep learning. I built the backend with TensorFlow + Flask and exposed the model via a lightweight web UI."
            ctaHref={PROJECT_1_GIT}
            />

            <ProjectFeatureCard
            imageSrc={project2}
            imageAlt="Bias Detection & Mitigation in LLMs"
            tags={["Python", "Hugging Face", "LLMs", "LaTeX"]}
            title="Bias Detection & Mitigation in LLMs"
            blurb="Compared prompts, models, and sampling methods to quantify bias; proposed mitigations with measurable improvement. Part code, part research."
            ctaHref={PROJECT_2_GIT}
            extraField={true}
            extraText="View Paper"
            extraHref={PAPER2}
            />

            <ProjectFeatureCard
            imageSrc={project3}
            imageAlt="Crime Rate Analysis in Toronto"
            tags={["Python", "R", "Excel", "Shiny"]}
            title="Crime Rate Analysis in Toronto"
            blurb="Analyzed multi-year public crime data and built a Shiny dashboard for interactive trend exploration."
            ctaHref={PROJECT_3_GIT}
            />

            <ProjectFeatureCard
            imageSrc={project4}
            imageAlt="Plastic Waste Profiling"
            tags={["Python", "TensorFlow", "Keras", "Django", "JavaScript", "OpenCV"]}
            title="Plastic Waste Profiling"
            blurb="Computer vision to detect branded plastic waste in images; ~88% accuracy on crushed/occluded packaging."
            ctaHref={PROJECT_4_GIT}
            />

            <ProjectFeatureCard
            imageSrc={project5}
            imageAlt="Street Quality Mapper"
            tags={["Python", "Raspberry Pi", "Arduino", "C++", "JavaScript"]}
            title="Street Quality Mapper"
            blurb="Pothole detection using accelerometer + GPS; mapped to a web dashboard. Published in IEEE."
            ctaHref={PROJECT_5_GIT}
            extraField={true}
            extraText="View Paper"
            extraHref={PAPER5}
            />

            <ProjectFeatureCard
            imageSrc={project6}
            imageAlt="BrainKey"
            tags={["ElectronJS", "Python", "EEG", "Signal Processing"]}
            title="BrainKey"
            blurb="EEG-driven keyboard (NeuroSky Mindwave). Blink-based typing and alarms for severe mobility impairment."
            ctaHref={PROJECT_6_GIT}
            extraField={true}
            extraText="View Paper"
            extraHref={PAPER6}
            />
        </div>
        </section>
    );
}
