import React, { Component } from "react";

class InfluencerHistory extends Component {

  render() {
    return (
      
      <div class="influencer-history">
        {this.props.influencers.map((influencer) => (
            <div class="influencer-history-single">
            <p>
              Date: {influencer.date}
            </p>
            <p>
            URL: <a href={influencer.urlLink} target="_blank" rel="noopener noreferrer"> {influencer.urlLink} </a>
            </p>
            <p>
              Impressions: {influencer.Impressions}
            </p>
            <p>
              Link Clicks: {influencer.linkClicks}
            </p>
            <p>
              Engagements: {influencer.Engagement}
            </p>
          </div>
          ))}
      </div>
    );
  }
}

export default InfluencerHistory;
