import React, { Component } from "react";
//import "./component.css";
class RoomMember extends Component {
  state = {};
  render() {
    console.log("Inside AddMember render", this.props);
    return (
      <div>
        <input
          type="text"
          className="input"
          placeholder="Enter Full Name"
          onChange={this.props.handleOnChange}
        />
        <br /> <br />
        <input
          type="text"
          className="input"
          placeholder="Enter Mobile Number"
          onChange={this.props.handleOnChange}
        />
      </div>
    );
  }
}

export default RoomMember;
