import React, { Component } from 'react';
import CampaignsTable from './campaigns-table';
import AddCampaignButton from './add-campaign-btn';

import Footer from "../footer";

import API from "../utility/API"



class Campaigns extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campaigns: []
    };
  }

  componentDidMount() {
    this.loadCampaign();
  }

  loadCampaign = () => {
    API.getCampaignById(this.props.UserInfo.data._id)
      .then((res) => {
        this.setState({ campaigns: res.data })

      })
      .catch(err => console.log(err));

  };

  render() {
    return (
      <div className="page-start">
        <div class="page-heading">
          <h1 class="page-title">Campaigns</h1>
          <span class="add-btn-span"><AddCampaignButton UserInfo={this.props.UserInfo} loadCampaign={this.loadCampaign} /></span>
        </div>
        <CampaignsTable campaigns={this.state.campaigns} loadCampaign={this.loadCampaign} />
        <Footer />
      </div >
    )
  }

}

export default Campaigns;