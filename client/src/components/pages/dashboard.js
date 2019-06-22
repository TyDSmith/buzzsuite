import React, { Component } from 'react';


class Dashboard extends Component {
    //let state = [];

    componentDidMount() {
        console.log ("mounted")
        fetch('http://localhost:3001/logged-in', { method: 'GET' }).then ((req, res)=> {
            console.log ("fetch test")
            console.log (req)
            console.log (req.user)
            console.log (req.body)
            console.log (res)
        })
                
    }


    render() {
        return (
            <div>
    
                <p>Dashboard</p>
                <h3>Woooodashboard</h3>
            </div>
        )
    }
}

export default Dashboard;