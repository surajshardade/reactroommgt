import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css";
class TableView extends Component {
  state = {};
  render() {
    // let i;
    // for (i = 0; i < this.props.arrobject.length; i++) {
    //   console.log(this.props.arrobject[i].name);
    // }

    const bordhead = {
      borderBottom: "1px solid red",
      backgroundColor: "lightgrey",
      textAlign: "center"
    };
    return (
      <div>
        <p style={bordhead}>Room Members List</p>
        <BootstrapTable data={this.props.arrobject}>
          <TableHeaderColumn dataField="name">Name</TableHeaderColumn>
          <TableHeaderColumn isKey dataField="number">
            Number
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default TableView;
