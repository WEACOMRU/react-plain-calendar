import capitalize from 'lodash/capitalize';

import ViewMode from './ViewMode';

export default class RangeSelect extends React.Component {
  constructor(props) {
    super(props);

    this._prevRangeHandler = () => this.props.prevRange();
    this._nextRangeHandler = () => this.props.nextRange();
    this._toggleModeHandler = () => this._toggleMode();
  }

  _toggleMode() {
    switch (this.props.viewMode) {
      case ViewMode.DECADE:
        break;
      case ViewMode.YEAR:
        this.props.changeMode(ViewMode.DECADE, this.props.date);
        break;
      case ViewMode.MONTH:
        this.props.changeMode(ViewMode.YEAR, this.props.date);
        break;
      default:
        throw new Error('Unexpected value of "viewMode"');
    }
  }

  render() {
    let range;

    switch (this.props.viewMode) {
      case ViewMode.DECADE: {
        const currentYear = this.props.date.getFullYear();
        const startYear = currentYear - currentYear % 10;
        const endYear = startYear + 9;
        range = `${startYear} - ${endYear}`;
        break;
      }
      case ViewMode.YEAR:
        range = this.props.date.getFullYear();
        break;
      case ViewMode.MONTH: {
        const month = new Intl.DateTimeFormat(
          this.props.locale, { month: 'long' },
        ).format(this.props.date);
        range = `${capitalize(month)} ${this.props.date.getFullYear()}`;
        break;
      }
      default:
        throw new Error('Unexpected value of "viewMode"');
    }

    return (
      <div className="calendar-range-select">
        <button
          className="fa fa-angle-left calendar-range-select__prev"
          onClick={this._prevRangeHandler}
        />
        <button
          className="calendar-range-select__caption"
          onClick={this._toggleModeHandler}
        >{range}</button>
        <button
          className="fa fa-angle-right calendar-range-select__next"
          onClick={this._nextRangeHandler}
        />
      </div>
    );
  }
}

RangeSelect.propTypes = {
  viewMode: React.PropTypes.oneOf(Object.values(ViewMode)),
  locale: React.PropTypes.string.isRequired,
  date: React.PropTypes.instanceOf(Date),
  prevRange: React.PropTypes.func.isRequired,
  nextRange: React.PropTypes.func.isRequired,
  changeMode: React.PropTypes.func.isRequired,
};
