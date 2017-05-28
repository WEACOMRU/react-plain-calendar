import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RangeSelect from '~components/RangeSelect';
import Grid from '~components/Grid';
import Decade from '~components/grids/Decade';
import Year from '~components/grids/Year';
import Month from '~components/grids/Month';
import getMidnight from '~utils/getMidnight';
import ViewMode from '~constants/ViewMode';
import styles from './styles.scss';

export default class Calendar extends Component {
  static propTypes = {
    theme: PropTypes.shape({
      calendar: PropTypes.string,
    }),
    locale: PropTypes.string,
    startOfWeek: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
    activeDate: PropTypes.instanceOf(Date),
    renderYearEntry: PropTypes.func,
    renderMonthEntry: PropTypes.func,
    renderDateEntry: PropTypes.func,
    onSelectDate: PropTypes.func,
  }

  static defaultProps = {
    theme: {},
    locale: Intl.DateTimeFormat.supportedLocalesOf(
      [window.navigator.language, 'en'],
    )[0],
    startOfWeek: 1,
    activeDate: getMidnight(),
    renderYearEntry: Decade.defaultProps.renderYearEntry,
    renderMonthEntry: Year.defaultProps.renderMonthEntry,
    renderDateEntry: Month.defaultProps.renderDateEntry,
    onSelectDate: Month.defaultProps.onSelectDate,
  }

  constructor(props) {
    super(props);

    const date = getMidnight(props.activeDate);
    date.setDate(1);

    this.state = {
      viewMode: ViewMode.MONTH,
      date,
    };
  }

  _shiftRange = direction => {
    let factor = 1;

    if (direction === 'backward') {
      factor = -1;
    }

    const { viewMode, date } = this.state;
    const nextDate = new Date(date.getTime());

    switch (viewMode) {
      case ViewMode.DECADE:
        nextDate.setFullYear(nextDate.getFullYear() + factor * 10);
        this.setState({
          date: nextDate,
        });
        break;
      case ViewMode.YEAR:
        nextDate.setFullYear(nextDate.getFullYear() + factor * 1);
        this.setState({
          date: nextDate,
        });
        break;
      case ViewMode.MONTH:
        nextDate.setMonth(nextDate.getMonth() + factor * 1);
        this.setState({
          date: nextDate,
        });
        break;
      default:
        throw new Error('Unexpected value of "viewMode"');
    }
  }

  prevRange = () => this._shiftRange('backward');

  nextRange = () => this._shiftRange('forward');

  _changeMode = (viewMode, date) => this.setState({
    viewMode,
    date,
  })

  _theme = {
    calendar: styles.calendar,
    rangeSelect: styles.rangeSelect,
    rangeSelectCaption: styles.rangeSelectCaption,
    rangeSelectPrev: styles.rangeSelectPrev,
    rangeSelectNext: styles.rangeSelectNext,
    gridDecade: styles.gridDecade,
    gridYear: styles.gridYear,
    gridMonth: styles.gridMonth,
    gridWeekdays: styles.gridWeekdays,
    gridItem: styles.gridItem,
    gridDate: styles.gridDate,
    gridDateOutside: styles.gridDateOutside,
    gridDateActive: styles.gridDateActive,
    ...this.props.theme,
  }

  render() {
    const {
      locale,
      startOfWeek,
      activeDate,
      renderYearEntry,
      renderMonthEntry,
      renderDateEntry,
      onSelectDate,
    } = this.props;
    const { viewMode, date } = this.state;
    const theme = this._theme;

    return (
      <div className={theme.calendar}>
        <RangeSelect
          theme={theme}
          viewMode={viewMode}
          locale={locale}
          date={new Date(date.getTime())}
          prevRange={this.prevRange}
          nextRange={this.nextRange}
          changeMode={this._changeMode}
        />
        <Grid
          theme={theme}
          viewMode={viewMode}
          locale={locale}
          startOfWeek={startOfWeek}
          date={new Date(date.getTime())}
          activeDate={getMidnight(activeDate)}
          changeMode={this._changeMode}
          onSelectDate={onSelectDate}
          renderYearEntry={renderYearEntry}
          renderMonthEntry={renderMonthEntry}
          renderDateEntry={renderDateEntry}
        />
      </div>
    );
  }
}
