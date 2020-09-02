import React, { Fragment } from "react";
import CurrentWeather from "./CurrentWeather";
import GeneralInfo from "./GeneralInfo";

const FirstSection = ({
  searchTemp,
  searchWeather,
  searchTempMax,
  searchTempMin,
  windSpeed,
  humidity,
  sunrise,
  sunset,
}) => {
  return (
    <Fragment>
      <div className="firstSectionContainer">
        <CurrentWeather searchTemp={searchTemp} searchWeather={searchWeather} />
        <GeneralInfo
          searchTempMax={searchTempMax}
          searchTempMin={searchTempMin}
          windSpeed={windSpeed}
          humidity={humidity}
          sunrise={sunrise}
          sunset={sunset}
        />
      </div>
    </Fragment>
  );
};

export default FirstSection;
