import React from "react";

import Navbar from "./layouts/Navbar/Navbar";
import NameAndTitle from "./layouts/NameAndTitle/NameAndTitle";
import About from "./layouts/About/About";

function Home() {
  return (
    <>
      <Navbar />
      <NameAndTitle />
      <About />
    </>
  );
}

export default Home;
