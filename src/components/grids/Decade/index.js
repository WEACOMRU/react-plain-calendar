import React from 'react'
import PropTypes from 'prop-types'
import ViewMode from '~constants/ViewMode'

const Decade = props => {
  const {
    theme,
    date,
    activeDate,
    changeMode,
    renderYearEntry
  } = props

  activeDate.setMonth(0, 1)
  const activeTime = activeDate.getTime()

  let year = date.getFullYear()
  const rangeStart = year - year % 10
  const rangeEnd = rangeStart + 9
  date.setFullYear(rangeStart - 1, 0)
  const yearsGrid = []

  for (let i = 0; i < 12; i += 1) {
    year = date.getFullYear()
    const isOutside = year < rangeStart || year > rangeEnd
    const isActive = date.getTime() === activeTime

    yearsGrid.push(
      <li
        key={year}
        className={theme.gridItem}
      >
        {renderYearEntry(
          year,
          new Date(date.getTime()),
          selectedDate => changeMode(ViewMode.YEAR, selectedDate),
          {
            theme,
            isOutside,
            isActive
          }
        )}
      </li>
    )

    date.setFullYear(year + 1)
  }

  return (
    <ul className={theme.gridDecade}>
      {yearsGrid}
    </ul>
  )
}

Decade.propTypes = {
  theme: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  date: PropTypes.instanceOf(Date).isRequired,
  activeDate: PropTypes.instanceOf(Date).isRequired,
  changeMode: PropTypes.func.isRequired,
  renderYearEntry: PropTypes.func
}

Decade.defaultProps = {
  theme: {},
  renderYearEntry: (label, date, onSelect, { theme, isOutside, isActive }) => (
    <button
      className={isOutside ? theme.gridDateOutside // eslint-disable-line no-nested-ternary
        : isActive ? theme.gridDateActive : theme.gridDate}
      onClick={() => onSelect(date)}
    >
      {label}
    </button>
  )
}

export default Decade
