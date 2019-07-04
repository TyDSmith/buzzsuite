import React, { Component } from "react";

class InfluencerInputForm extends Component {
  render() {
    return (
      <div>
        <h3>Add an Influencer</h3>
        <form>
          <label>
            Name:
            <input type="text" name="account-name" />
          </label>
          <br />
          <label>
            Channel:
            <input type="text" name="channel" />
          </label>
          <br />
          <label>
            Product:
            <input type="text" name="product" />
          </label>
          <br />
        </form>
      </div>
    );
  }
}

export default InfluencerInputForm;
