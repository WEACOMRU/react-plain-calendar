# react-plain-calendar

[![npm version](https://badge.fury.io/js/react-plain-calendar.svg)](https://badge.fury.io/js/react-plain-calendar)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> React Calendar Component

## Installation

```bash
npm i -S react-plain-calendar
```

## Usage

The plugin ships with a default styling available at this location in the installed package:

```bash
node_modules/react-plain-calendar/lib/styles.css
```

You will need [Webpack](https://webpack.js.org/) or other build system, that supports requiring css files.

```javascript
import React, { Component } from 'react';
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
}
```

## Todo
- [ ] Write documentation.
- [ ] Write tests.
- [ ] Add stylelint check.
