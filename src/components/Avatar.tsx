import { IGatsbyImageData } from "gatsby-plugin-image";
import { GatsbyImage } from "gatsby-plugin-image/dist/src/components/gatsby-image.browser";
import React from "react";
import styled from "styled-components";

export type AvatarProps = {} & ({ src: string } | { image: IGatsbyImageData });

export function Avatar({ ...data }: AvatarProps) {
  return (
    <AvatarElement>
      {"src" in data && <img src={data.src} />}
      {"image" in data && <GatsbyImage image={data.image} alt="" />}
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
