import React, { Component } from "react";
// import InfluencersTable from "./influencers-table";
import API from "../../Utils";

class InfluencerHistory extends Component {

  constructor(props) {
    super(props);
    this.state = {
      influencer: []
    };
  }
  

  componentDidMount() {
    this.loadInfluencers();
  }
  

  loadInfluencers = () => {
    API.getInfluencers()
    //   .then(res => console.log(res.data)) 
      .then(res => this.setState({ influencer: res.data }, ()=> console.log(this.state)))
      .catch(err => console.log(err));
      };

  findAll = () => {
    API.getInfluencers()
    .then( this.findAll())
    .catch(err => console.log(err));
  };
          

  render() {
    
    // function getHistory(){
    var influencer = this.state.influencer;
    if (influencer.length > 0){
      // console.log(influencer[0].influencerAccount)
      for (var i = 0; i < influencer.length; i++){
        var date; 
        var URL;
        var impression; 
        var clicks;
        var retweet; 
        var likes;

        if (influencer[0].influencerAccount === "@StaterBrother")
         date = influencer[0].date; 
         URL = influencer[0].urlLink;
         impression = influencer[0].Impressions;
         clicks = influencer[0].linkClicks;
         retweet = influencer[0].Retweets;
         likes = influencer[0].Likes;
      }
    };
    

    return (
      <div class="influencer-history">
        <div class="influencer-history-single">
          

          <p>
            Date: {date}
          </p>
          <p>
           URL: {URL}
          </p>
          <p>
            Impressions: {impression}
          </p>
          <p>
            Link Clicks: {clicks}
          </p>
          <p>
            Retweets: {retweet}
          </p>
          <p>
            Likes: {likes}
          </p>
        </div>

        <div class="influencer-history-single">
          <p>
            Date: <span>04/28/19</span>
          </p>
          <p>
            URL:
            <a>
              <span>https://twitter.com/tydanielsmith/356235623563</span>
            </a>
          </p>
          <p>
            Impressions: <span>46146</span>
          </p>
          <p>
            Link Clicks: <span>263</span>
          </p>
          <p>
            Retweets: <span>43</span>
          </p>
          <p>
            Likes: <span>1673</span>
          </p>
        </div>

        <div class="influencer-history-single">
          <p>
            Date: <span>04/23/19</span>
          </p>
          <p>
            URL:
            <a>
              <span>https://twitter.com/tydanielsmith/356235623563</span>
            </a>
          </p>
          <p>
            Impressions: <span>46146</span>
          </p>
          <p>
            Link Clicks: <span>263</span>
          </p>
          <p>
            Retweets: <span>43</span>
          </p>
          <p>
            Likes: <span>1673</span>
          </p>
        </div>

        <div class="influencer-history-single">
          <p>
            Date: <span>04/12/19</span>
          </p>
          <p>
            URL:
            <a>
              <span>https://twitter.com/tydanielsmith/47361423562</span>
            </a>
          </p>
          <p>
            Impressions: <span>4267</span>
          </p>
          <p>
            Link Clicks: <span>62</span>
          </p>
          <p>
            Retweets: <span>34</span>
          </p>
          <p>
            Likes: <span>526</span>
          </p>
        </div>
      </div>
    );
  }
}

export default InfluencerHistory;
