import React, { Component } from "react";

class CampaignInputForm extends Component {
  render() {
    return (
      <div>
        <h3>Add a campaign</h3>
        <form>
          <label>
            Influencer:
            <input type="text" name="account-name" />
          </label>
          <br />
          <label>
            Date:
            <input type="date" name="date" />
          </label>
          <br />
          <label>
            URL:
            <input type="text" name="URL" />
          </label>
          <br />
          <label>
            Client:
            <input type="text" name="client" />
          </label>
          <br />
          <label>
            Impressions:
            <input type="number" name="impressions" />
          </label>
          <br />
          <label>
            Cost:
            <input type="number" name="cost" />
          </label>
          <br />
        </form>
      </div>
    );
  }
}

export default CampaignInputForm;