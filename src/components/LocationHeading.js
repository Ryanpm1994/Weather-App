import React, { Fragment } from "react";

const LocationHeading = ({ searchCity, searchCountry, currentDate }) => {
  return (
    <Fragment>
      <div className="localHeadingContainer">
        <h1>
          {searchCity} {searchCountry}
        </h1>
        <h2>{currentDate}</h2>
      </div>
    </Fragment>
  );
};

export default LocationHeading;
