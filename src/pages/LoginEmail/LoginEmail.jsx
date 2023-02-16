import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Buttons/Button";
import { TextInput } from "../../components/TextInput/TextInput";
import {
  LoginEmailMobileScreen,
  LoginTitle,
  LoginButton,
  LooginEmailText,
  ErrorMessage,
} from "./loginEmail.style";

function LoginEmail() {
  let navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const [userPw, setUserPw] = useState("");
  const [emailError, setEmailError] = useState("");
  const [pwError, setPwError] = useState("");

  const localStorage = window.localStorage;

  //비동기 통신_API
  const login = async (e) => {
    e.preventDefault();

    const url = "https://mandarin.api.weniv.co.kr";
    const loginPath = "/user/login";
    const loginInp = {
      user: {
        email: userEmail,
        password: userPw,
      },
    };

    const init = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(loginInp),
    };

    const next = () => {
      navigate("/HomeFeed");
    };

    try {
      const resLogin = await fetch(url + loginPath, init);
      const resLoginJson = await resLogin.json();
      if (userEmail === "" && userPw === "") {
        setEmailError("이메일을 입력해주세요.");
        setPwError("비밀번호를 입력해주세요.");
      } else if (userPw === "") {
        setPwError("비밀번호를 입력해주세요.");
      } else if (userEmail === "") {
        setEmailError("이메일을 입력해주세요.");
      } else if (resLoginJson.status === 422) {
        setPwError("이메일 또는 비밀번호가 일치하지 않습니다.");
      } else if (resLoginJson.status !== 422) {
        localStorage.setItem("token", resLoginJson.user.token);
        localStorage.setItem("accountname", resLoginJson.user.accountname);
        next();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <LoginEmailMobileScreen>
      <LoginTitle>로그인</LoginTitle>
      <form>
        <div className="emailAccount">
          <TextInput
            type="email"
            label="이메일"
            for="email"
            id="email"
            value={userEmail}
            onChange={(e) => {
              setUserEmail(e.target.value);
              setEmailError("");
            }}
          />
          <ErrorMessage>{emailError}</ErrorMessage>
        </div>
        <TextInput
          type="password"
          label="비밀번호"
          for="password"
          id="password"
          value={userPw}
          onChange={(e) => {
            setUserPw(e.target.value);
            setPwError("");
          }}
        />
        <ErrorMessage>{pwError}</ErrorMessage>
        <LoginButton onClick={login}>
          <Button
            className={
              !emailError && !pwError && userEmail !== "" && userPw !== ""
                ? "button lg"
                : "button lg disabled"
            }
            type="submit"
          >
            로그인
          </Button>
        </LoginButton>
      </form>
      <LooginEmailText
        onClick={() => {
          navigate("/joinMembership");
        }}
      >
        이메일로 회원가입
      </LooginEmailText>
    </LoginEmailMobileScreen>
  );
}

export default LoginEmail;
