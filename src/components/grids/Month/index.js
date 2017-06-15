import React from 'react'
import PropTypes from 'prop-types'

const Month = props => {
  const {
    theme,
    locale,
    startOfWeek,
    date,
    activeDate,
    renderDateEntry,
    onDateSelect
  } = props

  const rangeMonth = date.getMonth()
  const activeTime = activeDate.getTime()

  let shift = 1 + startOfWeek - date.getDay()
  if (shift > 0) {
    shift -= 7
  }
  date.setDate(shift)

  const weekdayLabel = new Intl.DateTimeFormat(
    locale, { weekday: 'short' }
  )
  const weekdaysLabels = []
  const daysGrid = []
  const year = date.getFullYear()

  for (let i = 0; i < 42; i += 1) {
    const month = date.getMonth()
    const day = date.getDate()
    const isOutside = date.getMonth() !== rangeMonth
    const isActive = date.getTime() === activeTime

    daysGrid.push(
      <li
        key={`${year}/${month}/${day}`}
        className={theme.gridItem}
      >
        {renderDateEntry(
          day,
          new Date(date.getTime()),
          onDateSelect,
          {
            theme,
            isOutside,
            isActive
          }
        )}
      </li>
    )

    if (weekdaysLabels.length < 7) {
      weekdaysLabels.push(
        <li
          key={weekdaysLabels.length}
          className={theme.gridItem}
        >
          {weekdayLabel.format(date)}
        </li>
      )
    }

    date.setDate(date.getDate() + 1)
  }

  return (
    <div>
      <ul className={theme.gridWeekdays}>
        {weekdaysLabels}
      </ul>
      <ul className={theme.gridMonth}>
        {daysGrid}
      </ul>
    </div>
  )
}

Month.propTypes = {
  theme: PropTypes.object,
  locale: PropTypes.string.isRequired,
  startOfWeek: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]).isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  activeDate: PropTypes.instanceOf(Date).isRequired,
  renderDateEntry: PropTypes.func,
  onDateSelect: PropTypes.func
}

Month.defaultProps = {
  theme: {},
  renderDateEntry: (label, date, onSelect, { theme, isOutside, isActive }) => (
    <button
      className={isOutside ? theme.gridDateOutside
        : isActive ? theme.gridDateActive : theme.gridDate}
      onClick={() => onSelect(date)}
    >
      {label}
    </button>
  ),
  onDateSelect: () => {}
}

export default Month
