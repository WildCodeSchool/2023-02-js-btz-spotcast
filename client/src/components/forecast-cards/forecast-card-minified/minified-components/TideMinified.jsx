import React from 'react'

const TideMinified = ({ tide, dayDate }) => {

    //Création d'un tableau qui contient tous les TimeStamps des marées
    const tideTime = tide.map((el) => el.time);

    // Date formating to match the needs
    const dayDateFormat = dayDate.toISOString().slice(0,10)
    
    // get the tides of the current day
    let dayTides = tide.filter((dayTide) => dayTide.time.match(dayDateFormat))

    //separate high tides and low tides
    let dayHighTides = dayTides.filter((tide) => tide.type==="high");
    let dayLowTides  = dayTides.filter((tide) => tide.type==="low");
    
  return (
    <div className="tides">
        <p className='title-minified'>Tides</p>
        <div  className='tide-minified'>
            <div className='data-minified-tide'>
              <div className='arrow'> ↓</div>
             
                {dayHighTides[0] 
                ? `${String(new Date(dayHighTides[0].time).getHours()).padStart(2, "0")}:${String(new Date(dayHighTides[0].time).getMinutes()).padStart(2, "0")} `
                : ""}
        
                {dayHighTides[1] 
                ? `${String(new Date(dayHighTides[1].time).getHours()).padStart(2, "0")}:${String(new Date(dayHighTides[0].time).getMinutes()).padStart(2, "0")} `
                : ""}
            </div>
            <div className='data-minified-tide'>
            <div className='arrow'> ↑</div>
         
                {dayLowTides[0] 
                ? `${String(new Date(dayLowTides[0].time).getHours()).padStart(2, "0")}:${String(new Date(dayLowTides[0].time).getMinutes()).padStart(2, "0")} `
                : ""}
              
                {dayLowTides[1] 
                ? `${String(new Date(dayLowTides[1].time).getHours()).padStart(2, "0")}:${String(new Date(dayLowTides[1].time).getMinutes()).padStart(2, "0")} `
                : ""}
            </div>
        </div>
    </div>
  )
}

export default TideMinified