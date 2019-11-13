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
    width: 5px;
    height: 5px;
    background-color: black;
    border: solid 1px;
    border-radius: 50%;
    content: " ";
  }
  &::after {
    display: block;
    position: relative;
    left: calc(-100% + -4px);
    width: 15px;
    height: 16px;
    border: solid 2px #00d69f;
    border-radius: 50%;
    content: " ";
  }
`;

const TabItem = ({ data, head, activeHead }) => {
  return data.items.map(tabItem => (
    <Item open={head === activeHead}>{head + " " + tabItem.item}</Item>
  ));
};

export default TabItem;
