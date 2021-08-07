import React, { useEffect, useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import axios from "../axios";
import CountryHolder from "../Components/CountryHolder";
import { CircularProgress } from "@material-ui/core";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import "../css/searched.css";
import { Link } from "react-router-dom";
function Searched() {
  const { searchedCountry } = useParams();
  const [country, setCountry] = useState();
  const [loading, setLoading] = useState(true);
  const [pageNotAvailable, setPageNotAvailable] = useState(false);
  useEffect(() => {
    async function fetchData() {
      axios
        .get(
          `https://restcountries.eu/rest/v2/name/${searchedCountry}?fullText=true`
        )
        .then((res) => {
          console.log(res.data);
          setCountry(res.data[0]);
          setLoading(false);
        })
        .catch((err) => setPageNotAvailable(true));
    }
    fetchData();
  }, [searchedCountry]);

  console.log(pageNotAvailable);

  return (
    <>
      {pageNotAvailable ? (
        <Redirect to="/*" />
      ) : (
        <div className="searched__country__container">
          <Link to="/">
            <div className="home__button flex__container">
              <KeyboardBackspaceIcon
                style={{ color: "white", fontSize: "30px" }}
              />
            </div>
          </Link>
          {loading ? (
            <>
              <div className="loading__background" />
              <div className="show__loading flex__container">
                <CircularProgress style={{ height: "80px", width: "80px" }} />
              </div>
            </>
          ) : (
            <CountryHolder country={country} />
          )}
        </div>
      )}
    </>
  );
}

export default Searched;
