import React, { Component } from 'react';
import './App.css';
import { useLastFM } from 'use-last-fm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faDiscord, faGithub, faSpotify } from "@fortawesome/free-brands-svg-icons"

const App = () => {
  const lastFM =  useLastFM('Renen99', 'a319ac65f4744d7f14ebf8b94259cd93')
  console.log(lastFM);
  return (
    // Header w/ links      
    <div className="App">

      {/* Name & Current playing song */}

      <h1>Renen Antonacci</h1>

      {
          lastFM.status === 'playing' ? (
            <div style={{marginTop:0, display:'flex', alignItems:'center'}}>
              <img style={{width: 25, height: 25, marginRight:10}} src={lastFM.song.art}></img>
              <a target="_blank" href={lastFM.song.url} className='song'>{lastFM.song.name}, {lastFM.song.artist}</a>
            </div>
          ) : null 
      }

      {/* Links */}
      <div className='links'> 
        <div>
          <a target='_blank' href="https://twitter.com/veraged">
            <FontAwesomeIcon style={{marginRight:10}} icon={faTwitter}/>
            veraged
          </a>
        </div>

        <div>
          <a target='_blank' href="https://open.spotify.com/user/flamesbaseball?si=0318ad5fe28c45c9">
          <FontAwesomeIcon style={{marginRight:10}} icon={faSpotify}/>
            RenenA
          </a>
        </div>

        <div>
          <a target='_blank' href="https://github.com/Renen99">
            <FontAwesomeIcon style={{marginRight:10}} icon={faGithub}/>
            Renen99
          </a>
        </div>

        <div>
          <a target='_blank' href="https://instagram.com/idkrenen">
            <FontAwesomeIcon style={{fontSize:18.5, marginBottom:-2.5, marginRight:10}} icon={faInstagram}/>
            idkrenen
          </a>
        </div>
      
        <div>
          <a>
            <FontAwesomeIcon style={{fontSize:12.5, marginRight:10}} icon={faDiscord}/>
            Renen#0001
          </a>
        </div>

        
      </div>

    </div>
  );  
}

export default App;
