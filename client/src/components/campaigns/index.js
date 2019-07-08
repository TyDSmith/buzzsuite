import React from 'react';
import CampaignsTable from './campaigns-table';
import AddCampaignButton from './add-campaign-btn';
import Footer from "../footer";
// import CampaignsFilter from '../campaigns-filter.jsx';



function Campaigns(props) {

    return (
        <div className="page-start">
            <div class="page-heading">
                <h1 class="page-title">Campaigns</h1>
                <span class="add-btn-span"><AddCampaignButton UserInfo={props.UserInfo} /></span>
            </div>
            <CampaignsTable userID={props.UserInfo.data._id} />
            <Footer />
        </div>
    )
}

export default Campaigns;