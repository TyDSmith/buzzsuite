import React, { Component } from 'react';
import InfluencersTable from './influencers-table';
import InfluencersFilter from './influencers-filter';
import AddInfluencerButton from './add-influencer-btn';
import "./influencers.css";


class Influencers extends Component {

    

    render() {
        return (
            <div>
                <div class="page-heading">
                    <h1 class="page-title">Influencers</h1>
                    <h1>Welcome Back, {this.props.UserInfo.data.firstName} {this.props.UserInfo.data.lastName} </h1>
                    <AddInfluencerButton UserInfo={this.props.UserInfo}/>
    
                </div>
                <div id="influencersfilterdiv">
                    <InfluencersFilter />
                </div>
                <InfluencersTable />
            </div>
        )   
    }
    
}


export default Influencers;

