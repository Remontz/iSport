import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Nav from '../components/Nav'

const Dashboard = (props) => {
    const { id } = useParams()
    const [user, setUser] = useState({})
    return (
        <div>
            <div className='nav'>
                <Nav />
                <h1>Welcome, </h1>
            </div>
        </div>
    )
}

export default Dashboard