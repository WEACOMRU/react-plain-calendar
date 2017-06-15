import React, { Component } from 'react'
import { ObjectInspector } from 'react-inspector'
import Calendar from 'Calendar'
import calendarStyles from 'Calendar/components/Calendar/styles.scss'
import Code from '../Code'
import Badges from '../Badges'
import Usage from '../Usage'
import Props from '../Props'
import Changelog from '../Changelog'
import Contribution from '../Contribution'
import styles from './styles.css'

const installationCode = '$ npm i -S react-plain-calendar'

export default class App extends Component {
  state = {
    date: null
  }

  _onDateSelect = date => this.setState({ date })

  render () {
    return (
      <div className={styles.app}>
        <h1 className={styles.appTitle}>React Plain Calendar</h1>
        <Badges />

        <Calendar
          theme={{
            calendar: `${calendarStyles.calendar} ${styles.appCalendar}`
          }}
          onDateSelect={this._onDateSelect}
        />

        <div className={styles.appInspector}>
          <h3 className={styles.appInspectorTitle}>
            Please, select a date
          </h3>
          <ObjectInspector data={this.state.date} />
        </div>

        <h2 className={styles.appHeader2}>Installation</h2>
        <Code>{installationCode}</Code>

        <h2 className={styles.appHeader2}>Usage</h2>
        <Usage />

        <h2 className={styles.appHeader2}>Props</h2>
        <Props />

        <h2 className={styles.appHeader2}>Changelog</h2>
        <Changelog />

        <h2 className={styles.appHeader2}>Contribution</h2>
        <Contribution />

        <h2 className={styles.appHeader2}>License</h2>
        <p>MIT.</p>
      </div>
    )
  }
}
