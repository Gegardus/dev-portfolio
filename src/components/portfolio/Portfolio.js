import React from 'react';
import EventTracker from '../events/EventTracker';
import './portfolio.css';
import ProjectImage1 from '../../assets/rent-car.png';
import ProjectImage2 from '../../assets/math-mag.png';
import ProjectImage3 from '../../assets/conference.png';
import ProjectImage4 from '../../assets/movie.png';
import ProjectImage5 from '../../assets/trend.png';
import ProjectImage6 from '../../assets/payment.png';

const projectData = [
  {
    id: 1,
    image: ProjectImage1,
    title: 'Carsharing',
    description:
      'This is a car rental website that allows users to view a variety of cars and book them.',
    github: 'https://github.com/Gegardus/book-a-car-frontend',
    demo: 'https://rent-car-service.netlify.app/'
  },

  {
    id: 2,
    image: ProjectImage2,
    title: 'Math magicians',
    description:
      '"Math magicians" is a website dedicated to fans of mathematics. It allows users to make simple calculations.',
    github: 'https://github.com/Gegardus/math-magicians',
    demo: 'https://621b7e84632f900007382f4c--inspiring-banach-df4707.netlify.app/'
  },

  {
    id: 3,
    image: ProjectImage3,
    title: 'Conference',
    description: 'The idea of a fictitious conference is borrowed from the film "Don\'t Look Up".',
    github: 'https://github.com/Gegardus/Conference-Page',
    demo: 'https://gegardus.github.io/Conference-Page/'
  },

  {
    id: 4,
    image: ProjectImage4,
    title: 'Pick a movie',
    description:
      'An application based on the external TVmaze API and allows users to pick their favourite movie.',
    github: 'https://github.com/Gegardus/JS-Capstone-Webapp',
    demo: 'https://gegardus.github.io/JS-Capstone-Webapp/'
  },

  {
    id: 5,
    image: ProjectImage5,
    title: 'Stock metrics',
    github: 'https://github.com/Gegardus/stock-metrics',
    description:
      'This app displays a list of popular stock market prices and details of different companies economic activity.',
    demo: 'https://arcane-earth-56373.herokuapp.com/'
  },

  {
    id: 6,
    image: ProjectImage6,
    title: 'Budget manager',
    github: 'https://github.com/Gegardus/budget-manager',
    description:
      'User of this app can manage his/her budget, having a list of transactions associated with a category.',
    demo: 'https://pacific-castle-28636.herokuapp.com/'
  }
];

function Portfolio() {
  const eventTracker = EventTracker('Visit Projects');
  return (
    <section id="portfolio">
      <h5>My Recent work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {projectData.map((project) => (
          <article className="portfolio__item" key={project.id}>
            <div className="portfolio__item-image">
              <img src={project.image} alt="project thumbnail" />
            </div>
            <h3>{project.title}</h3>
            <small>{project.description}</small>
            <div className="cta">
              <a
                href={project.github}
                className="btn"
                target="_blank"
                rel="noreferrer"
                onClick={() => eventTracker('View Source Code')}>
                Source Code
              </a>
              <a
                href={project.demo}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
                onClick={() => eventTracker('View Live Demo')}>
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
