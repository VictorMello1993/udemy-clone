import React from "react";
import styled from "styled-components";
import { UdemyLogo } from "../components/UdemyLogo";

export function Header() {
  return (
    <>
      <HeaderApp>
        <HeaderAppContent>
          teste
          <div className="row">
            <UdemyLogo height="34px" />
          </div>
          <div className="row">SearchBar</div>
          <div className="row">ToolBar</div>
        </HeaderAppContent>
      </HeaderApp>
    </>
  );
}

const HeaderApp = styled.header`
  background-color: #fff;
  max-width: 1039px;
  margin: auto;
  border-bottom: 1px solid #ccc;
`;

const HeaderAppContent = styled.div`
  background-color: red;
`;
