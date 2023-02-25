import "./App.css";
import "antd/dist/reset.css";
import { ConfigProvider } from "antd";

import Name from "./components/layouts/Name";
import Home from "./components/home/Home";

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
      <Name />
      <Home />
    </ConfigProvider>
  );
}

export default App;
