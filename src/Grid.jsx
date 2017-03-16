import ViewMode from './ViewMode';
import Decade from './grids/Decade';
import Year from './grids/Year';
import Month from './grids/Month';

export default function Grid(props) {
  switch (props.viewMode) {
    case ViewMode.DECADE:
      return (
        <Decade
          date={props.date}
          activeDate={props.activeDate}
          changeMode={props.changeMode}
          renderGridYear={props.renderGridYear}
        />
      );
    case ViewMode.YEAR:
      return (
        <Year
          locale={props.locale}
          date={props.date}
          activeDate={props.activeDate}
          changeMode={props.changeMode}
          renderGridMonth={props.renderGridMonth}
        />
      );
    case ViewMode.MONTH:
      return (
        <Month
          locale={props.locale}
          startOfWeek={props.startOfWeek}
          date={props.date}
          activeDate={props.activeDate}
          onSelectDate={props.onSelectDate}
          renderGridDate={props.renderGridDate}
        />
      );
    default:
      throw new Error('Unexpected value of "props.viewMode"');
  }
}

Grid.propTypes = {
  viewMode: React.PropTypes.oneOf(Object.values(ViewMode)).isRequired,
  locale: React.PropTypes.string.isRequired,
  startOfWeek: React.PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]).isRequired,
  date: React.PropTypes.instanceOf(Date).isRequired,
  activeDate: React.PropTypes.instanceOf(Date).isRequired,
  changeMode: React.PropTypes.func.isRequired,
  onSelectDate: React.PropTypes.func,
  renderGridYear: React.PropTypes.func,
  renderGridMonth: React.PropTypes.func,
  renderGridDate: React.PropTypes.func,
};
