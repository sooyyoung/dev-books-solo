import styled from "styled-components";

export const LoginEmailMobileScreen = styled.article`
  position: relative;
  width: 390px;
  height: 100vh;
  background-color: #fff;
  margin: 0 auto;
  font-family: "Noto Sans KR", sans-serif;
  .emailAccount {
    margin: 15px 0;
  }
`;

export const LoginTitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
  text-align: center;
  padding-top: 30px;
  margin-bottom: 40px;
`;

export const LoginButton = styled.div`
  margin: 30px 0 0 0;
  text-align: center;
`;

export const LooginEmailText = styled.p`
  margin-top: 20px;
  font-size: 12px;
  text-align: center;
  cursor: pointer;
`;

export const ErrorMessage = styled.span`
  width: 322px;
  margin: 0 auto;
  padding-top: 3px;
  display: block;
  font-size: 12px;
  font-weight: 400;
  color: #eb5757;
`;