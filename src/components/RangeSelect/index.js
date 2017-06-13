import React, { Component } from 'react'
import PropTypes from 'prop-types'
import capitalize from 'lodash/capitalize'
import ViewMode from '~constants/ViewMode'

export default class RangeSelect extends Component {
  static propTypes = {
    theme: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    viewMode: PropTypes.oneOf(Object.values(ViewMode)).isRequired,
    locale: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    prevRange: PropTypes.func.isRequired,
    nextRange: PropTypes.func.isRequired,
    changeMode: PropTypes.func.isRequired
  }

  static defaultProps = {
    theme: {}
  }

  _toggleMode = () => {
    const { viewMode, date, changeMode } = this.props

    switch (viewMode) {
      case ViewMode.DECADE:
        break
      case ViewMode.YEAR:
        changeMode(ViewMode.DECADE, date)
        break
      case ViewMode.MONTH:
        changeMode(ViewMode.YEAR, date)
        break
      default:
        throw new Error('Unexpected value of "viewMode"')
    }
  }

  render () {
    const {
      theme,
      viewMode,
      locale,
      date,
      prevRange,
      nextRange
    } = this.props

    let range

    switch (viewMode) {
      case ViewMode.DECADE: {
        const currentYear = date.getFullYear()
        const startYear = currentYear - currentYear % 10
        const endYear = startYear + 9
        range = `${startYear} - ${endYear}`
        break
      }
      case ViewMode.YEAR:
        range = date.getFullYear()
        break
      case ViewMode.MONTH: {
        const month = new Intl.DateTimeFormat(locale, { month: 'long' }).format(date)
        range = `${capitalize(month)} ${date.getFullYear()}`
        break
      }
      default:
        throw new Error('Unexpected value of "viewMode"')
    }

    return (
      <div className={theme.rangeSelect}>
        <button
          className={theme.rangeSelectPrev}
          onClick={prevRange}
        >{'<'}</button>
        <button
          className={theme.rangeSelectCaption}
          onClick={this._toggleMode}
        >{range}</button>
        <button
          className={theme.rangeSelectNext}
          onClick={nextRange}
        >{'>'}</button>
      </div>
    )
  }
}
