import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 100px 0px;
`;

const Img = styled.img`
  object-fit: cover;
  height: 300px;
  max-height: 100%;
  border-radius: 4px;
`;

const Image = ({ data }) => {
  return (
    <Container>
      <Img src={data} />
    </Container>
  );
};

export default Image;
