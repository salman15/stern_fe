import React from "react";
import styled from "styled-components";
import { MainButton } from "./Buttons";
import CompanyInfo from "./CompanyInfo";
import MailAndPhone from "./MailAndPhone";
const Container = styled.div`
  display: flex;
  align-items: ${props => (props.align ? "end" : "center")};
  justify-content: space-between;
  width: 100%;
  padding: 100px 0px;
  color: white;
  @media screen and (max-width: 662px) {
    flex-direction: column;
    padding: 50px 0px;
  }
`;

const CompanyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  text-align: center;
  @media screen and (max-width: 662px) {
    width: 100%;
  }
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
  @media screen and (max-width: 662px) {
    width: 100%;
  }
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
  @media screen and (max-width: 662px) {
    padding: 20px 0;
  }
`;

const Contact = ({ data, company }) => {
  return (
    <Container align={data.form.active}>
      {data.form.active && (
        <Form>
          {data.form.list.map(item =>
            item.type === "textarea" ? (
              <FormTextArea
                placeholder={item.placeholder}
                type={item.placeholder}
              />
            ) : (
              <FormInput
                placeholder={item.placeholder}
                type={item.placeholder}
              />
            )
          )}
          <MainButton data={data.button} bgColor="black" color="white" />
        </Form>
      )}

      {data.mailAndPhone.active && <MailAndPhone data={data.mailAndPhone} />}

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
