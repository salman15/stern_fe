import React from "react";
import styled from "styled-components";
import WorkItem from "./WorkItem";
const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  @media screen and (max-width: 662px) {
    width: 100%;
    max-width: 100%;
    flex-direction: column;
  }
`;

const Work = ({ data }) => {
  return (
    <Container>
      {data.map(item => (
        <WorkItem title={item.title} text={item.text} icon={item.icon} />
      ))}
    </Container>
  );
};

export default Work;
