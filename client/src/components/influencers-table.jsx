import React, { Component } from "react";

class InfluencersTable extends Component {
  render() {
    return (
      <div>
        <p> This is the Influencer table</p>
        <table id="influencer-table">
          <tr id="influencer-table-heading">
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Age</th>
          </tr>
          <tr>
            <td>Jill</td>
            <td>Smith</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Eve</td>
            <td>Jackson</td>
            <td>94</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default InfluencersTable;
