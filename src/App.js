import React, { Component } from 'react';
import './App.css';
import logo from './images/logo.png';
import Link from './components/Link/Link';
import Button from './components/Button/Button';
import Card from './components/Card/Card';
import Project from './components/Project/Project';


const workProjects = require('./data/work.json');
const projects = require('./data/projects.json');


class App extends Component {
  constructor() {
    super();
    this.state = { projects: [], workProjects: [] };
  }

  createWorkCards() {
    let cards = []
    for (var i in workProjects) {
      let project = workProjects[i];
      let logo = require(`./images/${project.logo}`);
      cards.push({ id: project.id, image: logo, name: project.name, background: project.background, jobTitle: project.jobTitle, jobDescription: project.jobDescription, jobDate: project.jobDate, jobLink: project.link });
    }
    this.setState({workProjects: cards});
  }


  createProjects() {
    let projectsArr = []
    for (var i in projects) {
      let project = projects[i];
      projectsArr.push({id: i, name: project.title, description: project.description, link: project.link});
    }
    this.setState({projects: projectsArr});
  }

  componentDidMount() {
    this.createProjects();
    this.createWorkCards();
  }


  render() {
    console.log(this.state);
    return (
      <div className="App">

        <div className="nav">
          <div className="info-container">
            <img className="logo" src={logo} />
            <h2 className="name">Roberto Infante</h2>
            <p className="title">developer</p>
          </div>
          <div className="links-container">
            <Link style={{ marginTop: 20 }} icon="fas fa-location-arrow" text="London, ON, Canada" link="#" />
            <Link icon="fab fa-github" text="@Infante" link="https://github.com/Infante" />
            <Link icon="fab fa-twitter" text="@liluzi" link={"https://twitter.com/liluzi"} />
            <Link icon="fab fa-linkedin-in" text="Roberto Infante" link="https://www.linkedin.com/in/roberto-infante-bb4b56172/" />
          </div>
          <div className="buttons-container">
            <Button text="Contact" onclick={function() { window.location.href = 'mailto:contact@robertoinfante.com' }} />
          </div>
        </div>

        <div className="mobile-nav">
          <div className="info-container">
            <img className="logo" src={logo} />
            <h2 className="name">Roberto Infante</h2>
            <p className="title">developer</p>
          </div>
          <div className="links-container">
            <Link icon="fas fa-location-arrow" text="London, ON, Canada" link="#" />
            <Link icon="fab fa-github" text="@Infante" link="https://github.com/Infante" />
            <Link icon="fab fa-twitter" text="@liluzi" link={"https://twitter.com/liluzi"} />
            <Link icon="fab fa-linkedin-in" text="Roberto Infante" link="https://www.linkedin.com/in/roberto-infante-bb4b56172/" />
            <div className="buttons-container">
              <Button text="Contact" onclick={function() { window.location.href = 'mailto:roberto@collegion.app' }} />
            </div>
          </div>
        </div>

        <div className="section first-section">
          <h2 className="section-title">Work</h2>
          <p className="section-subtitle">Hover over cards for more details.</p>
          <div className="card-container">
            {this.state.workProjects.map(project => (
              <Card style={{ background: project.background }} key={project.id} image={project.image} name={project.name} jobTitle={project.jobTitle} jobDate={project.jobDate} jobDescription={project.jobDescription} jobLink={project.jobLink} />
            ))}
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">Projects</h2>
          <ul className="project-container">
            {this.state.projects.map(project => (
              <Project key={project.id} name={project.name} description={project.description} link={project.link} />
            ))}
          </ul>
        </div>

      </div>
    );
  }

}

export default App;
