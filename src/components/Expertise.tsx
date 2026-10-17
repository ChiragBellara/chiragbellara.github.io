import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const labelsFirst = [
    "Java", "C#", "TypeScript", "JavaScript", "React", "Spring Boot", "Node.js", "REST APIs", "HTML", "CSS"
];

const labelsSecond = [
"AWS", "GCP", "Docker", "Kubernetes", "Shell Scripting", "SQL Server", "MySQL", "MongoDB", "Redis", "Pinecone Vector DB"
];

const labelsThird = [
    "Python", "PyTorch", "Scikit-learn", "LLM Fine-tuning", "LangChain", "AI Inferencing", "RAG Systems", "LIWC"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact as IconProp} size="3x"/>
                    <h3>Full Stack Engineering</h3>
                    <p>I’ve built scalable web apps, REST APIs, and real-time systems using React, .NET Core, and Spring Boot. From UI components in TypeScript to backend microservices, I enjoy crafting end-to-end systems that are reliable and efficient.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython as IconProp} size="3x"/>
                    <h3>AI, NLP & Data Science</h3>
                    <p>My background in ML includes building LLM-based systems, working with transformers, and conducting research on Digital Twins and psycholinguistic profiling. I’m especially excited about projects that connect human language to intelligent software.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker as IconProp} size="3x"/>
                    <h3>Infrastructure & Deployment</h3>
                    <p>I deploy apps to AWS and GCP, use Docker and Kubernetes for containerization, and automate workflows with CI/CD pipelines. I also work with both SQL and NoSQL databases, and use tools like Redis and Elasticsearch to keep things fast and scalable.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;