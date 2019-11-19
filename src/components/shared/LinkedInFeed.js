import React from "react";
import styled from "styled-components";
import Copy from "../../data/Copy.json";
import TitleAndSub from "./TitleAndSub";

const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  flex-direction: column;
`;

const FeedContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  padding-top: 50px;
  @media screen and (max-width: 662px) {
    flex-direction: column;
    align-items: center;
  }
  iframe:first-child {
    margin-top: 0;
  }
`;

const Feed = styled.iframe`
  border: solid 1px #f2f3f6;
  border-radius: 4px;
  @media screen and (max-width: 662px) {
    margin-top: 50px;
    width: 100%;
  }
`;

const LinkedInFeed = () => {
  return (
    <Container>
      <TitleAndSub
        title={Copy.LinkedIn.titleAndSub.title}
        sub={Copy.LinkedIn.titleAndSub.sub}
        type={Copy.LinkedIn.titleAndSub.type}
        align={Copy.LinkedIn.titleAndSub.align}
      />
      <FeedContainer>
        {Copy.LinkedIn.posts.map(item =>
          <Feed
            src={item.feed}
            height={item.height}
            width={item.height}
            frameborder={item.height}
            allowfullscreen={item.height}
            title={item.height}
          />
        )}
      </FeedContainer>
    </Container>
  );
};

export default LinkedInFeed;
