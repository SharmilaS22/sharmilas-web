import { Card, Carousel, List, Space, Tag, theme } from "antd";
import React from "react";

import articleListJSON from "../../../blogPosts.json";
import Meta from "antd/es/card/Meta";

import './BlogSection.css'

const articleList = articleListJSON.posts;

function BlogSection() {
  const {
    token: { colorPrimary, colorBgContainer },
  } = theme.useToken();
  return (
    <div className="blog-container">
      <List
        grid={{ gutter: 50, column: 3, sm: { column: 1, gutter: 10}}}
        dataSource={articleList}
        renderItem={(item) => (
          <List.Item key={item.pubDate}>
            <Card
              // actions={[item.categories.map((tag) => <span>{tag}</span>)]}
              key={item.pubDate}
              style={{border: 'black solid 2px' , backgroundColor: 'white', marginBlock: '2rem'}}
              hoverable
              className="card-theme box-shadow-dark"
              cover={<img alt={item.title} src={item.thumbnail} />}
            >
              <Meta 
              title={item.title} 
              description={
                <Space wrap align="center" style={{textAlign: 'center'}}>
                {item.categories.map((tag) => <Tag color={colorPrimary} style={{margin: '5px'}}>{tag}</Tag>)}
                </Space>
              } />
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
}

export default BlogSection;
