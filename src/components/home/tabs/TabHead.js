import React from "react";
import styled from "styled-components";
import Icon from "@material-ui/core/Icon";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 40%;
  padding-bottom: 10px;
`;
const IconContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 150px;
  flex-direction: column;
  border-bottom: solid 2px;
  border-color: ${props => (props.active ? "blue" : "black")};
  color: ${props => (props.active ? "blue" : "black")};
  span {
    font-size: 64px;
  }
`;
const HeadItem = styled.div``;

const TabHead = ({ data, head, setHead }) => {
  return (
    <Container>
      {data.map(item => (
        <>
          <IconContainer
            active={item.head === head}
            onClick={() => setHead(item.head)}
          >
            <Icon>{item.icon.toLowerCase()}</Icon>
            <HeadItem>{item.head}</HeadItem>
          </IconContainer>
        </>
      ))}
    </Container>
  );
};

export default TabHead;
