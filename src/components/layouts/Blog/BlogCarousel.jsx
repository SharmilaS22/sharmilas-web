import React from "react";
import { Card, Carousel, Space, Tag, theme } from "antd";
import Meta from "antd/es/card/Meta";

import articleListJSON from "../../../blogPosts.json";
import './BlogCarousel.css';

const articleList = articleListJSON.posts;

function BlogCarousel() {
  const {
    token: { colorPrimary, colorBgContainer },
  } = theme.useToken();
  return (
    <div style={{margin: '2rem'}}>
    <Carousel 
      xxl={{ slidesToShow: 3 }}
      xl={{ slidesToShow: 3 }}
      lg={{ slidesToShow: 3 }}
      md={{ slidesToShow: 1 }}
      sm={{ slidesToShow: 1 }}
     autoplay arrows
    >
      {articleList.map((item) => (
        <Card
          key={item.pubDate}
        //   hoverable
          className="card-theme box-shadow-dark"
          cover={<img alt={item.title} src={item.thumbnail} />}
        >
          <Meta
            title={item.title}
            description={
              <Space wrap align="center" style={{ textAlign: "center" }}>
                {item.categories.map((tag) => (
                  <Tag color={colorPrimary} style={{ margin: "5px" }}>
                    {tag}
                  </Tag>
                ))}
              </Space>
            }
          />
        </Card>
      ))}
    </Carousel>
    </div>
  );
}

export default BlogCarousel;
