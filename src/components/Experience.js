import React from 'react';
import styles from '../styles/experience.module.css';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/ui/cards";

const experienceData = [
  {
    id: 1,
    title: "Software Engineer",
    company: "NFS Technology",
    date: "March 2024 - Present",
    location: "Pune, India",
    responsibilities: [
      "Spearheaded the development and maintenance of the \"Floorplan\" project",
      "Managed all phases of the project including implementation of new features, testing, deploying, and communicating with stakeholders",
      "Successfully managed project timelines and deliverables, maintaining high standards of quality and efficiency"
    ]
  },
  {
    id: 2,
    title: "Junior Software Engineer",
    company: "NFS Technology",
    date: "September 2022 - March 2024",
    location: "Pune, India",
    responsibilities: [
      "Engineered and maintained robust APIs for the Workspace project, enhancing integration and functionality across platforms",
      "Developed a high-performance utility application using .NET and SQL, which efficiently manages the daily upload and import of over 10,000 records from the database, streamlining data operations and reliability"
    ]
  }
];

function Experience() {
  return (
    <section id="experience" className={styles.experience}>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.timeline}>
        {experienceData.map((job) => (
          <Card key={job.id} className={styles.card}>
            <CardHeader>
              <CardTitle className={styles.jobTitle}>{job.title}</CardTitle>
              <p className={styles.company}>{job.company}</p>
              <p className={styles.date}>{job.date}</p>
              <p className={styles.location}>{job.location}</p>
            </CardHeader>
            <CardContent>
              <ul className={styles.responsibilities}>
                {job.responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Experience;