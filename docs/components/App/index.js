import React, { Component } from 'react'
import { ObjectInspector } from 'react-inspector'
import Calendar from 'Calendar'
import calendarStyles from 'Calendar/components/Calendar/styles.scss'
import styles from './styles.css'
import Code from '../Code'

const installationCode = '$ npm i -S react-plain-calendar'
const stylesCode = 'node_modules/react-plain-calendar/lib/styles.css'
const usageCode = `import React, { Component } from 'react';
import Calendar from 'react-plain-calendar';
import 'react-plain-calendar/lib/styles.css';
export default class Example extends Component {
  render() {
    return (
      <div>
        <Calendar />
      </div>
    );
  }
}`

export default class App extends Component {
  state = {
    date: null
  }

  _onSelectDate = date => this.setState({ date })

  render () {
    return (
      <div className={styles.app}>
        <h1 className={styles.appTitle}>React Plain Calendar</h1>
        <Calendar
          theme={{
            calendar: `${calendarStyles.calendar} ${styles.calendar}`
          }}
          onSelectDate={this._onSelectDate}
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
        <p>
          The plugin ships with a default styling available at this location in the
          installed package:
        </p>
        <Code>{stylesCode}</Code>
        <p>
          You will need&nbsp;
          <a
            href='https://webpack.js.org/'
            rel='noopener noreferrer'
            target='_blank'
          >Webpack</a> or other build system, that supports requiring css files.
        </p>
        <Code language='javascript'>{usageCode}</Code>
      </div>
    )
  }
}
