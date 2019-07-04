import React, { Component } from "react";
import API from "../utility/API"

class CampaignInputForm extends Component {
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
    let campaignData = {
      bs_account_id: this.props.UserInfo.data._id,
      urlLink: this.state.URL,
      influencerAccount: `${this.props.UserInfo.data.firstName} ${this.props.UserInfo.data.lastName}`,
      client: this.state.client,
      date: this.state.date,
      Impressions: this.state.impressions,
      Cost: this.state.cost
    }
    console.log (this.props)
    console.log (this.state)
    console.log (campaignData)

    API.newCampaign(campaignData).then(campaign => console.log (campaign))
  };


  render() {
    return (
      <div>
        <h3>Add a campaign</h3>
        <form>
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
            Cost:
            <input onChange = {this.onChange.bind(this)} type="number" name="cost" />
          </label>
          <br />

          <button type="button" onClick={this.addCampaign}>Add Campaign</button>
        </form>
      </div>
    );
  }
}

export default CampaignInputForm;
