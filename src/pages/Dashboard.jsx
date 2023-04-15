import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Wind from '../components/widgets/wind/Wind'
import './Dashboard.css'

const Dashboard = () => {
    const[date, setDate] = useState(new Date());
    //Setting up a realtime clock
    useEffect(()=>{
        const timer = setInterval(() => setDate(new Date()), 1000 )
        return function cleanup(){
            clearInterval(timer)
        }
    })

    const [wind, setWind] = useState([])
    //fetching the wind infos
    useEffect(()=>{
        axios
        .get('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=windspeed_10m,winddirection_10m')
        .then((res) => res.data)
        .then((data)=>{
            setWind(data.hourly)
        })
    },[])
    
  return (
    <div className='dashboard'>
        <Wind {...wind}/>
        <p>{date.toLocaleTimeString()}</p>
    </div>
  )
}

export default Dashboard