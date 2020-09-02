import React, { Fragment } from "react";

const GeneralInfo = ({
  searchTempMax,
  searchTempMin,
  windSpeed,
  humidity,
  sunrise,
  sunset,
}) => {
  return (
    <Fragment>
      <table className="generalInfoContainer">
        <tbody>
          <tr>
            <td>
              <p className="mainText">{searchTempMax}°</p>
              <p className="subText">Hight</p>
            </td>
            <td>
              <p className="mainText">{windSpeed} mph</p>
              <p className="subText">Wind</p>
            </td>
            <td>
              <p className="mainText">{sunrise}</p>
              <p className="subText">Sunrise</p>
            </td>
          </tr>
          <tr>
            <td>
              <p className="mainText">{searchTempMin}°</p>
              <p className="subText">Low</p>
            </td>
            <td>
              <p className="mainText">{humidity}%</p>
              <p className="subText">Humidity</p>
            </td>
            <td>
              <p className="mainText">{sunset}</p>
              <p className="subText">Sunset</p>
            </td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
};

export default GeneralInfo;
