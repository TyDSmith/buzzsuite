import React from 'react';
import InfluencersTable from '../influencers-table';
import InfluencersFilter from '../influencers-filter.jsx';

function Influencers(props) {
    return (
        <div>
            <div class="page-heading">
                <h1 class="page-title">Influencers</h1>
            </div>
            <div id="influencersfilterdiv">
                <InfluencersFilter />
            </div>
            <InfluencersTable />
        </div>
    )
}


export default Influencers;

