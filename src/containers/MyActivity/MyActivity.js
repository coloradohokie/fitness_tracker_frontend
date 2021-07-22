import React, { Component } from 'react'
import AddActivity from '../../components/AddActivity/AddActivity'
import ActivityHistory from '../../components/ActivityHistory/ActivityHistory'

class MyActivity extends Component {

    render() {
        return (
            <div>
                <h1>Add Activity</h1>
                <AddActivity />
                <h1>Activity History</h1>
                <ActivityHistory />
            </div>
        )
    }

}

export default MyActivity