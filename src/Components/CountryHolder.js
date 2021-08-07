import React from "react";
import "../css/countryHolder.css";
function CountryHolder({ country }) {
  return (
    <div
      className="country__holder flex__container"
      style={{
        backgroundImage: `linear-gradient(to right,rgba(0,0,0,0),rgb(234 229 229)),url(${country?.flag})`,
      }}
    >
      <table className="table__container">
        <tbody>
          <tr>
            <td className="field">Country</td>
            <td className="flex__container" style={{ height: "35px" }}>
              <div className="name">{country.name}</div>
              <img className="country__flag" src={country.flag} alt="flag" />
            </td>
          </tr>
          <tr>
            <td className="field">Capital</td>
            <td className="flex__container" style={{ height: "35px" }}>
              <div className="name">{country.capital}</div>
            </td>
          </tr>
          <tr>
            <td className="field">Region</td>
            <td className="flex__container" style={{ height: "35px" }}>
              <div className="name">{country.region}</div>
            </td>
          </tr>
          <tr>
            <td className="field">Subregion</td>
            <td className="flex__container" style={{ height: "35px" }}>
              <div className="name">{country.subregion}</div>
            </td>
          </tr>
          <tr>
            <td className="field">Population</td>
            <td className="flex__container" style={{ height: "35px" }}>
              <div className="name">{country.population}</div>
            </td>
          </tr>
          <tr>
            <td className="field">Borders</td>
            <td className="flex__container">
              <div className="name flex__container">
                {country.borders.length > 0 ? (
                  country.borders.map((name) => (
                    <div style={{ marginRight: "10px" }} key={name}>
                      {name}
                    </div>
                  ))
                ) : (
                  <div>None</div>
                )}
              </div>
            </td>
          </tr>
          <tr>
            <td className="field">Language</td>
            <td className="flex__container" style={{ height: "35px" }}>
              <div className="name">{country.languages[0].name}</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryHolder;
