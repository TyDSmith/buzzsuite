import React, { Component }from 'react';
import CampaignsTable from './campaigns-table';
import AddCampaignButton from './add-campaign-btn';
import API from "../utility/API"



class Campaigns extends Component {
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
        API.getCampaignById(this.props.UserInfo.data._id)
          .then((res) => {
            this.setState({ influencer: res.data })
          })
          .catch(err => console.log(err));
          
      };

    render() {
        return (
            <div>
                <div class="page-heading">
                    <h1 class="page-title">Campaigns</h1>
                    <span class="add-btn-span"><AddCampaignButton UserInfo={this.props.UserInfo}/></span>
                </div>
                <CampaignsTable influencer={this.state.influencer}/>
            </div>
        )
    }
    
}

export default Campaigns;