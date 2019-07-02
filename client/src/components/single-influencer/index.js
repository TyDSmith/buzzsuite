import React from 'react';
import InfluencerProfile from './influencer-profile';
import CampaignInputForm from './campaign-input-form';
import InfluencerHistory from './influencer-history';
import '../single-influencer/single-influencer.css';
import API from '../utility/API';

function SingleInfluencer(props) {

// function getHistory() {
//     API.getInfluencers().then((data) => console.log(data))





    return (
        <div>
            <h2>Influencer name goes here</h2>
            <h1>Welcome Back, {props.UserInfo.data.firstName} {props.UserInfo.data.lastName} </h1>
            <div class="single-influencer-div">
                <div class="column column-left">
                    <InfluencerProfile UserInfo={props.UserInfo}/>
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
};
export default SingleInfluencer;