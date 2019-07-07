import React, { Component } from "react";
import API from '../utility/API';

class InfluencerHistory extends Component {

  constructor(props) {
    super(props);
    this.state = {
      influencers: []
    };
  }
  
  componentDidMount() {
    this.loadInfluencers();
  }
  
  loadInfluencers = () => {
    API.getCampaignByAccount(this.props.socialAccount)
    //   .then(res => console.log(res.data)) 
      .then((res) => {
        this.setState({ influencers: res.data })
        this.avgCPMnCPC();
    })
      .catch(err => console.log(err));
  };   

  avgCPMnCPC = () => {
    
    let avgCPM = null;
    let avgCPC = null;
    let CPM = null;
    let CPC = null;
    for (let i = 0; i < this.state.influencers.length; i++) {
      CPM = CPM + this.state.influencers[i].CPM
      CPC = CPC + this.state.influencers[i].CPC
      if (i === this.state.influencers.length-1) {
        
        avgCPM = CPM / this.state.influencers.length;
        avgCPC = CPC / this.state.influencers.length;
    
      }
    }
    let InfluencerProfileInfo = {
      avgCPM: avgCPM,
      avgCPC: avgCPC,
      numberOfCampaigns: this.state.influencers.length,
    }
    this.props.InfluencerProfileInfo(InfluencerProfileInfo)
  }

  render() {
    
    return (
      
      <div class="influencer-history">
        {this.state.influencers.map((influencer) => (
            <div class="influencer-history-single">
            <p>
              Date: {influencer.date}
            </p>
            <p>
            URL: {influencer.urlLink}
            </p>
            <p>
              Impressions: {influencer.Impressions}
            </p>
            <p>
              Link Clicks: {influencer.linkClicks}
            </p>
            <p>
              Retweets: {influencer.retweet}
            </p>
            <p>
              Likes: {influencer.likes}
            </p>
          </div>
          ))}
      </div>
    );
  }
}

export default InfluencerHistory;
