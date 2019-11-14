import React from "react";
import styled from "styled-components";
const Container = styled.div`
  width: 50%;
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  a {
    text-decoration: none;
    color: white;
    font-size: 54px;
    margin: 30px;
    span:hover {
      color: wheat;
      text-decoration: underline;
    }
  }
`;

const Mail = styled.a``;

const Phone = styled.a``;

const MailAndPhone = ({ data }) => {
  return (
    <Container>
      <Mail href={"mailto:" + data.mail}>
        {data.mailText} <br /> <span> {data.mail}</span>
      </Mail>
      <Phone href={"tel:" + data.tel}>
        {" "}
        {data.callText} <br /> <span>{data.tel}</span>
      </Phone>
    </Container>
  );
};

export default MailAndPhone;
