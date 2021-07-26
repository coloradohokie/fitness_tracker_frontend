import React from 'react'

const activityItem = (props) => (
    <tr>
        <td>{new Date(props.date).toDateString()}</td>
        <td>{props.activity}</td>
        <td>{props.distance} miles</td>
        <td>{props.duration} minutes</td>
        <td>{props.credits}</td>
    </tr>
)

export default activityItem