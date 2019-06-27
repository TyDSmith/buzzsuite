import React from 'react';
import TwitterCPMReport from './twitter-cpm-graph'

function Dashboard(props) {
    return (
        <div>

            <p>Dashboard</p>
            <h1>Welcome Back, {props.UserInfo.data.firstName} {props.UserInfo.data.lastName} </h1>
            <TwitterCPMReport />

        </div>
    )
}

export default Dashboard;