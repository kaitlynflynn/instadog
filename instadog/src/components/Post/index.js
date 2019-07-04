// src/components/Post/index.js
// Imports
import React, { Component } from 'react';
import './Post.css';

class Post extends Component {
    render() {
        return <article className = 'Post' ref = 'Post'>
            <header>
                <div className = 'Post-user'>
                    <div className = 'Post-user-avatar'>
                        <img src = 'https://www.facebook.com/search/async/profile_picture/?fbid=100027794379670&width=72&height=72' alt = 'Chris' />
                    </div>
                    <div className = 'Post-user-nickname'>
                        <span>Clementine Pug</span>
                    </div>
                </div>
            </header>
            <div className = 'Post-image'>
                <div className = 'Post-image-bg'>
                    <img alt = 'Pugs' src = 'https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/59008893_10157206196141948_1760933219810672640_n.jpg?_nc_cat=111&_nc_oc=AQmeR2oM2xKnUHTVmPX0G2tTWyrBOMmQXMF57ueVeVwy7a0vTGo__nzoeRwgkpWauPA&_nc_ht=scontent-sea1-1.xx&oh=c1c3796a57f427d17405494b80f41863&oe=5DAB7BFD' />
                </div>
            </div>
            <div className = 'Post-caption'>
                <strong>Clementine Pug </strong> My brother and me!
            </div>
        </article>;
    }
}

// export
export default Post;