import React, { Component } from 'react';

import styles from './App.css';
import Nav from './components/Nav/Nav';
import Intro from './components/Intro/Intro';

class App extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <Nav />
        <Intro />
      </div>
    );
  }
}

export default App;
