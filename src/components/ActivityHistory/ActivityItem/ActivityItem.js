import React from 'react'

const activityItem = (props) => (
    <tr>
        <td>{props.date}</td>
        <td>{props.activity}</td>
        <td>{props.distance} miles</td>
        <td>{props.duration} minutes</td>
        <td>{props.duration/props.distance > 20? props.duration/20 : props.distance}</td>
    </tr>
)

export default activityItem