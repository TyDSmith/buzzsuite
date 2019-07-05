<<<<<<< HEAD
import React, {Component} from 'react';
import "react-table/react-table.css";
=======
import React, { Component } from 'react';
>>>>>>> 16c65f8d32ada2010370b788477d7148c8ac3342
import InfluencersTable from './influencers-table';
import InfluencersFilter from './influencers-filter';
import AddInfluencerButton from './add-influencer-btn';

class Influencers extends Component {

<<<<<<< HEAD
    render(){
    return (
        <div>
            <div class="page-heading">
                <h1 class="page-title">Influencers</h1>
                <span class="add-btn-span"><AddInfluencerButton /></span>
            </div>
            <div id="influencersfilterdiv">
                <InfluencersFilter />
=======
    render() {
        return (
            <div>
                <div class="page-heading">
                    <h1 class="page-title">Influencers</h1>
                    <AddInfluencerButton UserInfo={this.props.UserInfo}/>
    
                </div>
                <div id="influencersfilterdiv">
                    <InfluencersFilter />
                </div>
                <InfluencersTable />
>>>>>>> 16c65f8d32ada2010370b788477d7148c8ac3342
            </div>
        )   
    }
}
<<<<<<< HEAD
};
=======
>>>>>>> 16c65f8d32ada2010370b788477d7148c8ac3342

export default Influencers;

