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

## Props
- **theme** - Object of CSS classes with the following keys.
  - **calendar** - CSS class for Calendar component.
  - **rangeSelect** - CSS class for calendar controls.
  - **rangeSelectCaption** - CSS class for caption of current range.
  - **rangeSelectPrev** - CSS class for prev button.
  - **rangeSelectNext** - CSS class for next button.
  - **gridDecade** - CSS class for dates grid of decade range.
  - **gridYear** - CSS class for dates grid of the yearly range.
  - **gridMonth** - CSS class for dates grid of the monthly range.
  - **gridWeekdays** - CSS class for weekdays labels.
  - **gridItem** - CSS class for item of dates grid.
  - **gridDate** - CSS class for date.
  - **gridDateOutside** - CSS class for date out of the range.
  - **gridDateActive** - CSS class for date with active state.
- **locale** - The locale *(by default is used "window.navigator.language" or "en" if not defined)*.
- **startOfWeek** - First day of week. It must be a number from 0 (sunday) to 6 (saturday) *(by default "0")*.
- **activeDate** - Date with active state *(by default is current date)*.
- **prevLabel** - Label on a button "previous". Can be a string or React element *(by default "〈")*.
- **nextLabel** - Label on a button "next". Can be a string or React element *(by default "〉")*.
- **renderYearEntry, renderMonthEntry, renderDateEntry** - You can rewrite default render methods

  ```javascript
  renderEntry(label, date, onSelect, options)
  ```

  - **label** - Label for the entry.
  - **date** - Date object.
  - **onSelect** - Callback. You must call `onSelect` method with `date` as a parameter when entry selected.
  - **options** - Object, that contains `theme`, `isOutside`, `isActive` parameters.

  By default method look as:

  ```javascript
  (label, date, onSelect, { theme, isOutside, isActive }) => (
    <button
      className={isOutside ? theme.gridDateOutside
        : isActive ? theme.gridDateActive : theme.gridDate}
      onClick={() => onSelect(date)}
    >
      {label}
    </button>
  )
  ```

- **onDateSelect** - A callback which is triggered whenever the entry is selected.

  ```javascript
  onDateSelect(date)
  ```

  - **date** - Date object.

## Changelog
### 0.1.0
- `onSelectDate` → `onDateSelect`
- Added `prevLabel` and `nextLabel` props.

## Contribution
Install all dependencies, then start the demo
```bash
$ npm install
$ npm start
```
Don't forget about tests
```bash
$ npm test
```
You can automatically format code by [standard](https://standardjs.com/) code style
```bash
$ npm run fix
```
Please, create issues and pull requests.

## Todo
- [x] Write documentation.
- [ ] Write tests.
- [ ] Add stylelint check.

## License
MIT.
