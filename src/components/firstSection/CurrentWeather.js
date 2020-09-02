import React, { Fragment } from "react";

const CurrentWeather = ({ searchTemp, searchWeather }) => {
  return (
    <Fragment>
      <div className="currentWeatherContainer">
        <i className="fas fa-cloud"></i>
        <div className="currentWeatherText">
          <h1 className="currentTemp">{searchTemp}°</h1>
          <h2 className="currentCondition">{searchWeather}</h2>
        </div>
      </div>
    </Fragment>
  );
};

export default CurrentWeather;
