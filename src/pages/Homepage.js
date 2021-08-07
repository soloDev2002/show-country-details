import React, { useEffect, useState } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "../css/homepage.css";
import axios from "../axios";
import CountryHolder from "../Components/CountryHolder";
import ReplayIcon from "@material-ui/icons/Replay";
import CircularProgress from "@material-ui/core/CircularProgress";

function Homepage() {
  const [showSelect, setShowSelect] = useState(false);
  const [region, setRegion] = useState("");
  const [allCountry, setAllCountry] = useState();
  const [showLoading, setShowLoading] = useState(true);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const StorageRegion = sessionStorage.getItem("region");
    StorageRegion ? setRegion(StorageRegion) : setRegion("SAARC");
  }, []);

  useEffect(() => {
    setShowLoading(true);
    sessionStorage.setItem("region", region);
    async function fetchData() {
      axios
        .get(`https://restcountries.eu/rest/v2/regionalbloc/${region}`)
        .then((res) => {
          setTimeout(() => {
            setShowLoading(false);
          }, 2000);
          setAllCountry(res.data);
        })
        .catch((err) => setRegion("SAARC"));
    }
    region && fetchData();
  }, [region, toggle]);

  return (
    <div className="home__container flex__container">
      {showLoading && (
        <>
          <div className="loading__background" />
          <div className="show__loading flex__container">
            <CircularProgress style={{ height: "80px", width: "80px" }} />
          </div>
        </>
      )}
      <div
        className="region__selector flex__container"
        style={{ zIndex: `${showSelect ? "104" : "101"}` }}
      >
        <div className="select__label">Selected Region :</div>
        <div
          className="regions"
          onClick={() => setShowSelect(!showSelect)}
          style={{
            height: `${showSelect ? "100px" : "20px"}`,
            overflowY: `${showSelect ? "scroll" : "hidden"}`,
          }}
        >
          <div
            className="option flex__container"
            style={{ position: "fixed", background: "aliceblue" }}
          >
            <div style={{ flex: "1" }}>{showSelect ? "" : region}</div>
            <div style={{ marginLeft: "auto", marginTop: "5px" }}>
              <ExpandMoreIcon />
            </div>
          </div>
          <div
            className="option flex__container"
            onClick={() => setRegion("EU")}
          >
            EU
          </div>
          <div
            className="option  flex__container"
            onClick={() => setRegion("EFTA")}
          >
            EFTA
          </div>
          <div
            className="option  flex__container"
            onClick={() => setRegion("CARICOM")}
          >
            CARICOM
          </div>
          <div
            className="option  flex__container"
            onClick={() => setRegion("PA")}
          >
            PA
          </div>
          <div
            className="option  flex__container"
            onClick={() => setRegion("AU")}
          >
            AU
          </div>
          <div
            className="option  flex__container"
            onClick={() => setRegion("USAN")}
          >
            USAN
          </div>
          <div
            className="option  flex__container"
            onClick={() => setRegion("EEU")}
          >
            EEU
          </div>
          <div
            className="option  flex__container"
            onClick={() => setRegion("AL")}
          >
            AL
          </div>
          <div
            className="option  flex__container"
            onClick={() => setRegion("ASEAN")}
          >
            ASEAN
          </div>
          <div
            className="option  flex__container"
            onClick={() => setRegion("CAIS")}
          >
            CAIS
          </div>
          <div
            className="option  flex__container"
            onClick={() => setRegion("CEFTA")}
          >
            CEFTA
          </div>
          <div
            className="option  flex__container"
            onClick={() => setRegion("NAFTA")}
          >
            NAFTA
          </div>
          <div
            className="option  flex__container"
            onClick={() => setRegion("SAARC")}
          >
            SAARC
          </div>
        </div>
      </div>
      <div className="display__container">
        {allCountry?.map((country) => (
          <CountryHolder country={country} key={country.name} />
        ))}
      </div>
      <div
        className="reload__button flex__container"
        onClick={() => setToggle(!toggle)}
      >
        <ReplayIcon style={{ color: "white", fontSize: "30px" }} />
      </div>
    </div>
  );
}

export default Homepage;
