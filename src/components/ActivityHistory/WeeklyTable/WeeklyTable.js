import React from 'react'
import Table from 'react-bootstrap/Table'
import ActivityItem from '../ActivityItem/ActivityItem'
import classes from './WeeklyTable.module.scss'

const weeklyTable = (props) => {
    const weeklyActivity = props.activityHistory
        .filter(item => item.user_id === parseInt(localStorage.getItem('userId')))
        .filter(item => item.weekNumber === props.weekNumber)
    
    weeklyActivity.forEach(item => item.credits = item.duration/(item.distance/5280) > 20? item.duration/20 : item.distance/5280)

    const printActivityItem = () => (
        weeklyActivity
            .sort((a,b) => new Date(a.date).getTime() - new Date(b.date).getTime())
            .map((item, index) => (
                <ActivityItem 
                    key = {index}
                    activity= {item.name}
                    date={item.date}
                    distance = {(item.distance / 5280).toFixed(2) }
                    duration = {item.duration}  
                    weekNumber = {item.weekNumber}
                    credits = {item.credits}              
                />
            ))
    )

    const weeklyTotal = weeklyActivity.reduce(((acc,cv) => acc + cv.credits), 0)

    if (!weeklyTotal) {
        return null
    }

    return (
        <div className={classes.WeeklyResults}>
            <h2>Week {props.weekNumber}</h2>
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
            <p>Total: {weeklyTotal} </p>
        </div>
    )
}

export default weeklyTable