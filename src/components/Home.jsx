import React from "react";

import Contents from "./layouts/Content/Contents";
// import BlogSection from "./layouts/Blog/BlogSection";
import BlogCarousel from "./layouts/Blog/BlogCarousel";

function Home() {
  return (
    <div className="home">
      <Contents />
      {/* <BlogSection /> */}
      <BlogCarousel />
    </div>
  );
}

export default Home;
