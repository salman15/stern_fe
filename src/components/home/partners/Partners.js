import React from "react";
import styled from "styled-components";
import PartnersItem from "./PartnersItem";
const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
`;

const Partners = ({ data }) => {
  return (
    <Container>
      {data.map(item => (
        <PartnersItem image={item.image} imageAlt={item.imageAlt} />
      ))}
    </Container>
  );
};

export default Partners;
