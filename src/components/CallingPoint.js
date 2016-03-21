import React from 'react'

/**
 * This class renders the heading of the application that shows main information of Journey.
 */
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <li className={this.props.listClassName}>
        <div className='calling-point-time'>{this.props.callingPoint.expected}</div>
        <div className='calling-point-time-actual'>15:35</div>

        <div className={this.props.stationContainerClassName}>
          <div className={this.props.stationContainerDecoratorClassName}>
          <div className={this.props.overlineDecoratorClassName}></div>
          <i className='icon icon-train-circle' />
          <div className={this.props.stationClassName}>
            {this.props.callingPoint.station}
          </div>
          <div className={this.props.callingPointDueClassName}>
            <span className={this.props.dueInfoClassName}>9 min late</span>
            <span style={{float: 'right'}}>Platform 7</span>
          </div>
          </div>
        </div>
      </li>
    )
  }
}
export default Header
