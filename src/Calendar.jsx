import classNames from 'classnames';

import ViewMode from './ViewMode';
import RangeSelect from './RangeSelect';
import Grid from './Grid';

function getMidnight(date) {
  const resultDate = date ? new Date(date.getTime()) : new Date();
  resultDate.setHours(0, 0, 0, 0);
  return resultDate;
}

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);

    const date = getMidnight(props.activeDate);
    date.setDate(1);

    this.state = {
      viewMode: ViewMode.MONTH,
      date,
    };

    this._prevRangeHandler = this._prevRange.bind(this);
    this._nextRangeHandler = this._nextRange.bind(this);
    this._changeModeHandler = this._changeMode.bind(this);
  }

  _shiftRange(direction) {
    let factor = 1;

    if (direction === 'backward') {
      factor = -1;
    }

    switch (this.state.viewMode) {
      case ViewMode.DECADE:
        this.setState(prevState => {
          const date = new Date(prevState.date.getTime());
          date.setFullYear(date.getFullYear() + factor * 10);
          return { date };
        });
        break;
      case ViewMode.YEAR:
        this.setState(prevState => {
          const date = new Date(prevState.date.getTime());
          date.setFullYear(date.getFullYear() + factor * 1);
          return { date };
        });
        break;
      case ViewMode.MONTH:
        this.setState(prevState => {
          const date = new Date(prevState.date.getTime());
          date.setMonth(date.getMonth() + factor * 1);
          return { date };
        });
        break;
      default:
        throw new Error('Unexpected value of "this.state.viewMode"');
    }
  }

  _prevRange() {
    this._shiftRange('backward');
  }

  _nextRange() {
    this._shiftRange('forward');
  }

  _changeMode(viewMode, date) {
    this.setState({
      viewMode,
      date,
    });
  }

  render() {
    return (
      <div className={classNames('calendar', this.props.className)}>
        <RangeSelect
          viewMode={this.state.viewMode}
          locale={this.props.locale}
          date={this.state.date}
          prevRange={this._prevRangeHandler}
          nextRange={this._nextRangeHandler}
          changeMode={this._changeModeHandler}
        />
        <Grid
          viewMode={this.state.viewMode}
          locale={this.props.locale}
          startOfWeek={this.props.startOfWeek}
          date={this.state.date}
          activeDate={getMidnight(this.props.activeDate)}
          changeMode={this._changeModeHandler}
          onSelectDate={this.props.onSelectDate}
          renderGridYear={this.props.renderGridYear}
          renderGridMonth={this.props.renderGridMonth}
          renderGridDate={this.props.renderGridDate}
        />
      </div>
    );
  }
}

Calendar.defaultProps = {
  locale: Intl.DateTimeFormat.supportedLocalesOf(
    [window.navigator.language, 'en'],
  )[0],
  startOfWeek: 1,
  activeDate: getMidnight(),
};

Calendar.propTypes = {
  className: React.PropTypes.string,
  locale: React.PropTypes.string,
  startOfWeek: React.PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
  activeDate: React.PropTypes.instanceOf(Date),
  onSelectDate: React.PropTypes.func,
  renderGridYear: React.PropTypes.func,
  renderGridMonth: React.PropTypes.func,
  renderGridDate: React.PropTypes.func,
};
