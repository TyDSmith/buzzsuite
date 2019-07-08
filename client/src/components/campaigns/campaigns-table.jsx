import React, { Component } from "react";
import ReactTable from "react-table";
import Moment from "react-moment"
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
              accessor: "date",
              Cell: e =>  <Moment format="YYYY/MM/DD">{e.value}</Moment>
          },

          {
              Header: "Product",
              accessor: "service"
          },

          {
              Header: "$ CPM",
              accessor: "CPM",
              Cell: e => `$ ${e.value}`
          },

          {
              Header: "$ CPC",
              accessor: "CPC",
              Cell: e => `$ ${e.value}`
          },

          {
            Header: "$ CPE",
            accessor: "CPE",
            Cell: e => `$ ${e.value}`
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
