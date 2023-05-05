import React from 'react'

const TempThreeDays = ({ tempDay }) => {

    return (
        <div className='day-temp'>{`${Math.floor(tempDay)}°`}</div>
    )
}

export default TempThreeDays