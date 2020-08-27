import React, { Fragment } from "react";
import CurrentWeather from "./CurrentWeather";
import GeneralInfo from "./GeneralInfo";

const FirstSection = ({
  searchTemp,
  searchWeather,
  searchTempMax,
  searchTempMin,
}) => {
  return (
    <Fragment>
      <div className="firstSectionContainer">
        <CurrentWeather searchTemp={searchTemp} searchWeather={searchWeather} />
        <GeneralInfo
          searchTempMax={searchTempMax}
          searchTempMin={searchTempMin}
        />
      </div>
    </Fragment>
  );
};

export default FirstSection;
