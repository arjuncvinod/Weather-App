import React , {useState} from "react";
import axios from "axios";

function App() {
const[data,setData]=useState({});
const [location,setLocation]=useState('')

const url =`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=bdc1146c700b7ab3cbbd22c72a75063f`;

const searchLocation = (event)=>{
  if(event.key==="Enter"){
    axios.get(url).then((response)=>{
    setData(response.data)
    console.log(response.data);
  })
  setLocation('')
}
  
}

  return (
    <div className="app">
      <div className="search">
        <input
          type="text"
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main && <h1>{data.main.temp.toFixed()}°C</h1>}
          </div>
          <div className="description">
            {data.weather && <p>{data.weather[0].main}°F</p>}
          </div>
        </div>
        {data.name !== undefined && (
          <div className="bottom">
            <div className="feels"> 
              {data.main && (
                <p className="bold">{data.main.feels_like.toFixed()}°C</p>
              )} 
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main && <p className="bold">{data.main.humidity} %</p>}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind && (
                <p className="bold">{data.wind.speed.toFixed()} MPH</p>
              )}
              <p>Wind speed</p>  
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
