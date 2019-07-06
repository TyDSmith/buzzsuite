import React, { Component } from "react";
// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";
import API from "../utility/API"

class CampaignsTable extends Component {
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
      console.log (this.props.userID)
      API.getCampaignById(this.props.userID)
      //   .then(res => console.log(res.data)) 
        .then(res => this.setState({ influencer: res.data }, ()=> console.log(this.state)))
        .catch(err => console.log(err));
        // console.log(this.state.influencer)
    };

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

export default CampaignsTable;
