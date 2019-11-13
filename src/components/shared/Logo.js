import React from "react";
import styled from "styled-components";

const LogoImg = styled.img`
  max-width: ${props => (props.big ? "500px" : "150px")};
  width: 100%;
`;

const Logo = ({ data, big }) => {
  return <LogoImg src={data} big={big} />;
};

export default Logo;
