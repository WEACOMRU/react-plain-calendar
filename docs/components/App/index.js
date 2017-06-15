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
const renderEntryCode = 'renderEntry(label, date, onSelect, options)'
const renderEntryDefaultCode =
`(label, date, onSelect, { theme, isOutside, isActive }) => (
  <button
    className={isOutside ? theme.gridDateOutside
      : isActive ? theme.gridDateActive : theme.gridDate}
    onClick={() => onSelect(date)}
  >
    {label}
  </button>
)`
const onDateSelectCode = `onDateSelect(date)`
const contributingCode = `$ npm install
$ npm start`
const testCode = '$ npm test'
const fixCode = '$ npm run fix'

const InlineCode = ({ children }) => (
  <code className={styles.appCode}>{children}</code>
)

export default class App extends Component {
  state = {
    date: null
  }

  _onDateSelect = date => this.setState({ date })

  render () {
    return (
      <div className={styles.app}>
        <h1 className={styles.appTitle}>React Plain Calendar</h1>

        <div className={styles.appBadges}>
          <a
            className={styles.appBadge}
            href='https://badge.fury.io/js/react-plain-calendar'
            target='_blank'
            rel='nofollow noopener'
          >
            <img
              src='https://badge.fury.io/js/react-plain-calendar.svg'
              alt='npm version' height='18'
            />
          </a>
          <a
            className={styles.appBadge}
            href='https://standardjs.com'
            target='_blank'
            rel='nofollow noopener'
          >
            <img
              src='https://img.shields.io/badge/code_style-standard-brightgreen.svg'
              alt='npm version' height='18'
            />
          </a>
        </div>

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

        <h2 className={styles.appHeader2}>Props</h2>
        <dl className={styles.appProps}>
          <dt className={styles.appPropsName}>theme</dt>
          <dd className={styles.appPropsDesc}>
            Object of CSS classes with the following keys.
            <dl className={styles.appSubParams}>
              <dt className={styles.appSubParamsName}>calendar</dt>
              <dd className={styles.appSubParamsDesc}>
                CSS class for Calendar component.
              </dd>

              <dt className={styles.appSubParamsName}>rangeSelect</dt>
              <dd className={styles.appSubParamsDesc}>
                CSS class for calendar controls.
              </dd>

              <dt className={styles.appSubParamsName}>rangeSelectCaption</dt>
              <dd className={styles.appSubParamsDesc}>
                CSS class for caption of current range.
              </dd>

              <dt className={styles.appSubParamsName}>rangeSelectPrev</dt>
              <dd className={styles.appSubParamsDesc}>
                CSS class for prev button.
              </dd>

              <dt className={styles.appSubParamsName}>rangeSelectNext</dt>
              <dd className={styles.appSubParamsDesc}>
                CSS class for next button.
              </dd>

              <dt className={styles.appSubParamsName}>gridDecade</dt>
              <dd className={styles.appSubParamsDesc}>
                CSS class for dates grid of decade range.
              </dd>

              <dt className={styles.appSubParamsName}>gridYear</dt>
              <dd className={styles.appSubParamsDesc}>
                CSS class for dates grid of the yearly range.
              </dd>

              <dt className={styles.appSubParamsName}>gridMonth</dt>
              <dd className={styles.appSubParamsDesc}>
                CSS class for dates grid of the monthly range.
              </dd>

              <dt className={styles.appSubParamsName}>gridWeekdays</dt>
              <dd className={styles.appSubParamsDesc}>
                CSS class for weekdays labels.
              </dd>

              <dt className={styles.appSubParamsName}>gridItem</dt>
              <dd className={styles.appSubParamsDesc}>
                CSS class for item of dates grid.
              </dd>

              <dt className={styles.appSubParamsName}>gridDate</dt>
              <dd className={styles.appSubParamsDesc}>
                CSS class for date.
              </dd>

              <dt className={styles.appSubParamsName}>gridDateOutside</dt>
              <dd className={styles.appSubParamsDesc}>
                CSS class for date out of the range.
              </dd>

              <dt className={styles.appSubParamsName}>gridDateActive</dt>
              <dd className={styles.appSubParamsDesc}>
                CSS class for date with active state.
              </dd>
            </dl>
          </dd>

          <dt className={styles.appPropsName}>locale</dt>
          <dd className={styles.appPropsDesc}>
            The locale&nbsp;
             <em className={styles.appPropsDefault}>
               (by default is used &quot;window.navigator.language&quot; or
               &quot;en&quot; if not defined)
             </em>.
          </dd>

          <dt className={styles.appPropsName}>startOfWeek</dt>
          <dd className={styles.appPropsDesc}>
            First day of week. It must be a number from&nbsp;
            <InlineCode>0</InlineCode> (sunday) to&nbsp;
            <InlineCode>6</InlineCode> (saturday)&nbsp;
            <em className={styles.appPropsDefault}>
              (by default &quot;0&quot;)
            </em>.
          </dd>

          <dt className={styles.appPropsName}>activeDate</dt>
          <dd className={styles.appPropsDesc}>
            Date with active state&nbsp;
            <em className={styles.appPropsDefault}>
              (by default is current date)
            </em>.
          </dd>

          <dt className={styles.appPropsName}>prevLabel</dt>
          <dd className={styles.appPropsDesc}>
            Label on a button &quot;previous&quot;. Can be a string or React element&nbsp;
            <em className={styles.appPropsDefault}>
              (by default &quot;〈&quot;)
            </em>.
          </dd>

          <dt className={styles.appPropsName}>nextLabel</dt>
          <dd className={styles.appPropsDesc}>
            Label on a button &quot;next&quot;. Can be a string or React element&nbsp;
            <em className={styles.appPropsDefault}>
              (by default &quot;〉&quot;)
            </em>.
          </dd>

          <dt className={styles.appPropsName}>
            renderYearEntry
            renderMonthEntry
            renderDateEntry
          </dt>
          <dd className={styles.appPropsDesc}>
            You can rewrite default render methods
            <Code language='javascript'>{renderEntryCode}</Code>
            <dl className={styles.appSubParams}>
              <dt className={styles.appSubParamsName}>label</dt>
              <dd className={styles.appSubParamsDesc}>
                Label for the entry.
              </dd>

              <dt className={styles.appSubParamsName}>date</dt>
              <dd className={styles.appSubParamsDesc}>
                Date object.
              </dd>

              <dt className={styles.appSubParamsName}>onSelect</dt>
              <dd className={styles.appSubParamsDesc}>
                Callback. You must call&nbsp;
                <InlineCode>onSelect</InlineCode> method with&nbsp;
                <InlineCode>date</InlineCode> as a parameter
                when entry selected.
              </dd>

              <dt className={styles.appSubParamsName}>options</dt>
              <dd className={styles.appSubParamsDesc}>
                Object, that contains <InlineCode>theme</InlineCode>,&nbsp;
                <InlineCode>isOutside</InlineCode>,&nbsp;
                <InlineCode>isActive</InlineCode> parameters.
              </dd>
            </dl>

            By default method look as:
            <Code language='javascript'>{renderEntryDefaultCode}</Code>
          </dd>

          <dt className={styles.appPropsName}>onDateSelect</dt>
          <dd className={styles.appPropsDesc}>
            A callback which is triggered whenever the entry is selected.
            <Code language='javascript'>{onDateSelectCode}</Code>
            <dl className={styles.appSubParams}>
              <dt className={styles.appSubParamsName}>date</dt>
              <dd className={styles.appSubParamsDesc}>
                Date object.
              </dd>
            </dl>
          </dd>
        </dl>

        <h2 className={styles.appHeader2}>Changelog</h2>
        <h3 className={styles.appHeader3}>0.1.0</h3>
        <ul className={styles.appChangelogList}>
          <li className={styles.appChangelogItem}>
            <InlineCode>onSelectDate</InlineCode> &rarr; <InlineCode>onDateSelect</InlineCode>
          </li>
          <li className={styles.appChangelogItem}>
            Added <InlineCode>prevLabel</InlineCode> and <InlineCode>nextLabel</InlineCode> props.
          </li>
        </ul>

        <h2 className={styles.appHeader2}>Contribution</h2>
        <p>Install all dependencies, then start the demo with docs</p>
        <Code>{contributingCode}</Code>
        <p>Do not forget about tests</p>
        <Code>{testCode}</Code>
        <p>
          You can automatically format code by&nbsp;
          <a href='https://standardjs.com' target='_blank' rel='nofollow noopener'>
            standard
          </a>&nbsp;
          code style
        </p>
        <Code>{fixCode}</Code>
        <p>Please, create issues and pull requests.</p>

        <h2 className={styles.appHeader2}>License</h2>
        <p>MIT.</p>
      </div>
    )
  }
}
