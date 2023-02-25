import "./App.css";
import "antd/dist/reset.css";
import { ConfigProvider } from "antd";

import Home from "./components/Home";
import Name from "./components/layouts/NameAndTitle/Name";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#000000",
          colorPrimaryBg: "#273290",
          colorBgContainer: "#bbbbbb",
        },
      }}
    >
      <Home />
      <Name />
    </ConfigProvider>
  );
}

export default App;
