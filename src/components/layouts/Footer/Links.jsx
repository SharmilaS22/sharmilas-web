import { Col, Row } from "antd";
import React from "react";

function Links() {
  const links = [
    {
      name: "Blog",
      url: "https://sharmilas.medium.com",
    },
    {
      name: "Buy me a Coffee",
      url: "https://www.buymeacoffee.com/sharmilas",
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/sharmila-s22/",
    },
    {
      name: "Github",
      url: "https://github.com/SharmilaS22",
    },
  ];

  return (
    <Row justify="center" align="middle">
      {links.map((link, index) => (
        <Col xs={{ offset: 1 }} lg={{ offset: 1 }} key={index}>
          <a href={link.url} target="_blank" rel="noreferrer">{link.name}</a>
        </Col>
      ))}
    </Row>
  );
}

export default Links;
