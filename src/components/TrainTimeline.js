import React from 'react'

/**
 * This class renders the main timeline of the application with image of the train (residing on an imgur server)
 */
class TrainTimeline extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div>
        <div
          className={this.props.hasActual ? 'callingpoints-timeline-img passed' : 'callingpoints-timeline-img default'}>
        </div>
        {this.props.hasActual ?
          <div>
            <div className='callingpoints-timeline-back'
                 style={this.props.currentCallingPoint ? {height: '60px'} : {height: '90px'}}>
            </div>
            <div className='callingpoints-timeline-over'
                 style={this.props.currentCallingPoint ? {height: '90px'} : {height: '120px'}}>
            </div>
            {this.props.currentCallingPoint ?
              <div className='callingpoints-timeline-imgtrain'>
                <img src={'http://i.imgur.com/5lO8K80.png'}></img></div> : ''}
          </div>

          : ''}
      </div>
    )
  }
}
export default TrainTimeline
