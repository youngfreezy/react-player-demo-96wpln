import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactPlayer from 'react-player';
import './style.css';

const App: React.FC = () => (
  <div>
    <ReactPlayer url='https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4' playing controls />
    <ReactPlayer url='https://dl.espressif.com/dl/audio/ff-16b-2c-44100hz.mp3' 
     controls
     />
  </div>
);

render(<App />, document.getElementById('root'));
