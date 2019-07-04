import React from 'react';
import InfluencerProfile from './influencer-profile';
import SingleCampaignInputForm from './single-campaign-input-form';
import InfluencerHistory from './influencer-history';
import '../single-influencer/single-influencer.css';


function SingleInfluencer(props) {
    return (
        <div>
            <h2>Influencer name goes here</h2>
            <h1>Welcome Back, {props.UserInfo.data.firstName} {props.UserInfo.data.lastName} </h1>
            <div class="single-influencer-div">
                <div class="column column-left">
                    <InfluencerProfile />
                </div>
                <div class="column column-center">
                    <InfluencerHistory />
                </div>
                <div class="column column-right">
                    <SingleCampaignInputForm />
                </div>
            </div>

        </div>
    )
}

export default SingleInfluencer;