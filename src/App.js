import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import route from './route'
import Header from './Components/Header/Header'

class App extends Component {
  render() {
    return (
      <div>
        
          <div className="App">
          <Header />
          </div>

          <div>
            {route}
          </div>

        </div>
    );
  }
}

export default App;
