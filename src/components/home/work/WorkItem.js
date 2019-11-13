import React from "react";
import styled from "styled-components";
import Icon from "@material-ui/core/Icon";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 200px;
  flex-direction: column;
  text-align: center;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  border: 1px solid #e8e7e7;
  height: 150px;
  border-radius: 50%;
  span {
    font-size: 64px;
  }
`;
const Title = styled.h1`
  font-size: 15px;
  color: #14203c;
`;
const Work = styled.p``;

const WorkItem = ({ title, text, icon }) => {
  return (
    <Container>
      <IconContainer>
        <Icon>{icon + "_outlined"}</Icon>
      </IconContainer>
      <Title>{title}</Title>
      <Work>{text}</Work>
    </Container>
  );
};

export default WorkItem;
