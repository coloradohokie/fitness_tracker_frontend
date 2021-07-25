import React from 'react'
import Table from 'react-bootstrap/Table'
import ActivityItem from './ActivityItem/ActivityItem'

const activityHistory = (props) => {

    const printActivityItem = () => (
        props.activityHistory
            .filter(item => item.user_id === parseInt(localStorage.getItem('userId')))
            .map((item, index) => (
                <ActivityItem 
                    key = {index}
                    activity= {item.name}
                    date={item.date}
                    distance = {(item.distance / 5280).toFixed(2) }
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