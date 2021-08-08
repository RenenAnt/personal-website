import React, { Component } from 'react';
import './App.css';
import Track from "./components/Track";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="line">
            <h1>ROBERTO INFANTE <span>SOFTWARE DEVELOPER</span></h1>
          </div>  

           <div className="line">
            <h1>ROBERTO INFANTE <span>SOFTWARE DEVELOPER</span></h1>
          </div>   

           <div className="line">
            <h1>ROBERTO INFANTE <span>SOFTWARE DEVELOPER</span></h1>
          </div>   

           <div className="line">
            <h1>ROBERTO INFANTE <span>SOFTWARE DEVELOPER</span></h1>
          </div>   

           <div className="line">
            <h1>ROBERTO INFANTE <span>SOFTWARE DEVELOPER</span></h1>
          </div>   

           <div className="line">
            <h1>ROBERTO INFANTE <span>SOFTWARE DEVELOPER</span></h1>
          </div>      
          

          <div style={{marginTop: 120}} className="line">
            <h1>ROBERTO INFANTE <span>SOFTWARE DEVELOPER</span></h1>
          </div>   



          <div>

          <div style={{marginTop:-15}} className="small-line">
            <a href="https://ternarydev.com" target="_blank">TERNARY DEVELOPMENTS / FOUNDER</a>

            <a href="https:/github.com/Infante" target="_blank">GITHUB</a>

          </div>  

          <div className="small-line">
            <a href="https://heed.chat" target="_blank">HEED / CTO</a>

            <a href="https://www.linkedin.com/in/roberto-infante-bb4b56172/" target="_blank">LINKEDIN</a>

          </div>  

          <div className="small-line">
            <a href="https://collegion.app" target="_blank">COLLEGION / FOUNDER</a>

            <a href="mailto:r.infante0407@gmail.com">EMAIL</a>

          </div>  

          <div className="small-line">
            <a href="https://resellanalytics.io" target="_blank">RESELLANALYTICS / PROJECT</a>
            <a href="https://twitter.com/liluzi" target="_blank">TWITTER</a>
          </div>  


          <div className="small-line">
            <a href="https://www.swiped.io" target="_blank">SWIPEDIO / PROJECT</a>
          </div>  

          <div className="small-line">
            <a href="https://botbuddy.xyz" target="_blank">BOTBUDDYAIO / PROJECT</a>
          </div>  


          </div>

          <Track></Track>

  
      
        
        </div>
        
      </div>
    );
  }

}

export default App;
