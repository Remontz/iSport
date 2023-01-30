import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Nav from '../components/Nav'

const Dashboard = (props) => {
    const { id } = useParams()
    const [user, setUser] = useState({})

    const { firstName, lastName } = user.userName
    return (
        <div>
            <div className='nav'>
                <Nav />
                <h1>Welcome, {firstName}</h1>
            </div>
            <div className='main'>
                <div className="todaysEvents">
                    <p>
                        today is {/*current date*/} and you have {/*days events*/} today.
                    </p>
                    <table>
                        <thead>
                            <tr>
                                <th>Event Name</th>
                                <th>Location Name</th>
                                <th>Attendees</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Dashboard