import axios from "axios";
import { useEffect, useState } from "react";
import './App.css';

function App() {


  const apiKey = "88a0d11a0f253ae3b82ec9994d08bf1f";
  const [inputCity, setInputCity] = useState("");
  const [data, setData] = useState({});


  const getWetherDetails = (cityName) => {
    if (!cityName) return
    const apiURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
    axios.get(apiURL).then((res) => {
      console.log("response", res.data)
      setData(res.data)
    }).catch((err) => {
      console.log("err", err)
    })
  }

  const handleChangeInput = (e) => {
    console.log("value", e.target.value)
    setInputCity(e.target.value)
  }

  const handleSearch = () => {
    getWetherDetails(inputCity)
  }


  return (
    <div className="main">
      <div className="wetherBg">
        <h1 className="heading">Weather App using reactjs </h1>

        <div className="d-grid gap-3 col-4 mt-4">
          <input type="text" className="form-control"
            value={inputCity}
            onChange={handleChangeInput} />
          <button className="btn" type="button"
            onClick={handleSearch}
          >Search</button>
        </div>
      

      {Object.keys(data).length > 0 &&
        <div className="Resultot">

          
           
            <h3 className="weathorCity">
              {data?.name}
            </h3>
            <h3 className="weathorTemp">{((data?.main?.temp) - 273.15).toFixed(2)}°C</h3>
          </div>
      }

       </div>
       <div className="footer"> <h2>all rights reserved by Vaishnavi Jande </h2></div>
    </div>
  );
}

export default App;
