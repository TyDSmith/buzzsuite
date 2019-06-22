import React from 'react';
import InfluencerProfile from './influencer-profile';
import CampaignInputForm from './campaign-input-form';
import InfluencerHistory from './influencer-history';
import '../single-influencer/single-influencer.css';


function SingleInfluencer(props) {
    return (
        <div>
            <h2>Influencer name goes here</h2>
            <div class="single-influencer-div">
                <div class="column column-left">
                    <InfluencerProfile />
                </div>
                <div class="column column-center">
                    <InfluencerHistory />
                </div>
                <div class="column column-right">
                    <CampaignInputForm />
                </div>
            </div>

        </div>
    )
}

export default SingleInfluencer;