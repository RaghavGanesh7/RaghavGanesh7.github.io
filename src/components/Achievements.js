import React from 'react';
//import { achievements } from '../data/achievements';
import styles from '../styles/achievements.module.css';

const achievements = []; 

function Achievements() {
  return (
    <section id="achievements" className={styles.achievements}>
      <h2>Achievements</h2>
      <div className={styles.grid}>
        {achievements.map((achievement, index) => (
          <div key={index} className={styles.card}>
            <h3>{achievement.title}</h3>
            <p>{achievement.description}</p>
            {achievement.link && (
              <a href={achievement.link} target="_blank" rel="noopener noreferrer" className={styles.button}>Learn More</a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;