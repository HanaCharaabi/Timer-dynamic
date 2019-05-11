import React, { Component } from 'react';
import './timer.css'

class Timer extends Component {
    state = {  }
    render() { 
     
        let time=this.props.time;
        let reste=0;
        let h=0;
        let m=0;
        let s=0;
        let addZero = function(v) { return v<10 ? '0' + v : v; };
        // function conversion_seconde_heure(time)
        // {
            //86400 = 3600*24 
            if (time < 86400 )// && time>=3600      si le nombre de secondes ne contient pas de jours mais contient des heures
            {
                h = Math.floor(time/3600);
                 reste = time%3600;
         
                m = Math.floor(reste/60);
         
                s = reste%60;
         
        }
        
        // function start() {
           
        //     time = prompt("Please enter an integer:");
        // }
           





        return ( 
           
        <div className="App">
            <div className="center">
             <div className="timer-num">
                <span id="hour">{addZero(h)}</span>
                <span className="points">:</span>
                <span id="minute">{addZero(m)}</span>
                <span className="points">:</span>
                <span id="second">{addZero(s)}</span>
              </div>
              <div className="timer-HMS">
                <span className='MHS'>Hour</span>
                <span className='MHS'>Minute</span>
                <span className='MHS'>Second</span>
              </div>
              <div className="timer-btns">
              <i className="far fa-play-circle satrt-btn" ></i>
              <i className="fas fa-power-off reset-btn" ></i>
              </div>
            </div>
          </div>
         );
    }
}
 
export default Timer;