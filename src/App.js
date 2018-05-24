import React, { Component } from 'react';

import styles from './App.css';
import Nav from './components/Nav/Nav';
import Intro from './components/Intro/Intro';
import WhatIDo from './components/WhatIDo/WhatIDo';

class App extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <Nav />
        <Intro />
        <WhatIDo />
      </div>
    );
  }
}

export default App;
