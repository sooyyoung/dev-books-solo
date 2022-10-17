import React from "react";
import logoImage from "../../assets/logo.svg";
import logoNameKorean from "../../assets/logoNameKorean.svg";
import Topbar from "../../components/Topbar/Topbar";
import { LoginLogoImage, LogoKo } from "./splash.style";

function Splash() {
  return (
    <>
      <article className="loginMobileScreen">
        <Topbar />
        <div className="loginLogo">
          <LoginLogoImage src={logoImage} alt="데브북스" />
          <LogoKo src={logoNameKorean} alt="데브북스" />
        </div>
      </article>
    </>
  );
}

export default Splash;
