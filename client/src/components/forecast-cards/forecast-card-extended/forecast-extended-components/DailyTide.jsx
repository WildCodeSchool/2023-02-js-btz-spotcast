import React from 'react'
import tideShape from '../../../../assets/images/tide-shape.svg'

const DailyTide = ({ tide, dayDate,onLoadAllTides }) => {

    //Création d'un tableau qui contient tous les TimeStamps des marées
    const tideTime = tide.map((el) => el.time);

    // Date formating to match the needs
    const dayDateFormat = dayDate.toISOString().slice(0,10)
    
    // get the tides of the current day
    const dayTides = onLoadAllTides ? [] : tide.filter((dayTide) => dayTide.time.match(dayDateFormat))

    //separate high tides and low tides
    const dayHighTides = onLoadAllTides? [] : dayTides.filter((tide) => tide.type==="high");
    const dayLowTides  = onLoadAllTides ? [] : dayTides.filter((tide) => tide.type==="low");

    if(onLoadAllTides || !dayTides.length || !dayLowTides.length || !dayHighTides.length){
        return(null)
    }

   /*const highHeight = 5.83 - parseFloat(dayHighTides[0].height)
    const lowHeight = 2.59 - Math.abs(parseFloat(dayLowTides[0].height))*/

    const highHeight = parseFloat(dayHighTides[0].height)
    const lowHeight = parseFloat(dayLowTides[0].height)
  
    const coeff = ((((highHeight - lowHeight)) / 3.9) *100 )

  return (
    <div className="daily-tide">
        <div className="coeff">
            <p className="coeff-data">
                {coeff.toFixed(0)}
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