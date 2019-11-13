import React from "react";
import styled from "styled-components";

const LogoImg = styled.img`
  max-width: 150px;
  width: 100%;
`;

const Logo = ({ data }) => {
  return <LogoImg src={data} />;
};

export default Logo;
