import React from "react";
import styled from "styled-components";

const MainBtn = styled.a`
  color: ${props => (props.color ? props.color : "#000")};
  font-size: 16px;
  background: ${props => (props.bgColor ? props.bgColor : "#fff")};
  width: auto;
  padding: 16px 42px;
  border-radius: 4px;
  max-width: 200px;
  text-align: center;
  text-decoration: none;
`;

export const MainButton = ({ data, bgColor, color }) => {
  return (
    <MainBtn color={color} bgColor={bgColor} href={data.url}>
      {data.text}
    </MainBtn>
  );
};
