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
      .then((res) => {
        this.setState({ influencers: res.data })
        this.avgCPMnCPC();
    })
      .catch(err => console.log(err));
  };   

  updateAverage = (avgCPM, avgCPC, avgCPE) => {
    let userData = {
      socialAccount: this.props.socialAccount,
      avgCPM: avgCPM,
      avgCPC: avgCPC,
      avgCPE: avgCPE,
    };

    API.updateInfluencerAverageCPMCPC(userData).then().catch()

  }

  avgCPMnCPC = () => {
    
    let avgCPM = 0;
    let avgCPC = 0;
    let avgCPE = 0;
    let CPM = 0;
    let CPC = 0;
    let CPE = 0;
    for (let i = 0; i < this.state.influencers.length; i++) {
      CPM = CPM + this.state.influencers[i].CPM
      CPC = CPC + this.state.influencers[i].CPC
      CPE = CPE + this.state.influencers[i].CPE
      if (i === this.state.influencers.length-1) {
        
        avgCPM = CPM / this.state.influencers.length;
        avgCPC = CPC / this.state.influencers.length;
        avgCPE = CPE / this.state.influencers.length;
    
      }
    }
    let InfluencerProfileInfo = {
      avgCPM: avgCPM,
      avgCPC: avgCPC,
      avgCPE: avgCPE,
      numberOfCampaigns: this.state.influencers.length,
    }
    this.props.InfluencerProfileInfo(InfluencerProfileInfo)
    this.updateAverage(avgCPM, avgCPC, avgCPE)
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
