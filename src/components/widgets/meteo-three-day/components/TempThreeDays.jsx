import React from 'react'

const TempThreeDays = ({ tempDay }) => {

    console.log(tempDay)
    return (
        <div>{`${Math.floor(tempDay)}°`}</div>
    )
}

export default TempThreeDays