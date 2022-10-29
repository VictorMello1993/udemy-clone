import React from "react";
import styled from "styled-components";

export function Banner() {
  return (
    <>
      <BannerElement>
        <div className="image-container">
          <div className="image">
            <img
              src="https://img-c.udemycdn.com/notices/featured_banner/image_udlite/1cd05c12-f169-45ae-a452-adb8c81739b4.jpg"
              alt="Banner"
            />
          </div>
          <div className="banner-description">
            <h1>Encontre o melhor para você</h1>
            <p>
              Muitos cursos oferecem prévias gratuitas para que você possa conferir o conteúdo e o estilo de ensino. Dê
              uma olhada.
            </p>
          </div>
        </div>
      </BannerElement>
    </>
  );
}

const BannerElement = styled.div`
  .image-container {
    height: 400px;
    width: 90%;
    margin: 0 auto;
  }

  .banner-description {
    background-color: #fff;
    width: 440px;
    height: 203.2px;
    margin: 24px 48px;
    padding: 24px;
    position: absolute;
    inset: 110px 110px;
  }
`;
