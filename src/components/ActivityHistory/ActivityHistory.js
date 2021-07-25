import React from 'react'
import Table from 'react-bootstrap/Table'
import ActivityItem from './ActivityItem/ActivityItem'

const activityHistory = (props) => {

    const printActivityItem = () => (
        props.activityHistory
            .filter(item => item.user_id === parseInt(localStorage.getItem('userId')))
            .sort((a,b) => new Date(a.date).getTime() - new Date(b.date).getTime())
            .map((item, index) => (
                <ActivityItem 
                    key = {index}
                    activity= {item.name}
                    date={item.date}
                    distance = {(item.distance / 5280).toFixed(2) }
                    duration = {item.duration}  
                    weekNumber = {setWeekNumber(item.date)}              
                />
            ))
    )

    const setWeekNumber = (activityDate) => {
        const startDate = new Date ('2021-07-16 0:00:00 GMT-6:00')
        const millisecondsInAWeek = 604800000
        return Math.trunc((new Date(activityDate).getTime() - startDate.getTime())/millisecondsInAWeek) + 1
    }

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