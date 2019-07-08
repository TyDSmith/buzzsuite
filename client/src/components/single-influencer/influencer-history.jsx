import React, { Component } from "react";
import API from "../utility/API";

class InfluencerHistory extends Component {
  removeCampaign = id => {
    API.deleteCampaign(id)
      .then(res => {
        if (res.status === 200) {
          this.props.reloadHistory();
        }
      })
      .catch(console.error());
  };

  render() {
    return (
      <div class="influencer-history">
        {this.props.influencers.map(influencer => (
          <div class="influencer-history-single">
            <p>Date: {influencer.date}</p>
            <p>
              URL:{" "}
              <a
                href={influencer.urlLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                {influencer.urlLink}{" "}
              </a>
            </p>
            <p>Impressions: {influencer.Impressions}</p>
            <p>Link Clicks: {influencer.linkClicks}</p>
            <p>Engagements: {influencer.Engagement}</p>

            <button
              onClick={() => this.removeCampaign(influencer._id)}
              className="single-delete-btn "
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default InfluencerHistory;
