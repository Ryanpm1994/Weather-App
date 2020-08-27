import React, { Fragment, useState } from "react";
import Heading from "./components/Heading";
import SearchBar from "./components/SearchBar";
import LocationHeading from "./components/LocationHeading";
import FirstSection from "./components/firstSection/FirstSection";
import Forecast from "./components/Forecast";
import "./App.css";
import axios from "axios";
import Moment from "moment";

const App = () => {
  const [city, setCity] = useState("");
  const [searchCity, setSearchCity] = useState("");
  const [searchCountry, setSearchCountry] = useState("");
  const [searchTemp, setSearchTemp] = useState("");
  const [searchTempMax, setSearchTempMax] = useState("");
  const [searchTempMin, setSearchTempMin] = useState("");
  const [searchWeather, setSearchWeather] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [windSpeed, setWindSpeed] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=035e5c2adab150cef0f44098d04d800f`
      );

      const searchWeatherObj = { ...res.data.weather };
      const dateToFormat = new Date(res.data.dt * 1000);
      const momentDate = Moment(dateToFormat).format("dddd Do MMMM");
      const wind = res.data.wind.speed.toFixed(1);

      setSearchCity(res.data.name);
      setSearchCountry(res.data.sys.country);
      setSearchTemp(Math.round(res.data.main.temp - 273.15));
      setSearchTempMax(Math.round(res.data.main.temp_max - 273.15));
      setSearchTempMin(Math.round(res.data.main.temp_min - 273.15));
      setSearchWeather(searchWeatherObj[0].description);
      setCurrentDate(momentDate);
      setWindSpeed(wind);

      console.log(windSpeed);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      <Heading />
      <SearchBar city={city} setCity={setCity} onSubmit={onSubmit} />
      <LocationHeading
        searchCity={searchCity}
        searchCountry={searchCountry}
        currentDate={currentDate}
      />
      <FirstSection
        searchTemp={searchTemp}
        searchTempMax={searchTempMax}
        searchTempMin={searchTempMin}
        searchWeather={searchWeather}
      />
      <Forecast />
    </Fragment>
  );
};

export default App;
