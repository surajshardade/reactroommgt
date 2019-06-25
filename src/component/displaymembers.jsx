import React, { Component } from "react";
import TableView from "./tableview";
class DisplayMembers extends Component {
  render() {
    const arr = this.props.roommembers;
    const listItems = arr.map(item => (
      <li key={item.number}>
        {item.number}
        {item.name}
      </li>
    ));

    //<ul>{listItems ? listItems : ""}</ul>

    return (
      <div>
        <TableView arrobject={arr} />
      </div>
    );
  }
}

export default DisplayMembers;
