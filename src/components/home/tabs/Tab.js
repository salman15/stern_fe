import React from "react";
import styled from "styled-components";
import TabItem from "./TabItem";
import TabHead from "./TabHead";

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

const TabContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Tab = ({ data }) => {
  const [head, setHead] = React.useState(data[0].head);

  return (
    <Container>
      <TabHead data={data} setHead={setHead} />
      <TabContent>
        <TabItem data={data} head={head} />
      </TabContent>
    </Container>
  );
};

export default Tab;
