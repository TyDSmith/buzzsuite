import React, { Component } from "react";
// import InfluencersTable from "./influencers-table";

class InfluencerProfile extends Component {
  render() {
    return (
      <div class="influencer-profile">
        <h3>JDoe</h3>
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
