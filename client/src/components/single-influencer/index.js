import React, { Component }from 'react';
import InfluencerProfile from './influencer-profile';
import SingleCampaignInputForm from './single-campaign-input-form';
import InfluencerHistory from './influencer-history';
import '../single-influencer/single-influencer.css';
// import API from '../utility/API';

class SingleInfluencer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            InfluencerProfileInfo:[]
        };
    }

    updateState = InfluencerProfileInfo => {
        this.setState({ InfluencerProfileInfo });
        
    };


    render () {
        let socialAccount = this.props.location.state.socialAccount
        console.log (socialAccount)
        return (
            <div>
                <h2>{this.props.UserInfo.name}</h2>
                <div class="single-influencer-div">
                    <div class="column column-left">
                        <InfluencerProfile socialAccount={socialAccount} InfluencerProfileInfo={this.state.InfluencerProfileInfo}/>
                    </div>
                    <div class="column column-center">
                        <InfluencerHistory socialAccount={socialAccount} InfluencerProfileInfo={this.updateState}/>
                    </div>
                    <div class="column column-right">
                        <SingleCampaignInputForm socialAccount={socialAccount} UserInfo={this.props.UserInfo}/>
                    </div>
                </div>
    
            </div>
        )
    }   
};
export default SingleInfluencer;