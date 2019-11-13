import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 100px 0px;
`;

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const InfoHead = styled.p`
  font-weight: bold;
`;

const InfoItem = styled.p``;

const CompanyInfo = ({ data }) => {
  return (
    <InfoBlock>
      <InfoHead>{data.title}</InfoHead>
      {data.items.map(info => (
        <InfoItem>{info.item}</InfoItem>
      ))}
    </InfoBlock>
  );
};

export default CompanyInfo;
