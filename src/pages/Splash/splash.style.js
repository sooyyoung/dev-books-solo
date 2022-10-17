import styled from "styled-components";

export const LoginLogoImage = styled.img`
  @keyframes 점프 {
    from {
      transform: translateY(-20px);
    }
    to {
      transform: translateY(0px);
    }
  }
  animation: 점프 1s alternate infinite;
  margin: 20px;
`;

export const LogoKo = styled.img`
  margin-top: 5px;
`;
