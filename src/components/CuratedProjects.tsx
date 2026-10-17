import React from "react";
import project1 from '../assets/images/project_1.png';
import project2 from '../assets/images/project_2.png';
import project7 from '../assets/images/project_7.jpg';
import project8 from '../assets/images/project_8.jpg';
import '../assets/styles/Project.scss';
import ProjectFeatureCard from "./ProjectFeatureCard";
import "../assets/styles/CuratedProjects.scss"

const PROJECT_1_GIT = "https://github.com/ChiragBellara/Video-Translation-Using-Deep-Learning";
const PROJECT_2_GIT = "https://github.com/ChiragBellara/Bias_Detection_And_Mitigation_In_LLMs";
const PROJECT_7_GIT = "https://github.com/ChiragBellara/AI-SDR-Agent"
const PROJECT_8_GIT = "https://github.com/ChiragBellara/Neo_Risk_Analysis"

const PAPER2 = "https://github.com/ChiragBellara/Bias_Detection_And_Mitigation_In_LLMs/blob/main/Outcomes/Bias_and_Mitigation_in_LLMs.pdf"

function CuratedProjects() {
    return(
    <div className="projects-container" id="projects">
        <div className="curated-projects-header">
            <h1>Curated Projects</h1>
            <a href="/#/projects" className="view-all-btn">
            View All →
            </a>
        </div>
        <hr className="curated-projects-divider" />
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
                blurb="A video translation platform that turns sign language into spoken English using deep learning. I built the backend with TensorFlow + Flask, and handled the full-stack logic using Flask and JavaScript that makes the model accessible through a sleek web interface. Basically: making accessibility a little more... accessible."
                ctaHref={PROJECT_1_GIT}
            />
            <ProjectFeatureCard
                imageSrc={project2}
                imageAlt="Bias Detection & Mitigation in LLMs"
                tags={["Python", "Hugging Face", "LLMs", "LaTeX"]}
                title="Bias Detection & Mitigation in LLMs"
                blurb="This project is my deep dive into the world of LLM fairness. I explored how different prompts, models, and sampling techniques affect bias in model output. I built tools to quantify, compare, and visualize bias, and proposed mitigation strategies that actually made a difference. It’s part code, part research, part nerdy justice mission."
                ctaHref={PROJECT_2_GIT}
                extraField={true}
                extraText="View Paper"
                extraHref={PAPER2}
            />
        </div>
    </div>
    );
}

export default CuratedProjects;