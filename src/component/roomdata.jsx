import React, { Component } from "react";
import RoomMember from "./AddMember";
import DisplayMembers from "./displaymembers";
import { Button, Jumbotron } from "react-bootstrap";
//import "./component.css";

class RoomData extends Component {
  constructor() {
    super();
    this.state = { roommembers: [] };

    let firstName = "";
    let mobileNumber = "";
  }
  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="Heading">Room Management</h1>
          <br />
          <RoomMember handleOnChange={this.handleOnChange} />
          <Button
            className="button"
            variant="success"
            value={1}
            onClick={this.handleButton}
          >
            Click to Add Member
          </Button>
        </Jumbotron>
        <DisplayMembers roommembers={this.state.roommembers} />
      </div>
    );
  }

  handleButton = props => {
    console.log("Button Pressed ", this);
    //console.log(this.firstName, this.mobileNumber);
    let name = this.firstName;
    let number = this.mobileNumber;

    let obj = { name, number };
    //console.log(obj);

    let list = this.state.roommembers;
    list.push(obj);
    this.setState({ roommembers: list });
    //console.log(this.state.roommembers[0].name);
    //this.setState;
  };

  handleOnChange = props => {
    // console.log(
    //   "Handleon change",
    //   this.firstName,
    //   this.mobileNumber,
    //   props.target.placeholder
    // );
    if (props.target.placeholder === "Enter Full Name")
      this.firstName = props.target.value;
    else this.mobileNumber = props.target.value;

    console.log(this.firstName, this.mobileNumber);
  };
}

export default RoomData;
