import React from 'react';
import CampaignsTable from './campaigns-table';
// import CampaignsFilter from '../campaigns-filter.jsx';

function Campaigns(props) {
    console.log (props.UserInfo.data.email)
    return (
        <div>
            <div class="page-heading">
                <h1 class="page-title">Campaigns</h1>
            </div>
            <h1>Welcome Back, {props.UserInfo.data.email}</h1>
            <CampaignsTable />
        </div>
    )
}


export default Campaigns;