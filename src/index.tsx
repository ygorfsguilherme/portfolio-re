import React from "react";
import ReactDOM from "react-dom/client";
import "index.scss";
import { RecoilRoot } from "recoil";
import { AppRouter } from "routes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <AppRouter />
    </RecoilRoot>
  </React.StrictMode>
);
