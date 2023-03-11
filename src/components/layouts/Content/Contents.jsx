import React from "react";
import About from "./About";
import NameAndTitle from "../NameAndTitle/NameAndTitle";

import "./Contents.css";

function Contents() {
  return (
    <div className="contents">
      <div className="beige-box">
        <NameAndTitle />
        <About />
      </div>
    </div>
  );
}

export default Contents;
