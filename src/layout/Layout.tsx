// estilo global css
import "./styles.css";

import React from "react";
import { Header } from "./Header";

export interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="layout">
      <Header />
      <span>{children}</span>
    </div>
  );
}
