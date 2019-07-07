import React, { Component } from "react";


class InfluencerProfile extends Component {
  
  // console.log (props)
  render() {
    return (
      <div class="influencer-profile">
        <h3>{this.props.UserInfo.data.firstName} {this.props.UserInfo.data.lastName}</h3>
        <h5>Twitter</h5>
        <div class="influencer-profile-stats">
          <p>
            Average CPM: <span>$7.26</span>
          </p>
          <p>
            Average CPC: <span>$0.75</span>
          </p>
          <p>
            Campaigns: <span>4</span>
          </p>
        </div>
      </div>
    );
  }
}

export default InfluencerProfile;
