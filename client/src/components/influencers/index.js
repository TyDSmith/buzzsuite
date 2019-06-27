import React from 'react';
import InfluencersTable from './influencers-table';
import InfluencersFilter from './influencers-filter';
import AddInfluencerButton from './add-influencer-btn';
import "./influencers.css";

function Influencers(props) {
    return (
        <div>
            <div class="page-heading">
                <h1 class="page-title">Influencers</h1>
                <h1>Welcome Back, {props.UserInfo.data.firstName} {props.UserInfo.data.lastName} </h1>
                <AddInfluencerButton />

            </div>
            <div id="influencersfilterdiv">
                <InfluencersFilter />
            </div>
            <InfluencersTable />
        </div>
    )
}


export default Influencers;

