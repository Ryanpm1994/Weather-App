import React, { Fragment } from "react";

const GeneralInfo = ({ searchTempMax, searchTempMin }) => {
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
              <p className="mainText">3.1mph</p>
              <p className="subText">Wind</p>
            </td>
            <td>
              <p className="mainText">6:40</p>
              <p className="subText">Sunrise</p>
            </td>
          </tr>
          <tr>
            <td>
              <p className="mainText">{searchTempMin}°</p>
              <p className="subText">Low</p>
            </td>
            <td>
              <p className="mainText">70%</p>
              <p className="subText">Rain</p>
            </td>
            <td>
              <p className="mainText">7:19</p>
              <p className="subText">Sunset</p>
            </td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
};

export default GeneralInfo;
