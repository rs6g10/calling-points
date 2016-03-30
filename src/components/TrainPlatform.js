import React from 'react'

/**
 * This class renders the platform information of the application
 */
class TrainPlatform extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className={this.props.hasActual ? 'callingpoints-timeline-content passed' : 'callingpoints-timeline-content default'}>
        <h1>{this.props.callingPoint.station}</h1>
        <div className={this.props.hasActual ?  'callingpoints-latedetail' : 'minutesLate'}>{this.props.remainingTime}</div>
        <div className='callingpoints-platform'>Platform <span
          className='thick'>{this.props.callingPoint.platform.length > 0 ? this.props.callingPoint.platform : '-'}</span></div>
      </div>
    )
  }
}
export default TrainPlatform
