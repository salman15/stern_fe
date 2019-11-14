import React from "react";
import styled from "styled-components";
import Image from "./Image";
import Text from "./Text";
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-bottom: 100px;
  @media screen and (max-width: 662px) {
    flex-direction: column;
  }
`;

const TextAndImage = ({ data }) => {
  return (
    <Container>
      <Image data={data.image} />
      <Text data={data.text} />
    </Container>
  );
};

export default TextAndImage;
