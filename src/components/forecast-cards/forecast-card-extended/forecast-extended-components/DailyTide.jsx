import React from 'react'
import tideShape from '../../../../assets/images/tide-shape.svg'

const DailyTide = ({ tide, dayDate }) => {

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
    <div className="daily-tide">
        <div className="coeff">
            <p className="coeff-data">
                120
            </p>
            <p>Coeff</p>
        </div>
        <div className="tide">
            <div className="daily-high-tide">
                <p className="first-high-tide">{dayHighTides[0] 
                ? `${String(new Date(dayHighTides[0].time).getHours()).padStart(2, "0")}:${String(new Date(dayHighTides[0].time).getMinutes()).padStart(2, "0")} `
                : ""}
                </p>
                <p className="second-high-tide">{dayHighTides[1]
                ? `${String(new Date(dayHighTides[1].time).getHours()).padStart(2, "0")}:${String(new Date(dayHighTides[0].time).getMinutes()).padStart(2, "0")} `
                : ""}
                </p>
            </div>
            <img src={tideShape} alt="" className="tide-shapes" />
            <div className="daily-low-tide">
                <p className="first-low-tide">{dayLowTides[0] 
                ? `${String(new Date(dayLowTides[0].time).getHours()).padStart(2, "0")}:${String(new Date(dayLowTides[0].time).getMinutes()).padStart(2, "0")} `
                : ""}
                </p>
                <p className="second-low-tide">{dayLowTides[1] 
                ? `${String(new Date(dayLowTides[1].time).getHours()).padStart(2, "0")}:${String(new Date(dayLowTides[1].time).getMinutes()).padStart(2, "0")} `
                : ""}
                </p>
            </div>
        </div>
    </div>
  )
}

export default DailyTide