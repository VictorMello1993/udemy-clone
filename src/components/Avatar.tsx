import React from "react";
import styled from "styled-components";

export interface AvatarProps {
  src: string;
}

export function Avatar({ src }: AvatarProps) {
  return (
    <AvatarElement>
      <img src={src} />
    </AvatarElement>
  );
}

const AvatarElement = styled.div`
  width: 35px;
  height: 35px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }
`;
