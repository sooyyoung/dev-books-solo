import React from "react";
import logoImage from "../../assets/logo.svg";
import logoNameKorean from "../../assets/logoNameKorean.svg";
import { LoginMobileScreen, LoginLogo } from "../Login/login.style";
import { LoginLogoImage, LogoKo } from "./splash.style";

function Splash() {
  return (
    <>
      <LoginMobileScreen>
        <LoginLogo>
          <LoginLogoImage src={logoImage} alt="데브북스" />
          <LogoKo src={logoNameKorean} alt="데브북스" />
        </LoginLogo>
      </LoginMobileScreen>
    </>
  );
}

export default Splash;
