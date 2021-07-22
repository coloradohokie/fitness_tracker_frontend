import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

class MyActivity extends Component {

    render() {
        return (
            <div>
                <h1>Add Activity</h1>
                <Table>
                    <thead>
                        <tr>
                            <td>Activity</td>
                            <td>Distance</td>
                            <td>Duration</td>
                            <td>Date</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <input name="activity-name" type="text"></input>
                            </td>
                            <td>
                                <input name="distance" type="number"></input>
                            </td>
                            <td>
                                <input name="duration" type="number"></input>
                            </td>
                            <td>
                                <input name="date" type="date"></input>
                            </td>
                        </tr>
                        <tr>
                            <td colspan='4'>
                                <Button>Add Activity</Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
    
                <h1>My Activity</h1>
                <div>
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
                            <tr>
                                <td>January 27, 2021</td>
                                <td>Badmitton</td>
                                <td>0 miles</td>
                                <td>30 minutes</td>
                                <td>1.5</td>
                            </tr>

                        </tbody>
                    </Table>
                </div>

            </div>
        )
    }

}

export default MyActivity