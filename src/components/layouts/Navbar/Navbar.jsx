import React from "react";
import { Layout, Menu } from "antd";

import "./navbar.css";

const { Header } = Layout;

function Navbar() {
  // const {
  //   token: { colorPrimary },
  // } = theme.useToken();

  const menuItems = [
    {
      label: "Home",
      key: "home",
      className: 'menu-items'
    },
    {
      label: "About",
      key: "about",
      className: 'menu-items'
    },
    {
      label: (
        <a href="https://sharmilas.medium.com" target="_blank" rel="noopener noreferrer">
          Blog
        </a>
      ),
      key: "blog",
      className: 'menu-items'
    },
    {
      label: "Contact",
      key: "contact",
      className: 'menu-items'
    }
  ];

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          className="sh-navbar"
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["home"]}
          items={menuItems}
        >
        </Menu>
      </Header>
    </Layout>
  );
}

export default Navbar;
