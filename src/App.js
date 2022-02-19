import React, { Component } from 'react';
import './App.css';
import { useLastFM } from 'use-last-fm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faDiscord, faGithub, faSpotify } from "@fortawesome/free-brands-svg-icons"

const App = () => {
  const lastFM =  useLastFM('roberto_in7', '1af211e21f18e73f8d9eb3b6d5119c24')
  console.log(lastFM);
  return (
    // Header w/ links      
    <div className="App">

      {/* Name & Current playing song */}

      <h1>Roberto Infante</h1>

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
          <a target='_blank' href="https://twitter.com/liluzi">
            <FontAwesomeIcon style={{marginRight:10}} icon={faTwitter}/>
            liluzi
          </a>
        </div>

        <div>
          <a target='_blank' href="https://open.spotify.com/user/roberto71979?si=4914ef12baaa472f">
          <FontAwesomeIcon style={{marginRight:10}} icon={faSpotify}/>
            roberto71979
          </a>
        </div>

        <div>
          <a target='_blank' href="https://github.com/Infante">
            <FontAwesomeIcon style={{marginRight:10}} icon={faGithub}/>
            Infante
          </a>
        </div>

        <div>
          <a target='_blank' href="https://instagram.com/jpegberto">
            <FontAwesomeIcon style={{fontSize:18.5, marginBottom:-2.5, marginRight:10}} icon={faInstagram}/>
            jpegberto
          </a>
        </div>
      
        <div>
          <a>
            <FontAwesomeIcon style={{fontSize:12.5, marginRight:10}} icon={faDiscord}/>
            roberto#0001
          </a>
        </div>

        
      </div>

    </div>
  );  
}

export default App;
