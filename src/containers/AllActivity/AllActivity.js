import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'

class AllActivity extends Component {



    printRow = () => {
        return this.props.activityHistory.map( activity => {
            return (
                <tr>
                    <td>{activity.username}</td>
                    <td>{activity.name}</td>
                    <td>{(activity.distance/5280).toFixed(2)}</td>
                    <td>{activity.duration}</td>
                    <td>{activity.credits}</td>
                </tr>
            )
        })
    }

    render() {

        return (
            <div>
                <h1>All Activity</h1>
                <Table>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Activity</td>
                            <td>Miles</td>
                            <td>Minutes</td>
                            <td>Credits</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.printRow()}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default AllActivity