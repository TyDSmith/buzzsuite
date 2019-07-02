import React, { Component } from "react";
// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";
import API from '../utility/API';

class InfluencersTable extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  

  componentDidMount() {
    console.log("Fuck off")
    this.loadInfluencers();
  }
  

  loadInfluencers = () => {
    console.log("hello world")
    API.getInfluencers()
      .then(res => this.setState({ influencers: res.data }), console.log(this.state))
      .catch(err => console.log(err));
  };

  render() {
    const { data } = this.state;
    return (
<div>
        <ReactTable
          data={data}
          defaultPageSize={8}
          
          columns={[
            {
              Header: "Accounts",
              columns: [
                {
                 Header:"Accounts",
                 id: "Accounts",
                 accessor: "hello world"
                },
                {
                  Header: "Channel",
                  id: "channel",
                  accessor: "twitter"
                },
                {
                  Header: "Product",
                  id: "product",
                  accessor: d => d.product
                },
                {
                  Header: "username",
                  id: "username",
                  accessor: d => d.username
                }
              ]
            },
            {
              Header: "Metrics",
              columns: [
                {
                  Header: "CPM",
                  id: "cpm",
                  accessor: d => d.cpm
                },
                {
                  Header: "CPC",
                  id: "cpc",
                  accessor: d => d.cpc
                }
              ]
            }
          ]}
        />
      </div>
    );
  }
}

export default InfluencersTable;
