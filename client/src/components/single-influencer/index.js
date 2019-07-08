import React, { Component } from 'react';
import InfluencerProfile from './influencer-profile';
import SingleCampaignInputForm from './single-campaign-input-form';
import InfluencerHistory from './influencer-history';
import '../single-influencer/single-influencer.css';
import API from '../utility/API';

class SingleInfluencer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            InfluencerProfileInfo: [],
            influencers: []
        };
    }

    reloadHistory = () => {
        this.loadInfluencers();
    };
      
      componentDidMount() {
        this.loadInfluencers();
      }
      
      loadInfluencers = () => {
        API.getCampaignByAccount(this.props.location.state.socialAccount)
          .then((res) => {
            this.setState({ influencers: res.data })
            this.avgCPMnCPC();
            
        })
          .catch(err => console.log(err));
      };   
    
      updateAverage = (avgCPM, avgCPC, avgCPE) => {
        let userData = {
          socialAccount: this.props.location.state.socialAccount,
          avgCPM: avgCPM,
          avgCPC: avgCPC,
          avgCPE: avgCPE,
        };
    
        API.updateInfluencerAverageCPMCPC(userData).then().catch()
      };
    
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
            
            avgCPM = parseInt(CPM / this.state.influencers.length * 100)/100;
            avgCPC = parseInt(CPC / this.state.influencers.length * 100)/100;
            avgCPE = parseInt(CPE / this.state.influencers.length * 100)/100;
        
          }
        }
        let InfluencerProfileInfo = {
          avgCPM: avgCPM,
          avgCPC: avgCPC,
          avgCPE: avgCPE,
          numberOfCampaigns: this.state.influencers.length,
        }
        this.setState({ InfluencerProfileInfo })
        this.updateAverage(avgCPM, avgCPC, avgCPE)
      }

    render() {
        let socialAccount = this.props.location.state.socialAccount
        
        return (
            <div className="page-start">
                <h2>{this.props.UserInfo.name}</h2>
                <div class="single-influencer-div">
                    <div class="column column-left">
                        <InfluencerProfile socialAccount={socialAccount} InfluencerProfileInfo={this.state.InfluencerProfileInfo} />
                    </div>
                    <div class="column column-center">
                        <InfluencerHistory socialAccount={socialAccount} influencers={this.state.influencers} reloadHistory={this.reloadHistory}/>
                    </div>
                    <div class="column column-right">
                        <SingleCampaignInputForm socialAccount={socialAccount} UserInfo={this.props.UserInfo} reloadHistory={this.reloadHistory}/>
                    </div>
                </div>

            </div>
        )
    }
};
export default SingleInfluencer;