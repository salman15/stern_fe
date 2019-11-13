import React from "react";
import styled from "styled-components";
import Copy from "../../data/Copy";

const Container = styled.footer`
  display: flex;
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: center;
`;
const Copyright = styled.p``;

const Footer = () => {
  return (
    <Container>
      <Copyright>{Copy.footer.copyright}</Copyright>
    </Container>
  );
};

export default Footer;
