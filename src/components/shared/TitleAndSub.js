import React from "react";
import styled from "styled-components";
import { MainButton } from "./Buttons";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: ${props => (props.align ? props.align : "inherit")};
  max-width: ${props => (props.head ? "40%" : " 50%")};
  padding-bottom: 50px;
  h1,
  h2 {
    color: ${props => props.color};
  }
`;

const Title = styled.h1`
  margin: 0;
  ${props => props.head && "font-size:40px; margin: 10px 0px"};
  ${props =>
    props.intro &&
    "padding-top:100px;font-size: 16px; text-transform: uppercase; color: #b0b2b7;font-weight: bold;"};
`;

const Sub = styled.h2`
  margin: 0;
  ${props =>
    props.intro &&
    "color: #14203c;font-size: 32px; text-align: center;  font-weight: 500;  margin-top: 10px; margin-bottom: 0px;"}
`;

const Text = styled.p`
  margin: 30px 0;
`;

const TitleAndSub = ({ title, sub, text, type, align, button, color }) => {
  const head = type === "head";
  const intro = type === "intro";
  console.log(head, intro);
  return (
    <Container head={head} intro={intro} align={align} color={color}>
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
