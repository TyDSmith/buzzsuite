import React, { Component } from "react";
// Import React Table
import ReactTable from "react-table";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import "react-table/react-table.css";
import API from "../utility/API"

class CampaignsTable extends Component {

    removeCampaign = (id) => {
        
        API.deleteCampaign(id).then((res) => {
            
            if (res.status === 200) {
                this.props.loadCampaign()
            }
        }).catch(console.error());
    
    }

  render(){
    
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
          {
            Header: "Remove Campaign",
            accessor: "X",

            Cell: e => <button onClick={() => this.removeCampaign(e.original._id)}> {e.value} </button>
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
