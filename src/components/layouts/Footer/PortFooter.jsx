import React from "react";

import { Layout, theme } from 'antd';
const { Footer } = Layout;

import Contact from "./Contact";
import Copyright from "./Copyright";
import Links from "./Links";

import "./portFooter.css";

function PortFooter() {
  const {
    token: { colorPrimaryBg, },
  } = theme.useToken();
  return (
    <Footer className="sh-footer" style={{backgroundColor: colorPrimaryBg}}>
      <Links />
      <Contact />
      <Copyright />
    </Footer>
  );
}

export default PortFooter;
