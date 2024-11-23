import { 
    Github, 
    Rss, 
    Linkedin, 
    MessageCircle,
    ChevronRight
  } from 'lucide-react'
  

export const projects = [
    { year: '2024', name: 'Korbyt', tech: 'Swift', description: 'Music tracking and analytics platform' },
    { year: '2022', name: 'Docrb', tech: 'Ruby', description: 'Documentation generator for Ruby projects' },
    { year: '2021', name: 'go-giter8', tech: 'Go', description: 'Template project generator' },
    { year: '2021', name: 'Docuowl', tech: 'Go', description: 'Knowledge base platform' },
    { year: '2021', name: 'oxio', tech: 'Rust', description: 'High-performance I/O library' }
  ];

export const experience = [
    {
      role: 'Developer',
      company: 'Korbyt',
      period: '2024 - Present',
      description: 'Leading and developing subprojects - Floorplan and Employee Portal',
      tech: ['ReactJS', 'Azure', 'C#']
    },
    {
      role: 'Software Engineer',
      company: 'NFS Technology',
      period: '2022-2024',
      description: 'Implemented backend solutions, developed Floorplan project',
      tech: ['ReactJS', 'C#', 'MVC']
    }
  ];

export const education = [
    {
      degree: 'Bachelor of Technology',
      school: 'CVR College of Engineering',
      year: '2016-2020',
      details: 'Web Development, LINUX, Data Structure and Algorithms'
    }
  ];

export const skills = [
    { category: 'Languages', items: ['C#', 'JavaScript', 'TypeScript', 'Dart', 'Java', 'Python'] },
    { category: 'Technologies', items: ['ReactJS', 'NextJS', '.NET', 'Flutter'] },
    { category: 'Tools', items: ['Git', 'VS Code', 'Azure', 'Android Studio'] }
  ];


export const socialLinks = [
    { name: 'raghavganesh7@gmail.com', icon: <MessageCircle size={16} />, href: 'mailto:raghavganesh7@gmail.com' },
    { name: 'GitHub', icon: <Github size={16} />, href: 'https://github.com/RaghavGanesh7' },
    { name: 'LinkedIn', icon: <Linkedin size={16} />, href: 'https://www.linkedin.com/in/raghavganesh7/' },
  ];