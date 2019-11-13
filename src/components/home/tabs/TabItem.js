import React from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: wheat;
  width: 100%;
  min-height: 40%;
  padding: 100px 0px;
  flex-direction: column;
`;
const Item = styled.p`
  display: ${props => (props.open ? "flex" : "none")};
  align-items: center;
  max-height: 100%;
  &::before {
    display: block;
    position: relative;
    left: -17px;
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

const TabItem = ({ data, head }) => {
  return data.map(tab => {
    return tab.items.map(tabItem => (
      <Item open={tab.head === head}>{head + " " + tabItem.item}</Item>
    ));
  });
};

export default TabItem;
