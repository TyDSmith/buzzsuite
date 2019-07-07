import React, { Component } from "react";


class InfluencerProfile extends Component {
  
  
  render() {
    console.log (this.props)
    return (
      <div class="influencer-profile">
        <h3>{this.props.InfluencerProfileInfo.name}</h3>
        <h5>Twitter</h5>
        <div class="influencer-profile-stats">
          <p>
            Average CPM: <span>{this.props.InfluencerProfileInfo.avgCPM}</span>
          </p>
          <p>
            Average CPC: <span>{this.props.InfluencerProfileInfo.avgCPC}</span>
          </p>
          <p>
            Campaigns: <span>{this.props.InfluencerProfileInfo.numberOfCampaigns}</span>
          </p>
        </div>
      </div>
    );
  }
}

export default InfluencerProfile;
