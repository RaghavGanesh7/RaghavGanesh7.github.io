import React from 'react';
import styles from '../styles/about.module.css';
import profile from '../imgs/me.jpg';

function AboutMe() {
    return (
      <section className={styles.aboutMe}>
        <div className={styles.profileContainer}>
          <img src={profile} alt="Raghav Ganesh" className={styles.profileImage} />
          <h1 className={styles.name}>Raghav Ganesh</h1>
          <p className={styles.title}>Software Engineer | Backend</p>
          <p className={styles.company}>NFS Technology</p>
          
        </div>
        <div className={styles.infoContainer}>
          <h2 className={styles.sectionTitle}>About Me</h2>
          <p className={styles.description}>
            I'm a software engineer from Pune, India. Currently working as a Software Engineer at NFS Technology. Here are a few things about me:
          </p>
          <ul className={styles.bulletPoints}>
            <li>Experience with .NET and SQL for backend development.</li>
            <li>Developed and maintained the "Floorplan" project.</li>
            <li>Engineered robust APIs for the Workspace project.</li>
            <li>Love to explore new tech and manage project timelines efficiently.</li>
          </ul>
          <h2 className={styles.sectionTitle}>Education</h2>
          <div className={styles.education}>
            <div className={styles.degree}>
              <h3>B.Tech - Computer Engineering, 2022</h3>
              <p>Your University Name • CGPA: Your CGPA/10</p>
            </div>
            <div className={styles.degree}>
              <h3>Secondary School, 2018</h3>
              <p>Your School Name • XII: Your %  • X: Your CGPA/10</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

export default AboutMe;