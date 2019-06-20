import React from 'react';
import CampaignsTable from '../campaigns-table';
// import CampaignsFilter from '../campaigns-filter.jsx';

function Campaigns(props) {
    return (
        <div>
            <div class="page-heading">
                <h1 class="page-title">Campaigns</h1>
            </div>

            <CampaignsTable />
        </div>
    )
}


export default Campaigns;