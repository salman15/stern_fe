import React from "react";
import styled from "styled-components";
import Icon from "@material-ui/core/Icon";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 40%;
  padding-bottom: 20px;
`;
const IconContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 150px;
  flex-direction: column;
  border-bottom: solid ${props => (props.active ? "4px" : "2px")};
  border-color: ${props => (props.active ? "#00d69f" : "#f2f3f5")};
  color: ${props => (props.active ? "#00d69f" : "black")};
  transition: all 0.5s ease;
  span {
    font-size: 64px;
  }
`;
const HeadItem = styled.p`
  color: #00d69f;
  font-weight: bold;
`;

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
