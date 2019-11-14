import React from "react";
import styled from "styled-components";

const Item = styled.p`
  display: ${props => (props.open ? "flex" : "none")};
  align-items: center;
  max-height: 100%;
  padding-left: 32px;
  width: fit-content;
  &::before {
    display: block;
    position: relative;
    left: -14px;
    width: 20px;
    height: 5px;
    background-color: #00d69f;
    ${"" /* border: solid 1px; */}
    border-radius: 7px;
    transform: rotate(-45deg);
    content: " ";
    @media screen and (max-width: 662px) {
      max-width: 0px;
      max-height: 0px;
      padding: 5px;
      border-radius: 50%;
      transform: rotate(0deg);
    }
  }
  &::after {
    display: block;
    position: relative;
    left: calc(-100% + -10px);
    background-color: #00d69f;
    border-radius: 7px;
    transform: rotate(-45deg);
    width: 5px;
    top: 2px;
    height: 13px;
    content: " ";
    @media screen and (max-width: 662px) {
      display: none;
    }
  }
`;

const TabItem = ({ data, head, activeHead }) => {
  return data.items.map(tabItem => (
    <Item open={head === activeHead}>{tabItem.item}</Item>
  ));
};

export default TabItem;
