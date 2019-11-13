import React from "react";
import styled from "styled-components";
import { MainButton } from "./Buttons";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: ${props => (props.align ? props.align : "inherit")};
`;

const Title = styled.h1`
  ${props => props.head && " font-size:40px; margin: 10px 0px;"};
`;

const Sub = styled.h2``;

const Text = styled.p``;

const TitleAndSub = ({ title, sub, text, type, align, button }) => {
  const head = type === "head";
  const intro = type === "intro";
  console.log(head, intro);
  return (
    <Container head={head} intro={intro} align={align}>
      {title && (
        <Title head={head} intro={intro}>
          {title}
        </Title>
      )}
      {sub && (
        <Sub head={head} intro={intro}>
          {sub}
        </Sub>
      )}
      {text && (
        <Text head={head} intro={intro}>
          {text}
        </Text>
      )}
      {button && <MainButton data={button} />}
    </Container>
  );
};

export default TitleAndSub;
