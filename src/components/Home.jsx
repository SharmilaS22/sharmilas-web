import React from "react";

import Contents from "./layouts/Content/Contents";
import BlogCarousel from "./layouts/Blog/BlogCarousel";

function Home() {
  return (
    <div className="home">
      <Contents />
      <BlogCarousel />
    </div>
  );
}

export default Home;
