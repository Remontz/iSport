import React from 'react'
import { Link } from 'react-router-dom'

const Nav = (props) => {
    return (
        <div>
            <section>
                <Link to='/create' id='new-link'>New</Link> |
                <Link to='/' id='home-link'>Home</Link> |
                <Link to='/search' id='new-link'>Search</Link> |
                <Link to='/account' id='new-link'>Account</Link>
            </section>
        </div>
    )
}

export default Nav