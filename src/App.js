import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Homepage from './Components/Main/main'
import Calender from './Components/Calendar/Calenders'
function App() {
  return (
    <div className="App">
       <Router>
          <div>
              <Switch>
                  <Route path="/"  exact component={Homepage}/>
                  <Route  path="/calender" exact component={Calender}/>
                  <Route path="*" component={() => "404 NOT FOUND"} />
              </Switch>
              </div>
            </Router>
    </div>
  );
}

export default App;
