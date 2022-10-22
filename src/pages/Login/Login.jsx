import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Splash from "../Splash/Splash";
import logoImage from "../../assets/logo.svg";
import logoNameKorean from "../../assets/logoNameKorean.svg";
import { LoginMobileScreen, LoginLogo, LoginLink } from "./login.style";

function LoginPage() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  let navigate = useNavigate();
  return (
    <>
      {loading ? (
        //로딩 시 스플레쉬 페이지
        <Splash />
      ) : (
        //로딩 후 로그인 페이지
        <LoginMobileScreen>
          <LoginLogo>
            <img className="loginLogoImage2" src={logoImage} alt="데브북스" />
            <img src={logoNameKorean} className="logoKo" alt="데브북스" />
          </LoginLogo>
          <LoginLink>
            <div className="loginKakao">카카오톡 계정으로 로그인</div>
            <div className="loginGoogle">구글 계정으로 로그인</div>
            <div className="loginFacebook">페이스북 계정으로 로그인</div>
            <div className="loginWrapper">
              <p
                onClick={() => {
                  navigate("/loginEmail");
                }}
              >
                이메일로 로그인
              </p>
              <div className="divisionLine"></div>
              <p
                onClick={() => {
                  navigate("/joinMembership");
                }}
              >
                회원가입
              </p>
            </div>
          </LoginLink>
        </LoginMobileScreen>
      )}
    </>
  );
}

export default LoginPage;
