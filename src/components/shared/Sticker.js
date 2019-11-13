import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: #00d69f;
  padding: 4px 5px;
  color: #fff;
  clear: both;
  font-size: 16px;
  width: fit-content;
`;

const Sticker = ({ data }) => {
  return <Container>{data}</Container>;
};

export default Sticker;
