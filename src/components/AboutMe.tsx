import React from "react";
import '@fortawesome/free-regular-svg-icons';
import '../assets/styles/AbouteMe.scss';
import JourneyTimeline from './JourneyList';
import OutsideTerminal from "./OutsideTerminal";
import Adage from "./Adage";

const AboutMe = () => {
  return (
    <>
        <section className="aboutme-container" id="aboutme">
          <div className="aboutme-grid">
            <div className="aboutme-text">
              <h1>Hey, I’m Chirag.</h1>
              <p>
                I’m a <strong>software engineer</strong> and <strong>AI tinkerer</strong> with a thing for building systems that feel human.
              </p>
              <p>
                I'm an <strong>SDE 1 at Nium</strong>, working full-stack with a strong overlap into <strong>AI-driven solutions</strong> for the FinTech space.
              </p>
              <p>
                Before that, I wrapped up my <strong>Master's in Computer Science at Purdue</strong>.
                I spend most of my time building at the intersection of <strong>language, psychology, and AI</strong> - teaching machines to talk, reason, and empathize a little better.
              </p>
              <p>
                I spent three years at <strong>Accenture</strong> engineering large-scale systems, leading small teams,
                and learning how to make enterprise software feel less like enterprise software.
              </p>

              <p>
                I like mapping patterns across worlds - the <strong>physics of stars</strong>, the <strong>strategy of F1</strong>, and the <strong>storytelling of anime</strong>. They all feed the same curiosity: why things move the way they do.
              </p>

              <p className="closing-line">
                If you like talking about ideas that bridge people and code, I'd love to chat!
              </p>
            </div>

            <aside className="aboutme-info-wrapper">
              <div className="aboutme-banner">
                <img
                  src="/profile_picture.jpg"
                  alt="Chirag Bellara"
                  loading="lazy"
                />
              </div>

              <div className="aboutme-info">
                <ul>
                  <li>📍 San Francisco, CA</li>
                  <li>✉️ <a href="mailto:chiragbellara7@gmail.com">chiragbellara7@gmail.com</a></li>
                </ul>
                <div className="aboutme-socials">
                  <a href="https://linkedin.com/in/chiragbellara" target="_blank" rel="noreferrer">LinkedIn</a>
                  <a href="https://github.com/chiragbellara" target="_blank" rel="noreferrer">GitHub</a>
                </div>
              </div>
            </aside>
          </div>
        </section>
        <JourneyTimeline />
        <OutsideTerminal />
        <Adage />
      </>
  );
};

export default AboutMe;