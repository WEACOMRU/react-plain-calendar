import React, { Component } from 'react';
import styles from './styles.css';

export default class App extends Component {
  state = {
    date: {},
  }

  render() {
    return (
      <div className={styles.app}>
        <h1 className={styles.appTitle}>React Plane Calendar</h1>
      </div>
    );
  }
}
