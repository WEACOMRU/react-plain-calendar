import React, { Component } from 'react';
import { ObjectInspector } from 'react-inspector';
import Calendar from 'Calendar'; // eslint-disable-line import/no-unresolved, import/extensions
import calendarStyles from 'Calendar/components/Calendar/styles.scss'; // eslint-disable-line import/no-unresolved
import styles from './styles.css';

export default class App extends Component {
  state = {
    date: null,
  }

  _onSelectDate = date => this.setState({ date })

  render() {
    return (
      <div className={styles.app}>
        <h1 className={styles.appTitle}>React Plain Calendar</h1>
        <Calendar
          theme={{
            calendar: `${calendarStyles.calendar} ${styles.calendar}`,
          }}
          onSelectDate={this._onSelectDate}
        />
        <div className={styles.appInspector}>
          <h3 className={styles.appInspectorTitle}>
            Please, select a date
          </h3>
          <ObjectInspector data={this.state.date} />
        </div>
      </div>
    );
  }
}
