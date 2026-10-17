import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career & Education History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="September 2025 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">One Community Global</h4>
            <h4 className="vertical-timeline-element-subtitle">San Gabriel, CA</h4>
            <p>
              Shipped React and Node.js web applications used by 2K+ monthly users; prototyped new dashboards improving user retention by 12%.<br></br>Designed and released community dashboards 0→1 with full ownership from architecture to production deployment.<br></br>Integrated monitoring and automated testing pipelines to ensure reliability during fast iteration cycles.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="August 2023 - May 2025"
            iconStyle={{ background: '#009688', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Masters of Science in Computer Science</h3>
            <h4 className="vertical-timeline-element-subtitle">Purdue University</h4>
            <h4 className="vertical-timeline-element-subtitle">Fort Wayne, IN</h4>
            <p>
              <b>Notable Coursework:</b> Natural Language Processing, Deep Learning, Operating Systems, Data Analytics in Business, Software Engineering, Software Project Management
            </p>
            <p>
              <b>Thesis:</b> Studying The Linguistic and Psychological Markers in the Speech of Serial Killers.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2024 - August 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Scientist</h3>
            <h4 className="vertical-timeline-element-subtitle">Laboratory of Data Science, Purdue University</h4>
            <h4 className="vertical-timeline-element-subtitle">Fort Wayne, IN</h4>
            <p>
              Worked on a Digital Twins research project, designing virtual models that mirrored real-world systems for analysis and simulation.<br></br>
              Explored how to integrate AI models into digital twin architectures — especially for predicting system states and anomalies.<br></br>
              Presented findings through dashboards and internal talks, focusing on making the concept of digital twins actually understandable to non-engineers.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="September 2022 - July 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Senior Full Stack Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Accenture Solutions</h4>
            <h4 className="vertical-timeline-element-subtitle">Mumbai, MH, India</h4>
            <p>
              Led the development of enterprise-level applications using Angular and .NET, enhancing maintainability and reducing legacy code dependencies by 30%.<br></br>
              Streamlined client workflows through Excel macro automation, reducing manual reporting time by 25%.<br></br>
              Implemented agile best practices and led sprint planning sessions, improving team velocity and delivery confidence.<br></br>
              Became the unofficial mentor for junior devs - reviewed code, answered questions, and helped them level up.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="January 2021 - August 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Accenture Solutions</h4>
            <h4 className="vertical-timeline-element-subtitle">Mumbai, MH, India</h4>
            <p>
              Developed scalable internal tools using React, HTML/CSS, and .NET APIs for real-time data operations.<br></br>
              Evaluated and introduced Low-Code/No-Code tools (Mendix), resulting in a 30% reduction in development time for rapid prototypes.<br></br>
              Automated deployment workflows with GitHub Actions and Docker, reducing release overhead.<br></br>
              Collaborated cross-functionally with QA and Business Analysts to ensure UAT readiness and CI/CD integration.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June 2016 - August 2020"
            iconStyle={{ background: '#009688', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Bachelors of Engineering in Information Technology</h3>
            <h4 className="vertical-timeline-element-subtitle">University of Mumbai</h4>
            <h4 className="vertical-timeline-element-subtitle">Mumbai, MH, India</h4>
            <p>
               <b>Notable Coursework:</b> Object Oriented Programming, JAVA, C, Python Programming, Database Management, Data Structures & Algorithms, Web Development, Software Quality & Reliability, Computer Science Fundamentals, Cloud Computing
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;