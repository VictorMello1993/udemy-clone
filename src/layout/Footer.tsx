import React from "react";
import styled from "styled-components";
import { BannerFooter } from "../components/BannerFooter";
import { CopyrightFooter } from "../components/CopyrightFooter";
import { NoticeFooter } from "../components/NoticeFooter";

export function Footer() {
  return (
    <FooterElement>
      <BannerFooter />
      <NoticeFooter />
      <CopyrightFooter />
    </FooterElement>
  );
}

const FooterElement = styled.footer`
  background-color: #1c1d1f;
  color: #fff;
  /* height: 220px; */

  /* @media (min-width: 500px) and (max-width: 860px) {
    height: 71vh;
  } */

  /* @media (min-width: 750px) {
    height: 100vh;
  } */

  @media (min-width: 424px) {
    width: 100vw;
    span {
      line-height: 35px;
      font-size: 14px;
    }
  }
`;
