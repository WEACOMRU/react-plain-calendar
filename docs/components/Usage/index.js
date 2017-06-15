import React from 'react'
import Code from '../Code'

const stylesCode = 'node_modules/react-plain-calendar/lib/styles.css'
const usageCode = `import React, { Component } from 'react';
import Calendar from 'react-plain-calendar';
import 'react-plain-calendar/lib/styles.css';

export default class AwesomeComponent extends Component {
  onDateSelect(date) {
    /* do something */
  }

  render() {
    return (
      <div>
        <Calendar onDateSelect={this.onDateSelect} />
      </div>
    )
  }
}`

const Usage = () => (
  <div>
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

export default Usage
