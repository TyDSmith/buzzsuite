import React, { Component } from "react";
import API from "../utility/API"

class SingleCampaignInputForm extends Component {

    constructor(props){
      super(props);
      this.state = {};
    };
  
    onChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      this.setState({
        [name]: value
      });
    };
  
    addCampaign = () => {
      let cpm = parseInt((this.state.cost/(this.state.impressions/1000)) * 100) / 100;
      let cpc = parseInt((this.state.cost / this.state.clicks) * 100) / 100;
      let cpe = parseInt((this.state.cost / this.state.engagements) * 100) / 100;

      let campaignData = {
        bs_account_id: this.props.UserInfo.data._id,
        urlLink: this.state.URL,
        influencerAccount: this.props.socialAccount,
        client: this.state.client,
        date: this.state.date,
        Impressions: this.state.impressions,
        Engagement: this.state.engagements,
        Cost: this.state.cost,
        linkClicks: this.state.clicks,
        channel: this.state.channel,
        service: this.state.product,
        CPM: cpm,
        CPC: cpc,
        CPE: cpe,
      };
  
      API.newCampaign(campaignData).then((campaign) => {console.log(campaign)
      }).catch(error => alert(error, "Campaign"));

      this.props.reloadHistory()
    }

  render() {
    return (
      <div>
        <h3>Add a campaign</h3>
        <form class="add-form">
          <label>
            Date:
            <input onChange = {this.onChange.bind(this)} type="date" name="date" />
          </label>
          <br />
          <label>
            URL:
            <input onChange = {this.onChange.bind(this)} type="text" name="URL" />
          </label>
          <br />
          <label>
            Client:
            <input onChange = {this.onChange.bind(this)} type="text" name="client" />
          </label>
          <br />
          <label>
            Impressions:
            <input onChange = {this.onChange.bind(this)} type="number" name="impressions" />
          </label>
          <br />
          <label>
            Clicks:
            <input onChange = {this.onChange.bind(this)} type="number" name="clicks" />
          </label>
          <br />
          <label>
            Engagements:
            <input onChange = {this.onChange.bind(this)} type="number" name="engagements" />
          </label>
          <br />
          <label>
            Cost:
            <input onChange = {this.onChange.bind(this)} type="number" name="cost" />
          </label>
          <br/>
          <label>
            Channel:
            <input onChange = {this.onChange.bind(this)} type="text" name="channel" />
          </label>
          <br/>
          <label>
            Product:
            <input onChange = {this.onChange.bind(this)} type="text" name="product" />
          </label>
          <br />

          <button type="button" onClick={this.addCampaign}>Add Campaign</button>

        </form>
      </div>
    );
  };
};

export default SingleCampaignInputForm;
