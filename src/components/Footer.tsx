import '../assets/styles/Footer.scss'
import footer_loop from '../assets/images/footer-loop.mp4';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-hero">
        <div className="footer-left">
          <h2 className="footer-headline">Every idea is a story waiting to be built.</h2>
          <p className="footer-subtext">Tell me yours and we’ll build it together.</p>

          <div className="footer-cta">
            <a className="btn-cta"  href="mailto:chiragbellara7@gmail.com">
              Let's Talk
            </a>
          </div>
          <div className='socials'>
            <a
              href="https://github.com/chiragbellara"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <GitHubIcon/>
            </a>
            <a
              href="https://linkedin.com/in/chiragbellara"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon/>
            </a>
          </div>
        </div>
        <div className="footer-right" aria-hidden="true">
          <video
            className="footer-gif"
            src={footer_loop}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          />
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        <span className="footer-credit-left">
          Chirag Bellara ©{new Date().getFullYear()}
        </span>
        <span className="footer-credit-right">
          Developed By <a href="https://www.linkedin.com/in/chiragbellara/" target="_blank" rel="noreferrer">Chirag Bellara</a>
        </span>
      </div>
    </footer>
  );
}
