import classNames from 'classnames';
import shortid from 'shortid';

import ViewMode from '../ViewMode';

export default function Decade(props) {
  let year = props.date.getFullYear();
  const rangeStart = year - year % 10;
  const rangeEnd = rangeStart + 9;
  const activeDate = new Date(props.activeDate.getTime());
  activeDate.setMonth(0, 1);
  const activeTime = activeDate.getTime();

  const date = new Date(props.date.getTime());
  date.setFullYear(rangeStart - 1, 0);
  const yearsGrid = [];

  for (let i = 0; i < 12; i += 1) {
    year = date.getFullYear();
    const isOutside = year < rangeStart || year > rangeEnd;
    const isActive = date.getTime() === activeTime;

    yearsGrid.push(
      <li
        key={shortid.generate()}
        className="calendar-grid__item"
      >
        {props.renderGridYear(
          year,
          new Date(date.getTime()),
          date => props.changeMode(ViewMode.YEAR, date),
          {
            isOutside,
            isActive,
          },
        )}
      </li>,
    );

    date.setFullYear(year + 1);
  }

  return (
    <ul className="calendar-grid calendar-grid_decade">
      {yearsGrid}
    </ul>
  );
}

Decade.defaultProps = {
  renderGridYear: (label, date, onSelect, options) => (
    <button
      className={classNames(
        'calendar-grid__date',
        {
          'calendar-grid__date_outside': options.isOutside,
          'calendar-grid__date_active': options.isActive,
        },
      )}
      onClick={() => onSelect(date)}
    >
      {label}
    </button>
  ),
};

Decade.propTypes = {
  date: React.PropTypes.instanceOf(Date),
  activeDate: React.PropTypes.instanceOf(Date).isRequired,
  changeMode: React.PropTypes.func.isRequired,
  renderGridYear: React.PropTypes.func,
};
