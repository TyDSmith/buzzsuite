import React, { Component } from "react";
// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";
import API from '../utility/API';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

class Influencers extends Component {
  constructor(props) {
      super(props);
      this.state = {
        influencer: []
      };
    }
    
  
    componentDidMount() {
      this.loadInfluencers();
    }
    
  
    loadInfluencers = () => {
      API.getInfluencers()
      //   .then(res => console.log(res.data)) 
        .then(res => this.setState({ influencer: res.data }, ()=> console.log(this.state)))
        .catch(err => console.log(err));
      //   console.log(this.state)
    };

  render(){
      const columns = [
          
          {
              Header: "Account",
              accessor: "influencerAccount",
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
      data = {this.state.influencer}
  >


</ReactTable>

       

      )
  };
}

export default Influencers;