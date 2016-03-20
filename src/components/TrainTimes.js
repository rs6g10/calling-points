import React from 'react'

class TrainTimes extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div
        className={this.props.hasActual ? 'callingpoints-timeline-schedule passed' : 'callingpoints-timeline-schedule default'}>
        <h1 className='thick'>{this.props.callingPoint.scheduled}</h1>
        {this.props.callingPoint.platform.length > 0 ?
          <div
            className={this.props.hasActual ? 'callingpoints-expected' : 'minutesLate'}>{this.props.callingPoint.expected}</div> : ''}
      </div>
    )
  }
}
export default TrainTimes
