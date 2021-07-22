import React from 'react'
import classes from './AddActivity.module.scss'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

const addActivity = (props) => {
    return (
        <div className={classes.AddActivity}>
            <Table>
                <thead>
                    <tr>
                        <td>Date</td>
                        <td>Activity</td>
                        <td>Distance</td>
                        <td>Duration</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input name="date" type="date"></input>
                        </td>
                        <td>
                            <input name="activity-name" type="text"></input>
                        </td>
                        <td>
                            <input name="distance" type="number"></input>
                        </td>
                        <td>
                            <input name="duration" type="number"></input>
                        </td>
                    </tr>
                </tbody>
            </Table>
            <Button>Add Activity</Button>
        </div>
    )
}

export default addActivity