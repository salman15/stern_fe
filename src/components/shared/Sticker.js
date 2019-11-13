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
`;

const Sticker = ({ data }) => {
  return <Container>{data}</Container>;
};

export default Sticker;
