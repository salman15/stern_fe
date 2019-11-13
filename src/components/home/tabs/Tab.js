import React from "react";
import styled from "styled-components";
import TabItem from "./TabItem";
import TabHead from "./TabHead";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 40%;
  padding: 100px 0px;
  flex-direction: column;
  padding: 20px;
`;

const TabContent = styled.div`
  display: flex;
  align-content: stretch;
  justify-items: start;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  border: solid 1px;
`;

const Tab = ({ data }) => {
  const [head, setHead] = React.useState(data[0].head);

  return (
    <Container>
      <TabHead data={data} head={head} setHead={setHead} />
      <TabContent>
        {data.map(
          tabs =>
            tabs.head === head && (
              <TabItem data={tabs} head={tabs.head} activeHead={head} />
            )
        )}
      </TabContent>
    </Container>
  );
};

export default Tab;
