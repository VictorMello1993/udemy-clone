// estilo global css
import "./styles.css";

import React from "react";
import { Header } from "./Header";
import { MainContent } from "./MainContent";

export function Layout() {
  return (
    <div className="layout">
      <Header />
      <MainContent />
    </div>
  );
}
