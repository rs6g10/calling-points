import React from 'react'

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
