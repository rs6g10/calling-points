import React from 'react';
import TrainTimes from './../../components/TrainTimes'
import TrainPlatform from './../../components/TrainPlatform'
import TrainTimeline from './../../components/TrainTimeline'
import Header from './../../components/Header'
import CallingPoint from './../../components/CallingPoint'

const data = require('./data.json')

class TrainView extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.ldbData = props.data || data;
  }

  render() {
    // Empty array to render the list itmes
    let callingPointItems = [];
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
      //Source
      if (i == 0) {
        listClassName += ' origin';
      }
      //Destination
      if (i == this.ldbData.callingPoints.length - 1) {
        listClassName += ' destination';
      }

      callingPoint.dueTime = this.getRemainingMinutes(callingPoint.scheduled, callingPoint.expected);
      callingPoint.platformName = callingPoint.platform.length > 0 ? `Platform ${callingPoint.platform}` : 'Platform -';
      if (callingPoint.dueTime.indexOf('On') == -1) {
        dueInfoClassName += ' late';
        callingPointTimeActualClassName += ' late';
      }
      else if (i == 0) {
        callingPoint.expected = '';
      }
      //check if train is currently at the station
      if (currentCallingPoint) {
        listClassName += ' current';
        stationClassName += ' current';
        stationContainerClassName += ' current';
        overlineDecoratorClassName += ' current';
        stationContainerDecoratorClassName += ' current';
      }
      //check if the train has departed the station
      if (hasActual && i < this.ldbData.callingPoints.length - 1) {
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
      callingPointItems.push(
        <CallingPoint {...componentProps} />
      )
    });

    return (

      <div>
        <Header {...this.ldbData.journey}/>
        <ul className='calling-points'>
          {callingPointItems}
        </ul>
      </div>
    )
  }

  /**
   * Get remaining time in minutes
   * @param startTime - scheduled time
   * @param endTime - expected time
   * @returns {string} - formatted time in minutes
   */
  getRemainingMinutes(startTime, endTime) {
    let timeStart = new Date("01/01/2016 " + startTime).getTime();
    let timeEnd = new Date("01/01/2016 " + endTime).getTime();
    let remainingMinutes = (timeEnd - timeStart) / (1000 * 60);
    return timeEnd - timeStart === 0 ? 'On time' : remainingMinutes + ' min late';
  }
}
export default TrainView
