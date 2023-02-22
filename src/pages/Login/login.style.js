import styled from "styled-components";

export const LoginMobileScreen = styled.article`
  @keyframes 나타나기 {
    from {
      transform: translateY(300px);
    }
    to {
      transform: translateY(0px);
    }
  }

  position: relative;
  width: 390px;
  height: 100vh;
  background-color: #ffd66b;
  margin: 0 auto;
  overflow: hidden;
`;

export const LoginLogo = styled.div`
  position: relative;
  top: 185px;
  width: 180px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  .loginLogoImage2 {
    margin: 20px;
  }
`;

export const LoginLink = styled.article`
  position: absolute;
  bottom: 0;
  width: 390px;
  height: 300px;
  overflow: hidden;
  border-radius: 20px 20px 0 0;
  background-color: #fff;
  font-size: 14px;
  font-family: "Noto Sans KR", sans-serif;
  animation: 나타나기 1s;
  overflow: hidden;

  & [class^="login"] {
    position: relative;
    top: 50px;
    margin: 10px auto;
    padding: 13px;
    border-radius: 44px;
    font-weight: 400;
    color: #767676;
    text-align: center;
    width: 322px;
    height: 44px;
    cursor: pointer;
  }

  .loginGoogle {
    border: 1px solid #767676;
  }
  .loginGoogle::before {
    content: url(../../assets/google.svg);
    position: absolute;
    top: 11px;
    left: 15px;
  }

  .loginFacebook {
    border: 1px solid #2d9cdb;
  }
  .loginFacebook::before {
    content: url(../../assets/facebook.svg);
    position: absolute;
    top: 12px;
    left: 18px;
  }

  .loginKakao {
    border: 1px solid #f2c94c;
  }
  .loginKakao::before {
    content: url(../../assets/kakaotalk.svg);
    position: absolute;
    top: 7px;
    left: 12px;
  }

  .loginGoogle:hover,
  .loginFacebook:hover,
  .loginKakao:hover {
    opacity: 0.8;
  }

  .loginWrapper {
    display: flex;
    justify-content: center;
    font-size: 12px;
  }

  .divisionLine {
    width: 1px;
    height: 12px;
    margin: 0 5px;
    background-color: #ddd;
  }
`;
