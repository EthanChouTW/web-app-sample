import React from 'react'
import { Link } from 'react-router-dom'

export default (props) => (
    <div>
        <Link to='/'>ALL</Link>
        <Link to='/active'>active</Link>
        <Link to='/completed'>Completed</Link>
    </div>
)