import "./styles.css";
import React from "react";
import { Header } from "./Header";
import { MainContent } from "./MainContent";
import { Footer } from "./Footer";

export type LayoutProps = {
  data?: any;
  children: React.ReactNode;
};

export function Layout(props: LayoutProps) {
  return (
    <div className="layout">
      <Header />
      <MainContent data={props.data}>{props.children}</MainContent>
      <Footer />
    </div>
  );
}
