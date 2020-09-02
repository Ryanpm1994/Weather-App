import React, { Fragment, useState } from "react";
import Heading from "./components/Heading";
import SearchBar from "./components/SearchBar";
import LocationHeading from "./components/LocationHeading";
import FirstSection from "./components/firstSection/FirstSection";
import Forecast from "./components/Forecast";
import "./App.css";
import axios from "axios";
import Moment from "moment";
import MomentTimezone from "moment-timezone";

const App = () => {
  const [city, setCity] = useState("");
  const [searchCity, setSearchCity] = useState(null);
  const [searchCountry, setSearchCountry] = useState("");
  const [searchTemp, setSearchTemp] = useState("");
  const [searchTempMax, setSearchTempMax] = useState("");
  const [searchTempMin, setSearchTempMin] = useState("");
  const [searchWeather, setSearchWeather] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [humidity, setHumidity] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("");
  const [dailyForecasts, setDailyForecasts] = useState([]);

  const onSubmit = (event) => {
    event.preventDefault();
    handleApiRequest();
  };

  const handleApiRequest = async () => {
    try {
      const res1 = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=035e5c2adab150cef0f44098d04d800f`
      );

      console.log(res1.data);
      const res2 = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${res1.data.coord.lat}&lon=${res1.data.coord.lon}&
        exclude=minutely,daily&appid=035e5c2adab150cef0f44098d04d800f`
      );

      const searchWeatherObj = { ...res1.data.weather };
      const dateToFormat = new Date(res1.data.dt * 1000);
      const momentDate = Moment(dateToFormat)
        .tz(res2.data.timezone)
        .format("dddd Do MMMM");

      const sunriseDate = new Date(res1.data.sys.sunrise * 1000);
      const sunsetDate = new Date(res1.data.sys.sunset * 1000);

      const momentSunrise = Moment(sunriseDate)
        .tz(res2.data.timezone)
        .format("LT")
        .slice(0, 4);

      const momentSunset = Moment(sunsetDate)
        .tz(res2.data.timezone)
        .format("LT")
        .slice(0, 4);

      const forecastArr = res2.data.daily;

      setSearchCity(res1.data.name + ",");
      setSearchCountry(res1.data.sys.country);
      setSearchTemp(Math.round(res1.data.main.temp - 273.15));
      setSearchTempMax(Math.round(res1.data.main.temp_max - 273.15));
      setSearchTempMin(Math.round(res1.data.main.temp_min - 273.15));
      setSearchWeather(searchWeatherObj[0].description);
      setWindSpeed(res1.data.wind.speed.toFixed(1));
      setHumidity(res1.data.main.humidity);
      setCurrentDate(momentDate);
      setSunrise(momentSunrise);
      setSunset(momentSunset);
      setDailyForecasts(forecastArr);

      console.log(res2.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      <Heading />
      <SearchBar city={city} setCity={setCity} onSubmit={onSubmit} />
      {searchCity === null ? (
        <Fragment>
          <h1>Please Search for a city</h1>
        </Fragment>
      ) : (
        <Fragment>
          <LocationHeading
            searchCity={searchCity}
            searchCountry={searchCountry}
            currentDate={currentDate}
          />
          <FirstSection
            searchTemp={searchTemp}
            searchWeather={searchWeather}
            searchTempMax={searchTempMax}
            searchTempMin={searchTempMin}
            windSpeed={windSpeed}
            humidity={humidity}
            sunrise={sunrise}
            sunset={sunset}
          />
          <Forecast dailyForecasts={dailyForecasts} />
        </Fragment>
      )}
    </Fragment>
  );
};

export default App;
