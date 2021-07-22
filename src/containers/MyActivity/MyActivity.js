import React, { Component } from 'react'
import AddActivity from '../../components/AddActivity/AddActivity'
import ActivityHistory from '../../components/ActivityHistory/ActivityHistory'

class MyActivity extends Component {

    render() {
        return (
            <div>
                <h1>Add Activity</h1>
                <AddActivity onAddActivity={this.props.onAddActivity} />
                <h1>Activity History</h1>
                <ActivityHistory activityHistory={this.props.activityHistory} />
            </div>
        )
    }

}

export default MyActivity