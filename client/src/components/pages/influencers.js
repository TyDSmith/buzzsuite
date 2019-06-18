import React from 'react';
import InfluencersTable from '../influencers-table';
import InfluencersFilter from '../influencers-filter.jsx';

function Influencers(props) {
    return (
        <div>
            <p>Influencers page</p>
            <div id="influencersfilterdiv">
                <InfluencersFilter />
            </div>
            <InfluencersTable />
        </div>
    )
}


export default Influencers;

