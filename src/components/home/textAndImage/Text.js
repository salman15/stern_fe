import React from "react";
import styled from "styled-components";
import Sticker from "../../shared/Sticker";

const Container = styled.div`
  display: flex;
  align-content: center;
  justify-items: start;
  width: 100%;
  min-height: 40%;
  padding: 100px 40px;
  flex-direction: column;
  @media screen and (max-width: 662px) {
    padding: 100px 0;
    width: 90%;
  }
`;

const Subject = styled.p`
  font-size: 16px;
  color: #b0b2b7;
  font-weight: bold;
  text-transform: uppercase;
`;
const Title = styled.h1`
  clear: both;
  color: #14203c;
  font-size: 47px;
  margin: 20px 0px;
`;

const List = styled.ul``;

const ListItem = styled.li`
  display: flex;
  width: fit-content;
  margin: 10px 0;

  &::before {
    display: block;
    position: relative;
    left: -14px;
    top: 5px;
    width: 5px;
    height: 5px;
    background-color: black;
    border: solid 1px;
    border-radius: 50%;
    content: " ";
    @media screen and (max-width: 662px) {
      max-width: 0px;
      max-height: 0px;
      padding: 5px;
      border-radius: 50%;
      background-color: #00d69f;
      border: none;
      transform: rotate(0deg);
    }
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
    @media screen and (max-width: 662px) {
      display: none;
    }
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
