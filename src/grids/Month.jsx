import classNames from 'classnames';
import shortid from 'shortid';

export default function Month(props) {
  const rangeMonth = props.date.getMonth();
  const activeTime = props.activeDate.getTime();

  const date = new Date(props.date.getTime());
  let shift = 1 + props.startOfWeek - date.getDay();
  if (shift > 0) {
    shift -= 7;
  }
  date.setDate(shift);

  const weekdayLabel = new Intl.DateTimeFormat(
    props.locale, { weekday: 'short' },
  );
  const weekdaysLabels = [];
  const daysGrid = [];

  for (let i = 0; i < 42; i += 1) {
    const isOutside = date.getMonth() !== rangeMonth;
    const isActive = date.getTime() === activeTime;

    daysGrid.push(
      <li
        key={shortid.generate()}
        className="calendar-grid__item"
      >
        {props.renderGridDate(
          date.getDate(),
          new Date(date.getTime()),
          props.onSelectDate,
          {
            isOutside,
            isActive,
          },
        )}
      </li>,
    );

    if (weekdaysLabels.length < 7) {
      weekdaysLabels.push(
        <li
          key={shortid.generate()}
          className="calendar-grid__item"
        >
          {weekdayLabel.format(date)}
        </li>,
      );
    }

    date.setDate(date.getDate() + 1);
  }

  return (
    <div className="calendar-month">
      <ul className="calendar-grid calendar-grid_weekdays">
        {weekdaysLabels}
      </ul>
      <ul className="calendar-grid calendar-grid_month">
        {daysGrid}
      </ul>
    </div>
  );
}

Month.defaultProps = {
  onSelectDate: () => {},
  renderGridDate: (label, date, onSelect, options) => (
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

Month.propTypes = {
  locale: React.PropTypes.string.isRequired,
  startOfWeek: React.PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]).isRequired,
  date: React.PropTypes.instanceOf(Date).isRequired,
  activeDate: React.PropTypes.instanceOf(Date).isRequired,
  onSelectDate: React.PropTypes.func,
  renderGridDate: React.PropTypes.func,
};
