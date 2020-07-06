import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <div className="full">
      <div className="logo"><img src="https://images.squarespace-cdn.com/content/5b2bda42cc8fed2d1f0118d2/1529613311473-3XH6F88AOIA45ADX956W/Spark_Logo.png?content-type=image%2Fpng" alt="logo" width="90px" height="70px"/></div>
       </div>
       <div className="container_design">
            <div> Meeting</div>
            <div> Event Date : 24 Feb 2020</div>
             <div> Event Starting Time :  10.30AM</div>
             <div> Event Ending Time :  11.30Am</div>
        </div>
        <div >
        <a
          className="App-link"
          href="http://localhost:3002"
          target="_blank"
          rel="noopener noreferrer"
        >
        My Calender
        </a>
         
          </div>
    </div>
  );
}

export default App;
