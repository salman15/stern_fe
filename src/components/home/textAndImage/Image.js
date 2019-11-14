import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 100px 0px;
  @media screen and (max-width: 662px) {
    padding-bottom: 0px;
  }
`;

const Img = styled.img`
  object-fit: cover;
  height: 300px;
  max-height: 100%;
  border-radius: 0.25rem;
  @media screen and (max-width: 662px) {
    height: 200px;
  }
`;

const Image = ({ data }) => {
  return (
    <Container>
      <Img src={data} />
    </Container>
  );
};

export default Image;
