import React from 'react';
import { Link } from 'react-scroll';
import styles from '../styles/nav.module.css';
function Header() {
    return (
        <aside className={styles.sidebar}>
          <div className={styles.profile}>
            <img src="/path/to/your/image.jpg" alt="Your Name" className={styles.avatar} />
            <h1>Your Name</h1>
            <p>Your Title</p>
          </div>
          <nav className={styles.nav}>
            <ul>
              <li><Link to="about" smooth={true} duration={500} activeClass={styles.active}>About</Link></li>
              <li><Link to="experience" smooth={true} duration={500} activeClass={styles.active}>Experience</Link></li>
              <li><Link to="projects" smooth={true} duration={500} activeClass={styles.active}>Projects</Link></li>
              <li><Link to="achievements" smooth={true} duration={500} activeClass={styles.active}>Achievements</Link></li>
            </ul>
          </nav>
          <div className={styles.social}>
            <a href="https://github.com/raghavganesh7" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/raghavganesh7" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </aside>
      );
}

export default Header;