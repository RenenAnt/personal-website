import React, { Component } from 'react';
import './App.css';
import logo from './images/logo.png';
import Link from './components/Link';
import Button from './components/Button';
import Card from './components/Card';
import MusicCard from './components/MusicCard';
const LastFm = require("lastfm-node-client");
const lastFm = new LastFm("", "SECRET", "");
const workProjects = require('./data/work.json');

class App extends Component {
  constructor() {
      super();
      this.state = { tracks: [], projects: [], workProjects: []};
  }

  createWorkCards () {
    let cards = []
    for (var i in workProjects) {
      let project = workProjects[i];
      let logo = require(`./images/${project.logo}`);
      cards.push({image: logo, name: project.name, background: project.background});
    }
    this.setState({workProjects: cards});
  }



  async createMusicCards () {
    lastFm.userGetRecentTracks({
      user: "roberto_in7"
    }).then(data => {
      let tracks = [];
      for (var i in data.recenttracks.track) {
        let track = data.recenttracks.track[i];
        if (tracks.length == 5) {
          break;
        }
        tracks.push({image: track.image[2]["#text"], link: track.url});
      }
      this.setState({ tracks: tracks });
    });
  }

  componentDidMount () {
    this.createWorkCards();
    this.createMusicCards();
  }



  render() {
    return (
      <div className="App">
        <div className="Nav">

          <div className="info-container">
            <img className="logo" src={logo}/>
            <h1 className="name">Roberto Infante</h1>
            <h5 className="title">developer</h5>
            <hr className="divider"/>
          </div>

          <div className="links-container">
            <Link style={ {marginTop: 20} }  icon={"fas fa-location-arrow"} text={"London, ON, Canada"} link={"#"}/>
            <Link icon={"fab fa-github"} text={"@Infante"} link={"https://github.com/Infante"}/>
            <Link icon={"fab fa-twitter"} text={"@liluzi"} link={"https://twitter.com/liluzi"}/>
            <Link icon={"fab fa-linkedin-in"} text={"Roberto Infante"} link={"https://www.linkedin.com/in/roberto-infante-bb4b56172/"}/>
          </div>

          <div className="buttons-container">
            <Button text={"Contact"} onclick={function () { window.location.href = 'mailto:contact@robertoinfante.com' }}/>
          </div>

        </div>

        <div className="Section">
          <h1 className="section-title">Work Experience</h1>
          <div className="card-container">
            {this.state.workProjects.map(project => (
              <Card style={{background: project.background}} image={project.image} name={project.name}/>
            ))}
          </div>
        </div>


        <div className="Section">
          <h1 className="section-title">What im listening to</h1>
          {this.state.tracks.map(track => (
            <MusicCard image={track.image} link={track.link}/>
          ))}
        </div>

      </div>
    );
  }

}

export default App;
