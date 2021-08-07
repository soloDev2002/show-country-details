import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Searched from "./pages/Searched";
import PageNotFound from "./pages/PageNotFound";
import Navbar from "./Components/Navbar";
import axios from "./axios";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      axios
        .get("https://restcountries.eu/rest/v2/all")
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar data={data} />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/Searched/:searchedCountry" exact component={Searched} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
