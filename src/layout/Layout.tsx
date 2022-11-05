import "./styles.css";
import React from "react";
import { Header } from "./Header";
import { MainContent } from "./MainContent";
import { Footer } from "./Footer";

export type LayoutProps = {
  data: any;
};

export function Layout({ data }: LayoutProps) {
  return (
    <div className="layout">
      <Header />
      <MainContent coursesInfos={data} />
      <Footer />
    </div>
  );
}
