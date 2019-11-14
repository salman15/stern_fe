import React from "react";
import styled from "styled-components";
import TitleAndSub from "../../shared/TitleAndSub";
import { ContainerLayout } from "../../shared/Layout";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: wheat;
  width: 100%;
  min-height: 60vh;
  padding: 200px 0px;
  background-image: url(https://www.storefrog.com/wp-content/themes/storefrog/img/background.png);
  background-size: cover;
  color: white;
  @media screen and (max-width: 662px) {
    width: 100%;
    max-width: 100%;
    padding: 50px 0px;
    padding-top: 100px;
  }
`;

const CompanyImage = styled.img`
  object-fit: cover;
  height: 400px;
  max-height: 100%;
  max-width: 50%;
  @media screen and (max-width: 662px) {
    max-width: 100%;
    object-fit: contain;
  }
`;

const Landing = ({ data }) => {
  return (
    <Container>
      <ContainerLayout align={data.titleAndSub.align}>
        <TitleAndSub
          title={data.titleAndSub.title}
          sub={data.titleAndSub.sub}
          text={data.titleAndSub.text}
          type={data.titleAndSub.type}
          button={data.button}
        />
        <CompanyImage src={data.image} />
      </ContainerLayout>
    </Container>
  );
};

export default Landing;
