import React from 'react';
import { hot } from 'react-hot-loader';
import Camera from 'react-html5-camera-photo';

import './css/theme.css';

class App extends React.Component {

  onTakePhoto (dataUri) {
    // Do stuff with the dataUri photo...
    console.log('takePhoto');
  }

  onCameraError (error) {
    console.error('onCameraError', error);
  }

  onCameraError(error) { this.onCameraError(error); } 

  render() {
    return (
      <div>
      <Camera
      onTakePhoto = { (dataUri) => { this.onTakePhoto(dataUri); } }
      idealResolution = {{width: 640, height: 480}}
    />
    </div>
    )
  }
}

export default hot(module)(App)
