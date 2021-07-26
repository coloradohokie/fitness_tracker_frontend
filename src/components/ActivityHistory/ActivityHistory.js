import React from 'react'
import WeeklyTable from './WeeklyTable/WeeklyTable'

const activityHistory = (props) => (
    [7, 6, 5, 4, 3, 2, 1].map( week =>  <WeeklyTable key={week} weekNumber={week} activityHistory={props.activityHistory} />)
)

export default activityHistory