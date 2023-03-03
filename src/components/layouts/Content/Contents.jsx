import React from "react";
import About from "../About/About";
import NameAndTitle from "../NameAndTitle/NameAndTitle";

import "./Contents.css";

function Contents() {
  return (
    <>
      <div className="beige-box">
        <NameAndTitle />
        <About />
      </div>
    </>
  );
}

export default Contents;
