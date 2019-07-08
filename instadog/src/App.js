// src/App.js
// Imports
import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Post from './components/Post';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://localhost:4000'
});

class App extends Component {
  render() {
    return <div className = 'App'>
      <Header />
      <section className = 'App-main'>
        <Post nickname = 'Clementine Pug'
        avatar = 'https://www.facebook.com/search/async/profile_picture/?fbid=100027794379670&width=72&height=72' 
        caption = 'My brother and me!'
        image = 'https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/59008893_10157206196141948_1760933219810672640_n.jpg?_nc_cat=111&_nc_oc=AQmeR2oM2xKnUHTVmPX0G2tTWyrBOMmQXMF57ueVeVwy7a0vTGo__nzoeRwgkpWauPA&_nc_ht=scontent-sea1-1.xx&oh=c1c3796a57f427d17405494b80f41863&oe=5DAB7BFD' />
        
        <Post nickname = 'Comrade Pug' 
        avatar = 'https://www.facebook.com/search/async/profile_picture/?fbid=100002545038445&width=72&height=72' 
        caption = 'I am King of the Mountain!' 
        image = 'https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/10343670_10152501122496948_3410647605424668062_n.jpg?_nc_cat=102&_nc_oc=AQm3k6Mz4cYRGuEpK0EwRBK6jzYayuXAqKK0hICnldzQLoZF25VN1-g-JhXQmPdpCxw&_nc_ht=scontent-sea1-1.xx&oh=6ef01d430bc8559aa94f556753fc249d&oe=5DBF3273' />

        {/* more posts */}
      </section>
    </div>;
  }
}

// export
export default App;