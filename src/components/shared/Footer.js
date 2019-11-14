import React from "react";
import styled from "styled-components";
import Copy from "../../data/Copy";
import Logo from "./Logo";

const Container = styled.footer`
  display: flex;
  width: 100%;
  min-height: 40px;
  padding: 40px 20px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #f2f3f6;
`;

const FooterContainer = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  @media screen and (max-width: 662px) {
    width: 100%;
  }
`;

const FooterBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  text-align: center;
  @media screen and (max-width: 662px) {
    margin: 0px 10px;
  }
`;

const FooterBlockTitle = styled.p`
  font-weight: bold;
`;

const FooterBlockItem = styled.a`
  text-decoration: none;
  margin: 10px 0;
  color: #444;
`;

const Copyright = styled.p`
  padding-top: 20px;
`;

const Footer = () => {
  return (
    <Container>
      <FooterContainer>
        <FooterBlock>
          <Logo data={Copy.header.nav.logo} big={true} />
        </FooterBlock>
        {Copy.footer.siteMap.map(blocks => (
          <FooterBlock>
            <FooterBlockTitle>{blocks.title}</FooterBlockTitle>
            {blocks.items.map(item => (
              <FooterBlockItem href={item.url}>{item.item}</FooterBlockItem>
            ))}
          </FooterBlock>
        ))}
      </FooterContainer>
      <Copyright>{Copy.footer.copyright}</Copyright>
    </Container>
  );
};

export default Footer;
