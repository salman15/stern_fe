import React from "react";
import styled from "styled-components";
import { ContainerLayout } from "../../components/shared/Layout";
import Partners from "../../components/home/partners/Partners";
import Work from "../../components/home/work/Work";
import Landing from "../../components/home/landing/Landing";
import TitleAndSub from "../../components/shared/TitleAndSub";
import Tab from "../../components/home/tabs/Tab";
import TextAndImage from "../../components/home/textAndImage/TextAndImage";
import Copy from "../../data/Copy.json";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Home = () => {
  const aboutUs = Copy.home.aboutUs;
  const aboutUsTitle = aboutUs.titleAndSub;
  return (
    <Container id="home">
      <Landing data={Copy.home.landing} />
      <ContainerLayout>
        <Partners data={Copy.partners} />
      </ContainerLayout>
      <ContainerLayout align={aboutUsTitle.align}>
        <TitleAndSub
          title={aboutUsTitle.title}
          sub={aboutUsTitle.sub}
          type={aboutUsTitle.type}
          align={aboutUsTitle.align}
        />
      </ContainerLayout>
      <ContainerLayout>
        <Work data={Copy.home.aboutUs.work} />
      </ContainerLayout>
      <ContainerLayout>
        <TextAndImage data={Copy.home.textAndImage} />
      </ContainerLayout>
      <ContainerLayout>
        <Tab data={Copy.home.tab} />
      </ContainerLayout>
    </Container>
  );
};

export default Home;

Home.propTypes = {};
