import React, { Fragment } from "react";

const Forecast = ({ dailyForecasts } = dailyForecasts) => {
  return (
    <Fragment>
      {console.log(dailyForecasts[0].dt)}
      <div className="forecastContainer">
        <h2>Forecast</h2>
        <div className="cardContainer">
          <div className="forecastCard">
            <p>01.04</p>
            <p>00:00</p>
            <i className="fas fa-cloud"></i>
            <h3>4°</h3>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Forecast;
