import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${props => (props.align ? props.align : "center")};
  width: ${props => (props.size ? props.size : "80%")};
  height: 100%;
  flex-direction: ${props => (props.direction ? props.direction : "row")};
  background-color: ${props => props.background};
  background-image: url(${props => props.backgroundImage});
  background-attachment: fixed;
  @media screen and (max-width: 662px) {
    flex-direction: column-reverse;
    width: 90%;
  }
`;

export const ContainerLayout = ({
  children,
  align,
  direction,
  size,
  background,
  backgroundImage
}) => {
  return (
    <Container
      direction={direction}
      size={size}
      align={align}
      background={background}
      backgroundImage={backgroundImage}
    >
      {children}
    </Container>
  );
};
