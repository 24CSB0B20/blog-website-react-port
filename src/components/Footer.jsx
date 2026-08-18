import './Footer.css'
import githubIcon from '../assets/icons8-github-50.png'
import linkedinIcon from '../assets/icons8-linkedin-24.png'
import instagramIcon from '../assets/icons8-instagram-24.png'

export default function Footer() {
  return (
    <footer>
      <a href="https://github.com/SergeantQuickscoper" aria-label="GitHub profile">
        <img src={githubIcon} alt="GitHub" />
      </a>
      <a href="https://www.linkedin.com/in/don-chacko/" aria-label="LinkedIn profile">
        <img className="footer-inv" src={linkedinIcon} alt="LinkedIn" />
      </a>
      <a href="https://github.com/SergeantQuickscoper" aria-label="Instagram profile">
        <img className="footer-inv" src={instagramIcon} alt="Instagram" />
      </a>
    </footer>
  )
}