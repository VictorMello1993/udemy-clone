import React from "react";
import styled from "styled-components";
import { Banner } from "../components/Banner";

export function MainContent() {
  return (
    <>
      <MainContentElement>
        <Banner />
      </MainContentElement>
    </>
  );
}

const MainContentElement = styled.main`
  height: 500px;
`;
