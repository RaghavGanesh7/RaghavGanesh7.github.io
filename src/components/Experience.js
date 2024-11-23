import React from 'react';
import { useState } from 'react';
import { experience, education,skills } from '../data/info';

function Experience() {
  const [activeSection, setActiveSection] = useState('experience');

  return (
    <section>
    <div className="flex space-x-8 mb-8 border-b dark:border-gray-700">
      {['experience', 'education', 'skills'].map((section) => (
        <button
          key={section}
          onClick={() => setActiveSection(section)}
          className={`pb-2 capitalize ${activeSection === section
              ? 'border-b-2 border-gray-900 dark:border-gray-100'
              : 'text-gray-500 hover:text-gray-900 dark:hover:text-gray-300'
            }`}
        >
          {section}
        </button>
      ))}
    </div>

    <div className="space-y-8">
      {activeSection === 'experience' && experience.map((job, index) => (
        <div
          key={index}
          className="border-b dark:border-gray-700 pb-8 last:border-0 transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md p-4"
        >
          <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
            {job.role}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            {job.company} · {job.period}
          </p>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            {job.description}
          </p>
          <div className="mt-2 space-x-2">
            {job.tech.map((tech) => (
              <span
                key={tech}
                className="text-sm font-medium text-gray-600 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full inline-block transition-transform transform hover:scale-100"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}

      {activeSection === 'education' && education.map((edu, index) => (
        <div key={index} className="border-b dark:border-gray-700 pb-8 last:border-0">
          <h3 className="text-xl font-medium">{edu.degree}</h3>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            {edu.school} · {edu.year}
          </p>
          <p className="mt-2 text-gray-700 dark:text-gray-300">{edu.details}</p>
        </div>
      ))}

      {activeSection === 'skills' && skills.map((category, index) => (
        <div key={index} className="border-b dark:border-gray-700 pb-8 last:border-0">
          <h3 className="text-lg font-medium mb-2">{category.category}</h3>
          <div className="space-x-2">
            {category.items.map((item) => (
              <span key={item} className="text-gray-700 dark:text-gray-300">
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
  );
}

export default Experience;