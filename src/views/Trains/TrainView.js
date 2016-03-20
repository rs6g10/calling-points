import React from 'react';
import TrainTimes from './../../components/TrainTimes'
import TrainPlatform from './../../components/TrainPlatform'
import TrainTimeline from './../../components/TrainTimeline'
import Header from './../../components/Header'

const data = require('./data.json')

class TrainView extends React.Component {
  constructor(props){
    super(props);
    this.props = props;
    this.ldbData = props.data || data;
  }

  render() {
    let callingPointItems = [];
    this.ldbData.callingPoints.map((callingPoint, i) => {
      let hasActual = callingPoint.hasOwnProperty('actual');
      if (i == (this.ldbData.callingPoints.length - 1)) {
        hasActual = false;
      }
      let currentCallingPoint = true;
      if ((i < (this.ldbData.callingPoints.length - 1)) && (this.ldbData.callingPoints[i + 1].hasOwnProperty('actual'))) {
          currentCallingPoint = false;
      }
      //This is an extra check, if the journey is complete then current calling point must be the station before destination
      if (i+2 == (this.ldbData.callingPoints.length)) {
        currentCallingPoint = true;
      }
      let remainingTime = this.getRemainingMinutes(callingPoint.scheduled, callingPoint.expected);
      let componentProps =
      {
        hasActual: hasActual,
        callingPoint: callingPoint,
        remainingTime: remainingTime,
        currentCallingPoint: currentCallingPoint
      };

      callingPointItems.push(
        <li className='callingpoints-timeline-block'>
          <TrainTimes {...componentProps}/>
          <TrainPlatform {...componentProps} />
          <TrainTimeline {...componentProps} />
        </li>
      )
    });
    return (
      <div>
       <Header {...this.ldbData.journey}/>
        <ul id='callingpoints-timeline'>
          {callingPointItems}
        </ul>
      </div>
    )
  }

  getRemainingMinutes(startTime, endTime) {
    let timeStart = new Date("01/01/2016 " + startTime).getTime();
    let timeEnd = new Date("01/01/2016 " + endTime).getTime();
    let remainingMinutes = (timeEnd - timeStart) / (1000 * 60);
    return timeEnd - timeStart === 0 ? 'On time' : remainingMinutes + ' min late';
  }
}
export default TrainView
