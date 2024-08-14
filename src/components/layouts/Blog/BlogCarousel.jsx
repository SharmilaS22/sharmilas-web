import React from "react";
import { Card, Space, Tag, theme } from "antd";
import Slider from "react-slick";

import articleListJSON from "../../../blogPosts.json";
import './BlogCarousel.css';

const articleList = articleListJSON.posts;

function BlogCarousel() {
  const {
    token: { colorPrimary, colorBgContainer },
  } = theme.useToken();

  const responsiveObjects = [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 425,
      settings: {
        slidesToShow: 1,
      },
    }
  ]
  return (
    <div className="blog-container" style={{ backgroundColor: colorBgContainer }}>
      <h1 className="section-header">Blog</h1>
      <Slider
        dots={false}
        arrows={false}
        slidesToShow={3}
        slidesToScroll={1}
        swipeToSlide
        autoplay
        autoplaySpeed={3000}
        pauseOnHover
        responsive={responsiveObjects}
      >
        {articleList.map((article, index) => (
          <Card
            key={index}
            hoverable
            style={{ width: 240 }}
            className="card-theme box-shadow-dark"
            cover={<img alt="example" src={article.thumbnail} />}
          >
            <Card.Meta title={article.title} description={
              <Space wrap align="center" style={{ textAlign: "center" }}>
                {article.categories.map((tag) => (
                  <Tag key={tag} color={colorPrimary} style={{ margin: "5px" }}>
                    {tag}
                  </Tag>
                ))}
              </Space>
            }></Card.Meta>
          </Card>
        ))}
      </Slider>
    </div>
  );
}

export default BlogCarousel;
