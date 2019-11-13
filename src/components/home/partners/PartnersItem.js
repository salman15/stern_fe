import React from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const Partner = styled.img`
  height: 70px;
  height: 70px;
  width: 70px;
  object-fit: scale-down;
  filter: grayscale(100%);
  opacity: 0.3;
`;

const PartnersItem = ({ image, imageAlt }) => {
  return (
    <Container>
      <Partner src={image} alt={imageAlt} />
    </Container>
  );
};

export default PartnersItem;
