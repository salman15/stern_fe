import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${props => (props.align ? props.align : "center")};
  width: 80%;
  height: 100%;
  flex-direction: ${props => (props.direction ? props.direction : "row")};
`;

export const ContainerLayout = ({ children, align, direction }) => {
  return (
    <Container direction={direction} align={align}>
      {children}
    </Container>
  );
};
