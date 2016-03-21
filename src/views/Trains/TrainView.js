import React from 'react';
import TrainTimes from './../../components/TrainTimes'
import TrainPlatform from './../../components/TrainPlatform'
import TrainTimeline from './../../components/TrainTimeline'
import Header from './../../components/Header'
import CallingPoint from './../../components/CallingPoint'

const data = require('./ldb.json')

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

    // Empty array to render the list itmes
    let callingPointItems2 = [];
    // Start working with the obtained json data
    this.ldbData.callingPoints.map((callingPoint, i) => {
      // hasActual denotes the fact that the train has actually passed a station
      if (i == (this.ldbData.callingPoints.length - 1)) {
        //hasActual = false;
      }
      // Is this where the train currently is? Yes.
      let currentCallingPoint2 = true;
      if ((i < (this.ldbData.callingPoints.length - 1)) && (this.ldbData.callingPoints[i + 1].hasOwnProperty('actual'))) {
        currentCallingPoint2 = false;
      }
      //This is an extra check, if the journey is complete then current calling point must be the station before destination
      if (i+2 == (this.ldbData.callingPoints.length)) {
        currentCallingPoint2 = true;
      }
      // departed = icon in middle
      //current = currently the train is where?
      let listClassName = 'calling-point departed';
      let stationClassName = 'calling-point-station departed';
      let stationContainerClassName = 'calling-point-station-container departed';
      let overlineDecorator = 'calling-point-station-container-overline departed';
      if(i == 0){
        listClassName = 'calling-point selected';
        stationClassName = 'calling-point-station';
        stationContainerClassName = 'calling-point-station-container';
        overlineDecorator = 'calling-point-station-container-overline';
      }

      if(i == this.ldbData.callingPoints.length - 1){
        listClassName = 'calling-point selected destination';
        stationClassName = 'calling-point-station';
        stationContainerClassName = 'calling-point-station-container';
        overlineDecorator = 'calling-point-station-container-overline';
      }

      // Now create properties for the components
      let componentProps =
      {
        callingPoint: callingPoint,
        listClassName: listClassName,
        stationClassName: stationClassName,
        stationContainerClassName: stationContainerClassName,
        overlineDecorator: overlineDecorator,
        currentCallingPoint: currentCallingPoint2
      };

      // Create list items because that's what we will render
      callingPointItems2.push(


        <CallingPoint {...componentProps} />

      )
    });

    return (
      <div>
        <div>
          <Header {...this.ldbData.journey}/>
          <ul className='calling-points'>
            {callingPointItems2}
          </ul>
        </div>
        <div style={{float: 'left'}}>
          <Header {...this.ldbData.journey}/>
          <ul id='callingpoints-timeline'>
            {callingPointItems}
          </ul>
        </div>
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
