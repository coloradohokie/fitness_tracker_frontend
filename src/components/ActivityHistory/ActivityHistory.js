import React from 'react'
import Table from 'react-bootstrap/Table'
import ActivityItem from './ActivityItem/ActivityItem'

const activityHistory = (props) => {
    return(
        <Table>
            <thead>
                <tr>
                    <td>Date</td>
                    <td>Activity</td>
                    <td>Distance</td>
                    <td>Duration</td>
                    <td>Credits</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>January 25, 2021</td>
                    <td>Running</td>
                    <td>3.41 miles</td>
                    <td>35 minutes</td>
                    <td>3.41</td>
                </tr>
                <tr>
                    <td>January 26, 2021</td>
                    <td>Walking</td>
                    <td>4 miles</td>
                    <td>80 minutes</td>
                    <td>4.0</td>
                </tr>
                <ActivityItem
                    activity="Badmitton"
                    date="January 27, 2021"
                    distance = "0"
                    duration = "45"
                    credits = ""
                />
            </tbody>
        </Table>
    )
}

export default activityHistory