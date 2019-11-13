import React from "react";
import styled from "styled-components";
import { ContainerLayout } from "../../components/shared/Layout";
import Partners from "../../components/home/partners/Partners";
import Work from "../../components/home/work/Work";
import Landing from "../../components/home/landing/Landing";
import TitleAndSub from "../../components/shared/TitleAndSub";
import Tab from "../../components/home/tabs/Tab";
import TextAndImage from "../../components/home/textAndImage/TextAndImage";
import Contact from "../../components/shared/Contact";
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
  const tabTitle = Copy.home.tab.titleAndSub;
  return (
    <Container id="home">
      <Landing data={Copy.home.landing} />

      <ContainerLayout size="100%">
        <ContainerLayout>
          <Partners data={Copy.partners} />
        </ContainerLayout>
      </ContainerLayout>

      <ContainerLayout background="#f2f3f6" size="100%">
        <ContainerLayout direction="column">
          <TitleAndSub
            title={aboutUsTitle.title}
            sub={aboutUsTitle.sub}
            type={aboutUsTitle.type}
            align={aboutUsTitle.align}
          />
          <Work data={Copy.home.aboutUs.work} />
          <TextAndImage data={Copy.home.textAndImage} />
        </ContainerLayout>
      </ContainerLayout>

      <ContainerLayout size="100%">
        <ContainerLayout direction="column">
          <TitleAndSub
            title={tabTitle.title}
            sub={tabTitle.sub}
            type={tabTitle.type}
            align={tabTitle.align}
          />
          <Tab data={Copy.home.tab.tabs} />
        </ContainerLayout>
      </ContainerLayout>
      <ContainerLayout
        size="100%"
        background="#002573"
        backgroundImage="http://sterntelecom.com/img/map-image.png"
      >
        <ContainerLayout direction="column">
          <TitleAndSub
            title={tabTitle.title}
            sub={tabTitle.sub}
            type={tabTitle.type}
            align={tabTitle.align}
            color="white"
          />
          <Contact company={Copy.general.company} data={Copy.home.contact} />
        </ContainerLayout>
      </ContainerLayout>
    </Container>
  );
};

export default Home;

Home.propTypes = {};
