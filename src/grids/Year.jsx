import capitalize from 'lodash/capitalize';
import classNames from 'classnames';
import shortid from 'shortid';

import ViewMode from '../ViewMode';

export default function Year(props) {
  const activeDate = new Date(props.activeDate.getTime());
  activeDate.setDate(1);
  const activeTime = activeDate.getTime();

  const date = new Date(props.date.getTime());
  const monthLabel = new Intl.DateTimeFormat(
    props.locale, { month: 'short' },
  );
  const monthsGrid = [];

  for (let i = 0; i < 12; i += 1) {
    date.setMonth(i);
    const isActive = date.getTime() === activeTime;

    monthsGrid.push(
      <li
        key={shortid.generate()}
        className="calendar-grid__item"
      >
        {props.renderGridMonth(
          monthLabel.format(date),
          new Date(date.getTime()),
          date => props.changeMode(ViewMode.MONTH, date),
          {
            isActive,
          },
        )}
      </li>,
    );
  }

  return (
    <ul className="calendar-grid calendar-grid_year">
      {monthsGrid}
    </ul>
  );
}

Year.defaultProps = {
  renderGridMonth: (label, date, onSelect, options) => (
    <button
      className={classNames(
        'calendar-grid__date',
        { 'calendar-grid__date_active': options.isActive },
      )}
      onClick={() => onSelect(date)}
    >
      {capitalize(label)}
    </button>
  ),
};

Year.propTypes = {
  locale: React.PropTypes.string,
  date: React.PropTypes.instanceOf(Date),
  activeDate: React.PropTypes.instanceOf(Date).isRequired,
  changeMode: React.PropTypes.func.isRequired,
  renderGridMonth: React.PropTypes.func,
};
