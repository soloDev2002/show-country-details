import React, { useEffect, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import "../css/navbar.css";
import { Link, useLocation } from "react-router-dom";

function Navbar({ data }) {
  const [searchedResult, setSearchedResult] = useState();
  const [length, setLength] = useState();
  const [searched, setSearched] = useState("");
  const countries = data;
  const location = useLocation().pathname;

  useEffect(() => {
    setSearched("");
    setLength(0);
  }, [location]);

  function handleSearch(search) {
    const length = search.length;
    setLength(length);
    if (length > 0) {
      const filteredCountry = countries?.filter(
        (country) =>
          country.name.substr(0, length).toLowerCase() === search.toLowerCase()
      );
      setSearchedResult(filteredCountry);
    } else {
      setSearchedResult([]);
    }
  }

  return (
    <div className="navbar__container">
      <form
        className="search__form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          className="search__field"
          type="text"
          placeholder="Search Country"
          onChange={(e) => {
            setSearched(e.target.value);
            handleSearch(e.target.value);
          }}
          required
          value={searched}
        />

        <button type="submit" className="search__button">
          <SearchIcon style={{ marginTop: "5px" }} />
        </button>
      </form>
      <div className="searched__result__container">
        {searchedResult?.length > 0
          ? searchedResult?.map((country) => (
              <Link
                to={`/Searched/${country.name}`}
                key={country.name}
                onClick={() => {
                  setSearchedResult([]);
                }}
              >
                <div className="searched__country flex__container">
                  <div className="country__name">{country.name}</div>
                  <div className="country__flag flex__container">
                    <img
                      src={country.flag}
                      alt="flag"
                      height="20px"
                      width="30px"
                    />
                  </div>
                </div>
              </Link>
            ))
          : length > 0 && (
              <div
                className="searched__country flex__container"
                style={{ cursor: "not-allowed" }}
              >
                <div className="country__name">None</div>
              </div>
            )}
      </div>
    </div>
  );
}

export default Navbar;
