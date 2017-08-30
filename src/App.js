import React, { Component } from 'react';

import AppBar from './components/AppBar'
import Body from './components/Body'

class App extends Component {
  render() {
    return (
        <div>
          <AppBar />
          <Body />
        </div>
    );
  }
}

export default App;
