import React from "react";
import { CircularProgress } from "@material-ui/core";
function Loading() {
  return (
    <div>
      <div className="loading__background" />
      <div className="show__loading flex__container">
        <CircularProgress style={{ height: "80px", width: "80px" }} />
      </div>
    </div>
  );
}

export default Loading;
