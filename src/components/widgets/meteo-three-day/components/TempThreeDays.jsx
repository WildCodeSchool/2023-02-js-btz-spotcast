import React from 'react'

const TempThreeDays = ({ tempDay }) => {

    return (
        <div>{`${Math.floor(tempDay)}°`}</div>
    )
}

export default TempThreeDays