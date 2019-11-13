import React from "react";
import styled from "styled-components";
import Sticker from "../../shared/Sticker";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: wheat;
  width: 100%;
  min-height: 40%;
  padding: 100px 0px;
  flex-direction: column;
`;

const Subject = styled.p``;
const Title = styled.h1``;

const List = styled.ul``;

const ListItem = styled.li`
  display: flex;
  &::before {
    display: block;
    position: relative;
    left: -17px;
    top: 7px;
    width: 5px;
    height: 5px;
    background-color: black;
    border: solid 1px;
    border-radius: 50%;
    content: " ";
  }
  &::after {
    display: block;
    position: relative;
    left: calc(-100% + -4px);
    width: 15px;
    height: 16px;
    border: solid 2px #00d69f;
    border-radius: 50%;
    content: " ";
  }
`;
const Text = ({ data }) => {
  return (
    <Container>
      <Subject>{data.subject}</Subject>
      <Sticker data={data.sticker} />
      <Title> {data.title}</Title>
      <List>
        {data.list.map(item => (
          <ListItem>{item.bullet}</ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Text;
