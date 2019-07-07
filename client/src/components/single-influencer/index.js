import React from 'react';
import InfluencerProfile from './influencer-profile';
import SingleCampaignInputForm from './single-campaign-input-form';
import InfluencerHistory from './influencer-history';
import '../single-influencer/single-influencer.css';
// import API from '../utility/API';

function SingleInfluencer(props) {

    let socialAccount = props.location.state.socialAccount
    console.log (socialAccount)

    return (
        <div>
            <h2>Influencer name goes here</h2>
            <div class="single-influencer-div">
                <div class="column column-left">
                    <InfluencerProfile UserInfo={props.UserInfo}/>
                </div>
                <div class="column column-center">
                    <InfluencerHistory socialAccount={socialAccount}/>
                </div>
                <div class="column column-right">
                    <SingleCampaignInputForm UserInfo={props.UserInfo}/>
                </div>
            </div>

        </div>
    )
};
export default SingleInfluencer;