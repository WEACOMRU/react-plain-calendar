import React from 'react'
import Code from '../Code'
import InlineCode from '../InlineCode'
import styles from './styles.css'

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
const onDateSelectCode = 'onDateSelect(date)'

const Props = () => (
  <dl className={styles.props}>
    <dt className={styles.propsName}>theme</dt>
    <dd className={styles.propsDesc}>
      Object of CSS classes with the following keys.
      <dl className={styles.subParams}>
        <dt className={styles.subParamsName}>calendar</dt>
        <dd className={styles.subParamsDesc}>
          CSS class for Calendar component.
        </dd>

        <dt className={styles.subParamsName}>rangeSelect</dt>
        <dd className={styles.subParamsDesc}>
          CSS class for calendar controls.
        </dd>

        <dt className={styles.subParamsName}>rangeSelectCaption</dt>
        <dd className={styles.subParamsDesc}>
          CSS class for caption of current range.
        </dd>

        <dt className={styles.subParamsName}>rangeSelectPrev</dt>
        <dd className={styles.subParamsDesc}>
          CSS class for prev button.
        </dd>

        <dt className={styles.subParamsName}>rangeSelectNext</dt>
        <dd className={styles.subParamsDesc}>
          CSS class for next button.
        </dd>

        <dt className={styles.subParamsName}>gridDecade</dt>
        <dd className={styles.subParamsDesc}>
          CSS class for dates grid of decade range.
        </dd>

        <dt className={styles.subParamsName}>gridYear</dt>
        <dd className={styles.subParamsDesc}>
          CSS class for dates grid of the yearly range.
        </dd>

        <dt className={styles.subParamsName}>gridMonth</dt>
        <dd className={styles.subParamsDesc}>
          CSS class for dates grid of the monthly range.
        </dd>

        <dt className={styles.subParamsName}>gridWeekdays</dt>
        <dd className={styles.subParamsDesc}>
          CSS class for weekdays labels.
        </dd>

        <dt className={styles.subParamsName}>gridItem</dt>
        <dd className={styles.subParamsDesc}>
          CSS class for item of dates grid.
        </dd>

        <dt className={styles.subParamsName}>gridDate</dt>
        <dd className={styles.subParamsDesc}>
          CSS class for date.
        </dd>

        <dt className={styles.subParamsName}>gridDateOutside</dt>
        <dd className={styles.subParamsDesc}>
          CSS class for date out of the range.
        </dd>

        <dt className={styles.subParamsName}>gridDateActive</dt>
        <dd className={styles.subParamsDesc}>
          CSS class for date with active state.
        </dd>
      </dl>
    </dd>

    <dt className={styles.propsName}>locale</dt>
    <dd className={styles.propsDesc}>
      The locale&nbsp;
       <em className={styles.propsDefault}>
         (by default is used &quot;window.navigator.language&quot; or
         &quot;en&quot; if not defined)
       </em>.
    </dd>

    <dt className={styles.propsName}>startOfWeek</dt>
    <dd className={styles.propsDesc}>
      First day of week. It must be a number from&nbsp;
      <InlineCode>0</InlineCode> (sunday) to&nbsp;
      <InlineCode>6</InlineCode> (saturday)&nbsp;
      <em className={styles.propsDefault}>
        (by default &quot;0&quot;)
      </em>.
    </dd>

    <dt className={styles.propsName}>activeDate</dt>
    <dd className={styles.propsDesc}>
      Date with active state&nbsp;
      <em className={styles.propsDefault}>
        (by default is current date)
      </em>.
    </dd>

    <dt className={styles.propsName}>prevLabel</dt>
    <dd className={styles.propsDesc}>
      Label on a button &quot;previous&quot;. Can be a string or React element&nbsp;
      <em className={styles.propsDefault}>
        (by default &quot;〈&quot;)
      </em>.
    </dd>

    <dt className={styles.propsName}>nextLabel</dt>
    <dd className={styles.propsDesc}>
      Label on a button &quot;next&quot;. Can be a string or React element&nbsp;
      <em className={styles.propsDefault}>
        (by default &quot;〉&quot;)
      </em>.
    </dd>

    <dt className={styles.propsName}>
      renderYearEntry
      renderMonthEntry
      renderDateEntry
    </dt>
    <dd className={styles.propsDesc}>
      You can rewrite default render methods
      <Code language='javascript'>{renderEntryCode}</Code>
      <dl className={styles.subParams}>
        <dt className={styles.subParamsName}>label</dt>
        <dd className={styles.subParamsDesc}>
          Label for the entry.
        </dd>

        <dt className={styles.subParamsName}>date</dt>
        <dd className={styles.subParamsDesc}>
          Date object.
        </dd>

        <dt className={styles.subParamsName}>onSelect</dt>
        <dd className={styles.subParamsDesc}>
          Callback. You must call&nbsp;
          <InlineCode>onSelect</InlineCode> method with&nbsp;
          <InlineCode>date</InlineCode> as a parameter
          when entry selected.
        </dd>

        <dt className={styles.subParamsName}>options</dt>
        <dd className={styles.subParamsDesc}>
          Object, that contains <InlineCode>theme</InlineCode>,&nbsp;
          <InlineCode>isOutside</InlineCode>,&nbsp;
          <InlineCode>isActive</InlineCode> parameters.
        </dd>
      </dl>

      By default method look as:
      <Code language='javascript'>{renderEntryDefaultCode}</Code>
    </dd>

    <dt className={styles.propsName}>onDateSelect</dt>
    <dd className={styles.propsDesc}>
      A callback which is triggered whenever the entry is selected.
      <Code language='javascript'>{onDateSelectCode}</Code>
      <dl className={styles.subParams}>
        <dt className={styles.subParamsName}>date</dt>
        <dd className={styles.subParamsDesc}>
          Date object.
        </dd>
      </dl>
    </dd>
  </dl>
)

export default Props
