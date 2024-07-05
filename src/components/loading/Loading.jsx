import React, { memo } from 'react'
import "./Loading.css"

const Loading = () => {
    return (
        <div className="loading__box">
            <div className='loader'></div>
        </div>
    )
}

export default memo(Loading)