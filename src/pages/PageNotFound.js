import React from "react";
import NotFound from "../svg/404_not_found.svg";
function PageNotFound() {
  return (
    <div className="flex__container" style={{ height: "100vh" }}>
      <img src={NotFound} alt="404" height="50%" width="50%" />
    </div>
  );
}

export default PageNotFound;
