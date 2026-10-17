import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="/profile_picture.jpg" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="mailto:chiragbellara7@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
            <a href="https://www.linkedin.com/in/chiragbellara/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://github.com/chiragbellara" target="_blank" rel="noreferrer"><GitHubIcon/></a>
          </div>
          <h1>Chirag Bellara</h1>
          <p>Full Stack Developer + AI Engineer</p>

          <div className="mobile_social_icons">
            <a href="mailto:chiragbellara7@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
            <a href="https://www.linkedin.com/in/chiragbellara/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://github.com/chiragbellara" target="_blank" rel="noreferrer"><GitHubIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;