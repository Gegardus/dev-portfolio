import React from 'react';
import { FaAward, FaFolderOpen } from 'react-icons/fa';
import './about.css';
import myProfile1 from '../../assets/ruby.jpg';
import myProfile2 from '../../assets/react.png';
import myProfile3 from '../../assets/ror.jpg';

const About = () => (
  <section id="about">
    <h5>Get to know</h5>
    <h2>About Me</h2>
    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={myProfile1} alt="my profile" />
          <img src={myProfile2} alt="my profile" />
          <img src={myProfile3} alt="my profile" />
        </div>
      </div>
      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <FaAward className="about__icon" />
            <h5>Experience</h5>
            <small> up 1 year</small>
          </article>

          <article className="about__card">
            <FaFolderOpen className="about__icon" />
            <h5>Projects</h5>
            <small>21+ Completed projects</small>
          </article>
        </div>

        <p>
          My way in software development started in November 2021 when I got into Microverse,
          an online software development school based in California, USA.In the process
          of learning, I created projects in HTML/CSS/JS. Microverse equiped me with
          international-standard software development skills, remote working, and a
          cross-cultural environment. I&apos;ve been fully immersed in remote development,
          building everything from landing pages to Rails APIs.
        </p>        

        <a href="#contact" className="btn btn-primary">
          Contact me
        </a>
      </div>
    </div>
  </section>
);

export default About;
