import React, { useState } from "react";
import { Button, Drawer, Layout, Menu, theme} from "antd";
import { MenuOutlined } from "@ant-design/icons";
import "./navbar.css";

const { Header } = Layout;
//TODO style test
function Navbar() {
  const {
    token: { colorPrimary, colorBgContainer },
  } = theme.useToken();

  const menuItems = [
    //TODO: Update links
    {
      label: "Home",
      key: "home",
      className: "menu-items",
    },
    {
      label: "About",
      key: "about",
      className: "menu-items",
    },
    {
      label: (
        <a
          href="https://sharmilas.medium.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Blog
        </a>
      ),
      key: "blog",
      className: "menu-items",
    },
    {
      label: "Contact",
      key: "contact",
      className: "menu-items",
    },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  const showDrawer = () => {
    setMenuOpen(true);
  };

  const onClose = () => {
    setMenuOpen(false);
  };

  return (
    <Layout className="layout">
      <Header
        className="sh-header"
        style={{ backgroundColor: colorBgContainer }}
      >
        <div className="logo" />
        <Menu
          mode="horizontal"
          className="large-screen-menu"
          defaultSelectedKeys={["home"]}
          items={menuItems}
        ></Menu>
        <Button
          open
          type="primary"
          onClick={showDrawer}
          className="mobile-screen-menu-button"
          style={{color: colorPrimary}}
        >
          <MenuOutlined />
        </Button>
        <Drawer
          title=""
          placement="right"
          onClose={onClose}
          open={menuOpen}
          width="250"
        >
          <Menu
            style={{ backgroundColor: "inherit" }}
            className="mobile-screen-menu"
            mode="vertical"
            defaultSelectedKeys={["home"]}
            items={menuItems}
          ></Menu>
        </Drawer>
      </Header>
    </Layout>
  );
}

export default Navbar;
