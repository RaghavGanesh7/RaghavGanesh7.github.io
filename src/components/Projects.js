import React, { useState } from 'react';
import styles from '../styles/projects.module.css';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/ui/cards";

const projectsData = [
  {
    id: 1,
    name: 'crud_notes',
    description: 'CRUD app with React, FastAPI, MongoDB',
    category: 'web',
    language: 'TypeScript',
    url: 'https://github.com/RaghavGanesh7/crud_notes'
  },
  {
    id: 2,
    name: 'USC-Films',
    description: 'USC films app using Flutter',
    category: 'mobile',
    language: 'Dart',
    url: 'https://github.com/RaghavGanesh7/USC-Films'
  },
  {
    id: 3,
    name: 'Yelpcamp',
    description: 'Yelp Clone',
    category: 'web',
    language: 'JavaScript',
    url: 'https://github.com/RaghavGanesh7/Yelpcamp'
  },
  {
    id: 4,
    name: 'Placements-Information-System',
    description: 'Web based placements information system developed for mini project',
    category: 'web',
    language: 'HTML',
    url: 'https://github.com/RaghavGanesh7/Placements-Information-System'
  },
  {
    id: 5,
    name: 'Papatap-Clone',
    description: 'Application inspired by https://patatap.com/',
    category: 'web',
    language: 'HTML',
    url: 'https://github.com/RaghavGanesh7/Papatap-Clone'
  },
  {
    id: 6,
    name: 'Color-Game',
    description: 'RGB color guessing game.',
    category: 'web',
    language: 'JavaScript',
    url: 'https://github.com/RaghavGanesh7/Color-Game'
  },
];

function Projects() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = projectsData.filter(project => 
    filter === 'all' || project.category === filter
  );

  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.filters}>
        <Button 
          onClick={() => setFilter('all')} 
          variant={filter === 'all' ? 'default' : 'outline'}
          className={styles.filterButton}
        >
          All
        </Button>
        <Button 
          onClick={() => setFilter('web')} 
          variant={filter === 'web' ? 'default' : 'outline'}
          className={styles.filterButton}
        >
          Web
        </Button>
        <Button 
          onClick={() => setFilter('mobile')} 
          variant={filter === 'mobile' ? 'default' : 'outline'}
          className={styles.filterButton}
        >
          Mobile
        </Button>
      </div>
      <div className={styles.grid}>
        {filteredProjects.map(project => (
          <Card key={project.id} className={styles.card}>
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{project.description}</p>
              <p className={styles.language}>Language: {project.language}</p>
            </CardContent>
            <CardFooter>
              <Button variant="link" className={styles.learnMore} asChild>
                <a href={project.url} target="_blank" rel="noopener noreferrer">View on GitHub</a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Projects;