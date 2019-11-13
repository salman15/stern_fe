import React from "react";
import styled from "styled-components";
import Icon from "@material-ui/core/Icon";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: wheat;
  width: 100%;
  min-height: 40%;
  padding: 100px 0px;
`;
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  border: 1px solid #e8e7e7;
  height: 150px;
  border-radius: 50%;
  flex-direction: column;

  span {
    font-size: 64px;
  }
`;
const HeadItem = styled.div``;

const TabHead = ({ data, setHead }) => {
  return (
    <Container>
      {data.map(item => (
        <>
          <IconContainer onClick={() => setHead(item.head)}>
            <Icon>{item.icon}</Icon>
            <HeadItem>{item.head}</HeadItem>
          </IconContainer>
        </>
      ))}
    </Container>
  );
};

export default TabHead;
