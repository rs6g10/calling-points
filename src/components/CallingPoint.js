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
        <div className={this.props.stationContainerClassName}>
          <div className={this.props.overlineDecorator}></div>
          <i className='icon icon-train-circle' />
          <div className={this.props.stationClassName}>
          </div>
          <div className='calling-point-due'>
            <span></span>
            <span></span>
          </div>
        </div>
      </li>
    )
  }
}
export default Header
