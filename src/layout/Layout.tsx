import "./styles.css";
import React from "react";
import { Header } from "./Header";
import { MainContent } from "./MainContent";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <div className="layout">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
