import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {

    const errors = useSelector(state => state.errors)
    console.log(errors)

    if (errors === {}) {
        return null
    }

    return (
        <div className='errorMsg'>
            <p>{errors.error}</p>
        </div>
    )
}

export default Notification