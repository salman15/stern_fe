import React from "react";
import styled from "styled-components";
import { MainButton } from "./Buttons";
import CompanyInfo from "./CompanyInfo";
const Container = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  width: 100%;
  padding: 100px 0px;
  color: white;
`;

const CompanyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  text-align: center;
`;

const CompanyInfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const CompanyInfoInner = styled.div``;

const Form = styled.form`
  display: flex;
  align-items: center;
  width: 50%;
  flex-direction: column;
`;

const FormInput = styled.input`
  width: 100%;
  max-width: 400px;
  border-radius: 4px;
  margin: 10px 0;
  border: solid 3px #00d69f;
  padding: 10px;
  min-height: 50px;
`;

const FormTextArea = styled.textarea`
  border: solid 3px #00d69f;
  width: 100%;
  max-width: 400px;
  height: 100%;
  min-height:200px
  border-radius: 4px;
  padding: 10px;
  margin: 10px 0;
`;

const Comapny = styled.h1`
  margin-top: 0px;
  width: 100%;
`;

const Contact = ({ data, company }) => {
  return (
    <Container>
      <Form>
        {data.form.map(item =>
          item.type === "textarea" ? (
            <FormTextArea
              placeholder={item.placeholder}
              type={item.placeholder}
            />
          ) : (
            <FormInput placeholder={item.placeholder} type={item.placeholder} />
          )
        )}
        <MainButton data={data.button} bgColor="black" color="white" />
      </Form>

      <CompanyContainer>
        <Comapny>{company}</Comapny>
        <CompanyInfoContainer>
          <CompanyInfoInner>
            {data.companyInfo.map(item => (
              <CompanyInfo data={item} />
            ))}
          </CompanyInfoInner>
          <CompanyInfoInner>
            {data.BankInfo.map(item => (
              <CompanyInfo data={item} />
            ))}
          </CompanyInfoInner>
        </CompanyInfoContainer>
      </CompanyContainer>
    </Container>
  );
};

export default Contact;
