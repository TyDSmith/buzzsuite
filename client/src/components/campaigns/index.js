import React from 'react';
import CampaignsTable from './campaigns-table';
import AddCampaignButton from './add-campaign-btn';
// import CampaignsFilter from '../campaigns-filter.jsx';



function Campaigns(props) {
    return (
        <div>
            <div class="page-heading">
                <h1 class="page-title">Campaigns</h1>
                <span class="add-btn-span"><AddCampaignButton /></span>
            </div>
            <CampaignsTable />
        </div>
    )
}

export default Campaigns;