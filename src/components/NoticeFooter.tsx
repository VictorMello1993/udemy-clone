import React from "react";
import styled from "styled-components";

export function NoticeFooter() {
  return (
    <NoticeFooterElement>
      <div className="notice-text">
        <span>
          As melhores empresas escolhem a Udemy Business para desenvolver as habilidades de carreira necessárias
        </span>
      </div>
      <div className="notice-logos">
        <img src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg" alt="Nasdaq" />
        <img src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg" alt="Volkswagen" />
        <img src="https://s.udemycdn.com/partner-logos/v4/box-light.svg" alt="Box Light" />
        <img src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg" alt="Net App" />
        <img src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg" alt="Eventbrite" />
      </div>
    </NoticeFooterElement>
  );
}

const NoticeFooterElement = styled.div`
  background-color: red;
  padding: 12px 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .notice-text {
    font-weight: 700;
    font-size: 19px;
    line-height: 22.8px;
    font-family: udemy sans, -apple-system, BlinkMacSystemFont, Roboto, segoe ui, Helvetica, Arial, sans-serif,
      apple color emoji, segoe ui emoji, segoe ui symbol;
  }

  .notice-logos {
    margin: 12px 0 12px 0;
    width: 100%;
    float: right;
  }
`;
