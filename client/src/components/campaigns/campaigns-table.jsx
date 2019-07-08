import React, { Component } from "react";
// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";
// import API from "../utility/API"

class CampaignsTable extends Component {

  render(){
      console.log (this.props.campaigns)
    
      const columns = [
          {
              Header: "Account",
              accessor: "influencerAccount"
          },

          {
              Header: "Channel",
              accessor: "channel"
          },

          {
              Header: "Date",
              accessor: "date"
          },

          {
              Header: "Product",
              accessor: "service"
          },

          {
              Header: "$ CPM",
              accessor: "CPM"
          },

          {
              Header: "CPC",
              accessor: "CPC"
          },

      ]


  return (

  <ReactTable
    defaultPageSize={8}
    columns = {columns}
    data = {this.props.campaigns}
  >


  </ReactTable>

)
};
}

export default CampaignsTable;
