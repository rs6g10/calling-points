import React from 'react'

/**
 * This class renders the calling points of the application as a list item
 */
class CallingPoint extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <li className={this.props.listClassName}>
        <div className='calling-point-time'>{this.props.callingPoint.scheduled}</div>
        <div className={this.props.callingPointTimeActualClassName}>{this.props.callingPoint.expected}</div>

        <div className={this.props.stationContainerClassName}>
          <div className={this.props.stationContainerDecoratorClassName}>
            <div className={this.props.overlineDecoratorClassName}></div>
            <i className='icon icon-train-circle' />
            <div className={this.props.stationClassName}>
              {this.props.callingPoint.station}
            </div>
            <div className={this.props.callingPointDueClassName}>
              <span className={this.props.dueInfoClassName}>{this.props.callingPoint.dueTime}</span>
              <span style={{float: 'right'}}>{this.props.callingPoint.platformName}</span>
            </div>
          </div>
        </div>
      </li>
    )
  }


}
export default CallingPoint
