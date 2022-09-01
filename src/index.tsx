import React from "react";
import ReactDOM from "react-dom/client";
import "index.scss";
import { RecoilRoot } from "recoil";
import Home from "pages/Home";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <Home />
    </RecoilRoot>
  </React.StrictMode>
);
