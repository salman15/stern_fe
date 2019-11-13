import React from "react";
import styled from "styled-components";

const MainBtn = styled.a`
  color: #000;
  font-size: 16px;
  background: #fff;
  width: auto;
  padding: 16px 42px;
  border-radius: 4px;
  max-width: 100px;
  text-align: center;
  text-decoration: none;
`;

export const MainButton = ({ data }) => {
  return <MainBtn href={data.url}>{data.text}</MainBtn>;
};
