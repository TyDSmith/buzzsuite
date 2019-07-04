import React, {Component} from 'react';
import CampaignsTable from './campaigns-table';
import ReactTable from "react-table";
import "react-table/react-table.css"
import AddCampaignButton from './add-campaign-btn';
// import CampaignsFilter from '../campaigns-filter.jsx';
import API from '../utility/API';

class Campaigns extends Component {
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

// function Campaigns(props) {

//     return (
//         <div>
//             <div class="page-heading">
//                 <h1 class="page-title">Campaigns</h1>
//             </div>
//             <h1>Welcome Back, {props.UserInfo.data.firstName} {props.UserInfo.data.lastName} </h1>
//             <CampaignsTable />
//             <AddCampaignButton />
//         </div>
//     )
// }

        
       
        // <div>
        //     <div class="page-heading">
        //         <h1 class="page-title">Campaigns</h1>
        //     </div>
        //     {/* <h1>Welcome Back, {props.UserInfo.data.firstName} {props.UserInfo.data.lastName} </h1> */}
        //     <CampaignsTable />
        // </div>
)
};
}

export default Campaigns;