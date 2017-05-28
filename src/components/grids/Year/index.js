import React from 'react';
import PropTypes from 'prop-types';
import capitalize from 'lodash/capitalize';
import ViewMode from '~constants/ViewMode';

const Year = props => {
  const {
    theme,
    locale,
    date,
    activeDate,
    changeMode,
    renderMonthEntry,
  } = props;

  activeDate.setDate(1);
  const activeTime = activeDate.getTime();

  const monthLabel = new Intl.DateTimeFormat(
    locale, { month: 'short' },
  );
  const monthsGrid = [];
  const year = date.getFullYear();

  for (let i = 0; i < 12; i += 1) {
    date.setMonth(i);
    const isActive = date.getTime() === activeTime;

    monthsGrid.push(
      <li
        key={`${year}/${i}`}
        className={theme.gridItem}
      >
        {renderMonthEntry(
          monthLabel.format(date),
          new Date(date.getTime()),
          selectedDate => changeMode(ViewMode.MONTH, selectedDate),
          {
            theme,
            isActive,
          },
        )}
      </li>,
    );
  }

  return (
    <ul className={theme.gridYear}>
      {monthsGrid}
    </ul>
  );
};

Year.propTypes = {
  theme: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  locale: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  activeDate: PropTypes.instanceOf(Date).isRequired,
  changeMode: PropTypes.func.isRequired,
  renderMonthEntry: PropTypes.func,
};

Year.defaultProps = {
  theme: {},
  renderMonthEntry: (label, date, onSelect, { theme, isActive }) => (
    <button
      className={isActive ? theme.gridDateActive : theme.gridDate}
      onClick={() => onSelect(date)}
    >
      {capitalize(label)}
    </button>
  ),
};

export default Year;
