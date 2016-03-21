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
      // departed = icon in middle
      //current = currently the train is station
      let hasActual = callingPoint.hasOwnProperty('actual');
      let listClassName = 'calling-point';
      let stationClassName = 'calling-point-station';
      let callingPointTimeActualClassName = 'calling-point-time-actual';
      let stationContainerClassName = 'calling-point-station-container';
      let overlineDecoratorClassName = 'calling-point-station-container-overline';
      let stationContainerDecoratorClassName = 'calling-point-station-container-decorator';
      let callingPointDueClassName = 'calling-point-due';
      let dueInfoClassName = 'calling-point-dueInfo';
      let currentCallingPoint = hasActual;
      if ((i < (this.ldbData.callingPoints.length - 1)) && (this.ldbData.callingPoints[i + 1].hasOwnProperty('actual'))) {
        currentCallingPoint = false;
      }

      if(i == 0){
        listClassName += ' origin';
      }

      if(i == this.ldbData.callingPoints.length - 1)
      {
        listClassName += ' destination';
      }

      if(currentCallingPoint){
        listClassName += ' current';
        stationClassName += ' current';
        stationContainerClassName += ' current';
        overlineDecoratorClassName += ' current';
        stationContainerDecoratorClassName += ' current';
      }

      if(hasActual && i < this.ldbData.callingPoints.length - 1){
        listClassName += ' departed';
        stationClassName += ' departed';
        callingPointTimeActualClassName += ' departed';
        stationContainerClassName += ' departed';
        overlineDecoratorClassName += ' departed';
        stationContainerDecoratorClassName += ' departed';
        callingPointDueClassName += ' departed';
        dueInfoClassName += ' departed';
      }

      // Now create properties for the components
      let componentProps =
      {
        callingPoint: callingPoint,
        listClassName: listClassName,
        callingPointTimeActualClassName: callingPointTimeActualClassName,
        stationClassName: stationClassName,
        stationContainerClassName: stationContainerClassName,
        overlineDecoratorClassName: overlineDecoratorClassName,
        stationContainerDecoratorClassName: stationContainerDecoratorClassName,
        callingPointDueClassName: callingPointDueClassName,
        dueInfoClassName: dueInfoClassName
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
