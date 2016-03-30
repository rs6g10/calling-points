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
      <div className="header">
        <span className="thick">{this.props.scheduled}</span>
        <span className="titleHeading">
          {this.props.origin} to {this.props.destination}
        </span>
      </div>
    )
  }
}
export default Header
