import React from "react";
import styled from "styled-components";
import { AiOutlineHeart } from "react-icons/ai";
import { MdNotificationsNone, MdOutlineShoppingCart } from "react-icons/md";
import { Avatar } from "./Avatar";

export function ToolBar() {
  return (
    <ToolBarItems>
      <a className="item" href="/">
        <AiOutlineHeart size="25px" />
      </a>
      <a className="item" href="/">
        <MdOutlineShoppingCart size="25px" />
      </a>
      <a className="item" href="/">
        <MdNotificationsNone size="25px" />
      </a>
      <a className="item" href="/">
        <Avatar src="https://avatars.githubusercontent.com/u/35710766?v=4" />
      </a>
    </ToolBarItems>
  );
}

const ToolBarItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  a,
  a:active {
    text-decoration: none;
    color: #000;
  }

  a:hover {
    color: #5624d0;
  }

  .item {
    display: flex;
    align-items: center;
  }

  .item:not(:first-child) {
    margin-left: 22px;
  }
`;
