import React from 'react';
import PropTypes from 'prop-types';
import Decade from '~components/grids/Decade';
import Year from '~components/grids/Year';
import Month from '~components/grids/Month';
import ViewMode from '~constants/ViewMode';

const Grid = props => {
  const {
    theme,
    viewMode,
    locale,
    startOfWeek,
    date,
    activeDate,
    changeMode,
    renderYearEntry,
    renderMonthEntry,
    renderDateEntry,
    onSelectDate,
  } = props;

  switch (viewMode) {
    case ViewMode.DECADE:
      return (
        <Decade
          theme={theme}
          date={date}
          activeDate={activeDate}
          changeMode={changeMode}
          renderYearEntry={renderYearEntry}
        />
      );
    case ViewMode.YEAR:
      return (
        <Year
          theme={theme}
          locale={locale}
          date={date}
          activeDate={activeDate}
          changeMode={changeMode}
          renderMonthEntry={renderMonthEntry}
        />
      );
    case ViewMode.MONTH:
      return (
        <Month
          theme={theme}
          locale={locale}
          startOfWeek={startOfWeek}
          date={date}
          activeDate={activeDate}
          renderDateEntry={renderDateEntry}
          onSelectDate={onSelectDate}
        />
      );
    default:
      throw new Error('Unexpected value of "viewMode"');
  }
};

Grid.propTypes = {
  theme: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  viewMode: PropTypes.oneOf(Object.values(ViewMode)).isRequired,
  locale: PropTypes.string.isRequired,
  startOfWeek: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]).isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  activeDate: PropTypes.instanceOf(Date).isRequired,
  changeMode: PropTypes.func.isRequired,
  renderYearEntry: PropTypes.func,
  renderMonthEntry: PropTypes.func,
  renderDateEntry: PropTypes.func,
  onSelectDate: PropTypes.func,
};

Grid.defaultProps = {
  theme: {},
  renderYearEntry: Decade.defaultProps.renderYearEntry,
  renderMonthEntry: Year.defaultProps.renderMonthEntry,
  renderDateEntry: Month.defaultProps.renderDateEntry,
  onSelectDate: Month.defaultProps.onSelectDate,
};

export default Grid;
