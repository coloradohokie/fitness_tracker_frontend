import React from 'react'
import Table from 'react-bootstrap/Table'
import ActivityItem from './ActivityItem/ActivityItem'

const activityHistory = (props) => {

    const printActivityItem = () => (
        props.activityHistory.map((item, index) => (
            <ActivityItem 
                key = {index}
                activity= {item.activity}
                date={item.date}
                distance = {item.distance}
                duration = {item.duration}                
            />
        ))
    )

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
                {printActivityItem()}
            </tbody>
        </Table>
    )
}

export default activityHistory