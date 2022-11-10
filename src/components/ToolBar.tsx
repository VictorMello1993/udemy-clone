import React from "react";
import styled from "styled-components";
import { AiOutlineHeart } from "react-icons/ai";
import { MdNotificationsNone, MdOutlineShoppingCart } from "react-icons/md";
import { Avatar } from "./Avatar";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

export function ToolBar() {
  return (
    <ToolBarItems>
      <Link className="item" to="/">
        <AiOutlineHeart size="25px" />
      </Link>
      <Link className="item" to="/">
        <MdOutlineShoppingCart size="25px" />
      </Link>
      <Link className="item" to="/">
        <MdNotificationsNone size="25px" />
      </Link>
      <Link className="item" to="/">
        <StaticImage width={36} height={36} alt="" src="https://avatars.githubusercontent.com/u/35710766?v=4" style={{ borderRadius: "20px" }} />
      </Link>
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
