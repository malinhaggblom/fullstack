import { useEffect, useState } from 'react'
import axios from 'axios'

const Weather = ({city}) => {
  const[weather,setWeather] = useState(null)
  const api_key = process.env.REACT_APP_WEATHER_API_KEY

  useEffect(() => {
    axios
    .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`)
    .then(response => {
      setWeather(response.data)
    })
}, [city, api_key])

if (weather === null) return null

console.log(weather)
console.log(weather.weather[0].icon)

return (
<div>
  <h3>Weather in {city}</h3>
  <div>Temperature is {weather.main.temp} celsisus</div>
  <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
  <div>Wind {weather.wind.speed} m/s</div>
</div>
)
}

export default Weather