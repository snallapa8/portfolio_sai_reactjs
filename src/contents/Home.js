import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/sai_photo.png';
import Social from '../components/Social'
class Home extends Component {
render() {
return (
<div className="condiv home">
<div className="profile-display">
<img src={profilepic} className="profilepic"></img>
<p><ReactTypingEffect className="typingeffect" text={['I am Sai Nallapa Reddy']} speed={100}/></p>
<p><ReactTypingEffect className="typingeffect" text={['I am an AEM Technical Lead working on multiple large scale applications.']} speed={100} eraseDelay={200}/></p>
<Social />
</div>
</div>
)
}
}
export default Home
