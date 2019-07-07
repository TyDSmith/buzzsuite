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
    console.log (this.props.socialAccount)
    this.loadInfluencers();
  }
  
  loadInfluencers = () => {
    API.getCampaignByAccount(this.props.socialAccount)
    //   .then(res => console.log(res.data)) 
      .then((res) => {
        this.setState({ influencers: res.data })
        console.log (res)
    })
      .catch(err => console.log(err));
      };   

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
              Impressions: {influencer.impression}
            </p>
            <p>
              Link Clicks: {influencer.clicks}
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
