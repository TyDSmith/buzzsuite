import React, { Component } from "react";
// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";
import API from "../../Utils";

class InfluencersTable extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     data: makeData()
  //   };
  // }
  state = {
    influencers: []
  };

  componentDidMount() {
    this.loadInfluencers();
  }

  loadInfluencers = () => {
    API.getInfluencers()
      .then(res => this.setState({ influencers: res.data }))
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
                  accessor: "hello world"
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
