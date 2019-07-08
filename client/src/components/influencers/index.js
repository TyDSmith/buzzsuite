import React, { Component } from 'react';
import InfluencersTable from './influencers-table';
// import InfluencersFilter from './influencers-filter';
import AddInfluencerButton from './add-influencer-btn';
import API from '../utility/API';

class Influencers extends Component {

    constructor(props) {
        super(props);
        this.state = {
          influencers: []
        };
      }
      
      componentDidMount() {
        this.loadInfluencers();
      }
    
      loadInfluencers = () => {
        API.getInfluencers()
          .then((res) => {
            this.setState({ influencers: res.data })
          })
          .catch(err => console.log(err));
      };

    render() {
        return (
            <div>
                <div class="page-heading">
                    <h1 class="page-title">Influencers</h1>
                    <span class="add-btn-span">
                        <AddInfluencerButton UserInfo={this.props.UserInfo} loadInfluencers={this.loadInfluencers}/>
                    </span>
                </div>
                <div id="influencersfilterdiv">
                    {/* <InfluencersFilter /> */}
                </div>
                <InfluencersTable influencers={this.state.influencers} />
            </div>
        )
    }
}

export default Influencers;

