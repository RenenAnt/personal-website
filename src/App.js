import React, { Component } from 'react';
import './App.css';
import logo from './images/logo.png';
import Link from './components/Link';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <div className="Nav">

        <div className="info-container">
          <img className="logo" src={logo}/>
          <h1 className="name">Roberto Infante</h1>
          <h5 className="title">web developer</h5>
          <hr className="divider"/>
        </div>

        <div className="links-container">
          <Link style={ {marginTop: 20} }  icon={"fas fa-location-arrow"} text={"London, ON, Canada"} link={false}/>
          <Link icon={"fab fa-github"} text={"@Infante"} link={"https://github.com/Infante"}/>
          <Link icon={"fab fa-twitter"} text={"@liluzi"} link={"https://twitter.com/liluzi"}/>
          <Link icon={"fab fa-linkedin-in"} text={"Roberto Infante"} link={"https://www.linkedin.com/in/roberto-infante-bb4b56172/"}/>
        </div>

        <div className="buttons-container">
          <Button text={"Contact"} onclick={function () { window.location.href = 'mailto:contact@robertoinfante.com' }}/>
        </div>

      </div>
    </div>
  );
}

export default App;
