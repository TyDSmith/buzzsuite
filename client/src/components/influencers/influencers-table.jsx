import React, { Component } from "react";
// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";
// import API from '../utility/API';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

class Influencers extends Component {

  render(){
      const columns = [
          
          {
              Header: "Account",
              accessor: "socialAccount",
              Cell: e => <Link to = {{
                pathname:"/Influencer",
                state:{socialAccount: e.value}
              }} > {e.value} </Link>
            
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
              accessor: "channel"
          },

          {
              Header: "$ CPM",
              accessor: "avgCPM",
              Cell: e => `$ ${e.value}`
          },

          {
              Header: "$ CPC",
              accessor: "avgCPC",
              Cell: e => `$ ${e.value}`
          },
          {
            Header: "$ CPE",
            accessor: "avgCPE",
            Cell: e => `$ ${e.value}`
        },

      ]


  return (

      <ReactTable
      defaultPageSize={8}
      columns = {columns}
      data = {this.props.influencers}
  >

</ReactTable>
      )
  };
}

export default Influencers;