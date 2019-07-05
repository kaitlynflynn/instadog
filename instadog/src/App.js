// src/App.js
// Imports
import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Post from './components/Post';

class App extends Component {
  render() {
    return <div className = 'App'>
      <Header />
      <section className = 'App-main'>
        <Post nickname = 'Clementine Pug' 
         avatar = 'https://www.facebook.com/search/async/profile_picture/?fbid=100027794379670&width=72&height=72' caption = 'My brother and me!' 
         image = 'https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/59008893_10157206196141948_1760933219810672640_n.jpg?_nc_cat=111&_nc_oc=AQmeR2oM2xKnUHTVmPX0G2tTWyrBOMmQXMF57ueVeVwy7a0vTGo__nzoeRwgkpWauPA&_nc_ht=scontent-sea1-1.xx&oh=c1c3796a57f427d17405494b80f41863&oe=5DAB7BFD' />
        
        <Post nickname = 'Clementine Pug' 
        avatar = 'https://www.facebook.com/search/async/profile_picture/?fbid=100027794379670&width=72&height=72' caption = 'BEEP BEEP - I like to drive fast!' 
        image = 'https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/64810319_10157338284206948_5726061905244585984_n.jpg?_nc_cat=106&_nc_oc=AQljRiM6JlhlLesVQ4E23ttFZBlstnuPtnnQmDygvqWsDTOR4mIgPcZweIGLD9Z_Txo&_nc_ht=scontent-sea1-1.xx&oh=386bfe4f15e7dd26c65792ba95d6238d&oe=5DB8FBC9' />

        {/* more posts */}
      </section>
    </div>;
  }
}

// export
export default App;