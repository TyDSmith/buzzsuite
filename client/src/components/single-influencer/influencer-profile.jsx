import React, { Component } from "react";


class InfluencerProfile extends Component {
  
  
  render() {
    return (
      <div class="influencer-profile">
        <h3>{this.props.socialAccount}</h3>
        <h5>Twitter</h5>
        <div class="influencer-profile-stats">
          <p>
            Average CPM: <span>{this.props.InfluencerProfileInfo.avgCPM}</span>
          </p>
          <p>
            Average CPC: <span>{this.props.InfluencerProfileInfo.avgCPC}</span>
          </p>
          <p>
            Average CPE: <span>{this.props.InfluencerProfileInfo.avgCPE}</span>
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
