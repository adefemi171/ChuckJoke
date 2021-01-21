import React from 'react'
import { NavLink } from 'react-router-dom'

const Category = props => {
    return (
        <div>
            <NavLink to=''>{props.data}</NavLink>
        </div>
    )
}

export default Category