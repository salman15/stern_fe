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
  min-height: 40%;
  padding: 100px 0px;
  background-image: url(https://www.storefrog.com/wp-content/themes/storefrog/img/background.png);
  background-size: cover;
  color: white;
`;

const CompanyImage = styled.img`
  object-fit: cover;
  height: 500px;
  max-height: 100%;
`;

const Landing = ({ data }) => {
  return (
    <Container>
      <ContainerLayout>
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
