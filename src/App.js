import "./App.css";
import "antd/dist/reset.css";
import { ConfigProvider } from "antd";

import Home from "./components/Home";
import Navbar from "./components/layouts/Navbar/Navbar";
import PortFooter from "./components/layouts/Footer/PortFooter";
import { Layout } from 'antd';
const { Content } = Layout;

function App() {
  const colors = {
    light: "#f9f7fc",
    dark: "#262626",
    primary: "#bca07c",
    secondary: "#d8cbb9",
  };
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: colors.primary,
          colorPrimaryBg: colors.secondary,
          colorBgContainer: colors.secondary,
          colorInfo: colors.secondary,
          colorIcon: colors.light,
          colorIconHover: colors.primary,
          colorLink: colors.light,
          colorLinkActive: colors.primary,
          colorLinkHover: colors.primary,
          fontSize: 16
        },
      }}
    >
      <Navbar />
      <Content style={{ padding: "2rem 1rem" }}>
        <Home />
      </Content>
      <PortFooter />
    </ConfigProvider>
  );
}

export default App;
