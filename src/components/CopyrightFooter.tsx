import React from "react";
import styled from "styled-components";
import { UdemyLogo } from "./UdemyLogo";

export function CopyrightFooter() {
  return (
    <CopyrightFooterElement>
      <UdemyLogo height="34px" fill="#fff" />
      <div className="copyright-description">
        <span>© 2022 Udemy, Inc.</span>
      </div>
    </CopyrightFooterElement>
  );
}

const CopyrightFooterElement = styled.div`
  padding: 12px 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
