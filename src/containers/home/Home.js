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

      {Copy.partners.active && (
        <ContainerLayout size="100%">
          <ContainerLayout>
            <Partners data={Copy.partners.content} />
          </ContainerLayout>
        </ContainerLayout>
      )}

      {Copy.home.aboutUs.active && (
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
      )}

      {Copy.home.tab.active && (
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
      )}

      {Copy.home.contact.active && (
        <ContainerLayout
          size="100%"
          background={Copy.home.contact.background}
          backgroundImage={Copy.home.contact.backgroundImage}
        >
          <ContainerLayout direction="column">
            <TitleAndSub
              title={Copy.home.contact.titleAndSub.title}
              sub={Copy.home.contact.titleAndSub.sub}
              type={Copy.home.contact.titleAndSub.type}
              align={Copy.home.contact.titleAndSub.align}
              color={Copy.home.contact.titleAndSub.color}
            />
            <Contact company={Copy.general.company} data={Copy.home.contact} />
          </ContainerLayout>
        </ContainerLayout>
      )}
    </Container>
  );
};

export default Home;

Home.propTypes = {};
