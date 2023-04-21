import IconMeteoThreeDays from "./components/IconMeteoThreeDays";
import DateThreeDays from "./components/DateThreeDays";
import TempThreeDays from "./components/TempThreeDays";
import ToggleButton from "../../utilities/ToggleButton";
import "../cards.css";
import "./MeteoThreeDay.css";



const MeteoThreeDay = ({ meteo3D, onLoadMeteo3D }) => {

    // Setup the date
    const today = new Date();  // Obtenir la date et l'heure actuelles
    const oneDay = 24 * 60 * 60 * 1000;  // Durée en millisecondes d'un jour
    const tomorrow = new Date(today.getTime() + oneDay);  // Obtenir la date de demain
    const afterTomorrow = new Date(today.getTime() + (2 * oneDay));  // Obtenir la date d'après-demain
    const dPlus3 = new Date(today.getTime() + (3 * oneDay));  // Obtenir la date D+3
    const options = { weekday: 'long', day: '2-digit' };  // Options pour formater la date

    // // Format date  in "DD/MM"
    const formattedTomorrow = tomorrow.toLocaleDateString('fr-FR', options);
    const formattedAfterTomorrow = afterTomorrow.toLocaleDateString('fr-FR', options);
    const formattedDPlus3 = dPlus3.toLocaleDateString('fr-FR', options);

    let indexInfoMeteo = []
    if (onLoadMeteo3D) {
    } else {
        indexInfoMeteo = [{
            date: formattedTomorrow,
            weatherCode: meteo3D.weathercode[1],
            temperature: ((meteo3D.temperature_2m_min[1] + meteo3D.temperature_2m_max[1]) / 2)
        },
        {
            date: formattedAfterTomorrow,
            weatherCode: meteo3D.weathercode[2],
            temperature: ((meteo3D.temperature_2m_min[2] + meteo3D.temperature_2m_max[2]) / 2)
        },
        {
            date: formattedDPlus3,
            weatherCode: meteo3D.weathercode[3],
            temperature: ((meteo3D.temperature_2m_min[3] + meteo3D.temperature_2m_max[3]) / 2)
        }]
    }

    return (
        <div className="small-square">
            <div className="card-header">
                <p className="card-title">Meteo 3 days</p>
                <ToggleButton />
            </div>
            <div className="card-content meteo-infos-3d">
                {onLoadMeteo3D ? "" :
                    indexInfoMeteo.map((el) => (
                        <div className="day-infos-3d">
                            <DateThreeDays
                                meteoDay={el.date}
                            />
                            <IconMeteoThreeDays
                                meteoIcon={el.weatherCode}
                                onLoadMeteo3D={onLoadMeteo3D}

                            />
                            <TempThreeDays
                                tempDay={el.temperature}

                            />

                        </div>
                    ))
                }
            </div>
        </div>
    )
}



export default MeteoThreeDay