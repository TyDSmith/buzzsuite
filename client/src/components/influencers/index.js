import React, { Component } from 'react';
import InfluencersTable from './influencers-table';
import InfluencersFilter from './influencers-filter';
import AddInfluencerButton from './add-influencer-btn';
import Footer from "../footer";

class Influencers extends Component {

    render() {
        return (
            <div className="page-start">
                <div class="page-heading">
                    <h1 class="page-title">Influencers</h1>
                    <span class="add-btn-span">
                        <AddInfluencerButton UserInfo={this.props.UserInfo} />
                    </span>
                </div>
                <div id="influencersfilterdiv">
                    {/* <InfluencersFilter /> */}
                </div>
                <InfluencersTable />
                <Footer />
            </div>
        )
    }
}

export default Influencers;

