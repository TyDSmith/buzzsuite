import React, { Component } from "react";
import API from "../utility/API"

class InfluencerInputForm extends Component {

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

  addInfluencer = () => {
    let influencerData = {
      accountName: this.state.accountName,
      channel: this.state.channel,
      product: this.state.product,
    }

    API.newInfluencer(influencerData).then((influencer) => {
      if (influencer.status = 200) {
        this.props.isPaneOpen()
      };
    }).catch(error => alert(error, "Twitter Handle in use"));
  };

  render() {
    return (
      <div>
        <h3>Add an Influencer</h3>
        <form>
          <label>
            Name:
            <input onChange = {this.onChange.bind(this)} type="text" name="accountName" />
          </label>
          <br />
          <label>
            Channel:
            <input onChange = {this.onChange.bind(this)} type="text" name="channel" />
          </label>
          <br />
          <label>
            Product:
            <input onChange = {this.onChange.bind(this)} type="text" name="product" />
          </label>
          <br />
          <button type="button" onClick={this.addInfluencer}>Add Influencer</button>
        </form>
      </div>
    );
  }
}

export default InfluencerInputForm;
