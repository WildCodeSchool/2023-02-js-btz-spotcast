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

/* <p className="day-one">{`${formattedTomorrow}`}</p>
                    <img className="day-icon" src={dayIcon} alt="" />
                    <p className="day-temperature">15°</p>*/


/*//Setup meteo Infos
    let [dayIcon, setDayIcon] = useState('')
    let [weatherCode, setweatherCode] = useState(onLoadMeteo3D ? "" : weathercode[timeStampIndex])



    useEffect(() => {

        if (onLoadMeteo3D) {
            console.log("les problèmes")
        } else if (weatherCode === 0) {
            setDayIcon(soleil)
        } else if (weatherCode >= 1 || weatherCode <= 3) {
            setDayIcon(soleilNuages)
        } else if (weatherCode >= 45 || weatherCode <= 48) {
            setDayIcon(soleilNuages)
        } else if (weatherCode >= 51 || weatherCode <= 57) {
            setDayIcon(nuages)
        } else if (weatherCode >= 61 || weatherCode <= 67) {
            setDayIcon(pluie)
        } else if ((weatherCode >= 71 || weatherCode <= 77) || (weatherCode >= 85 || weatherCode <= 86)) {
            setDayIcon(neige)
        } else if (weatherCode >= 80 || weatherCode <= 82) {
            setDayIcon(pluie)
        } if (weatherCode >= 95) {
            setDayIcon(pluie)
        }
    }, [onLoadMeteo3D])


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
    const formattedDPlus3 = dPlus3.toLocaleDateString('fr-FR', options); */

export default MeteoThreeDay