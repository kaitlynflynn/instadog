// src/Apps.js
// Imports
import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Post from './components/Post';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <Post />
        </div>
      </div>
    );
  }
}

// export
export default App;
