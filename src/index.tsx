import React from "react";
import ReactDOM from "react-dom/client";
import "index.scss";
import { RecoilRoot } from "recoil";
import { AppRouter } from "routes";
import { Footer } from "components/Footer";
import { Navbar } from "components/Navbar";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <Navbar />
      <AppRouter />
      <Footer />
    </RecoilRoot>
  </React.StrictMode>
);
