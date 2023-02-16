import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Buttons/Button";
import { TextInput } from "../../components/TextInput/TextInput";
import {
  JoinMembershipMobileScreen,
  JoinTitle,
  JoinButton,
  ErrorMessage,
} from "./joinMembership.style";

function JoinMembership() {
  const [userEmail, setUserEmail] = useState("");
  const [userPw, setUserPw] = useState("");

  const [emailError, setEmailError] = useState("");
  const [pwError, setPwError] = useState("");

  let navigate = useNavigate();

  const next = () => {
    navigate("/joinProfile", {
      state: {
        userEmail: userEmail,
        userPW: userPw,
      },
    });
  };

  // 비밀번호 유효성 체크
  const handleCheckPw = () => {
    if (userPw === "") {
      setPwError("비밀번호를 입력해주세요.");
    } else if (userPw.length <= 5 && userPw !== "") {
      setPwError("비밀번호는 6자 이상이어야 합니다.");
    } else {
      setPwError("");
    }
  };

  // 이메일 유효성 체크
  const handleCheckEmail = async () => {
    const url = "https://mandarin.api.weniv.co.kr";
    const emailValidReqPath = "/user/emailvalid";

    const regExp =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    const resultEmail = regExp.test(userEmail);

    try {
      const res = await fetch(url + emailValidReqPath, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          user: {
            email: userEmail,
          },
        }),
      });
      const json = await res.json();

      if (userEmail === "") {
        setEmailError("이메일을 입력해주세요.");
      } else if (resultEmail === false) {
        setEmailError("잘못된 이메일 형식입니다.");
      } else if (json.message === "이미 가입된 이메일 주소 입니다.") {
        setEmailError(json.message);
      } else {
        setEmailError("");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <JoinMembershipMobileScreen>
      <article className="loginEmail">
        <JoinTitle>이메일로 회원가입</JoinTitle>
        <div className="emailAccount">
          <TextInput
            label="이메일"
            placeholder="이메일을 입력해주세요."
            type="email"
            for="email"
            id="email"
            value={userEmail}
            onChange={(e) => {
              setUserEmail(e.target.value);
              setEmailError("");
            }}
            onBlur={handleCheckEmail}
          />
          <ErrorMessage>{emailError}</ErrorMessage>
        </div>
        <TextInput
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요."
          type="password"
          for="password"
          id="password"
          value={userPw}
          onChange={(e) => {
            setUserPw(e.target.value);
            setPwError("");
          }}
          onBlur={handleCheckPw}
        />
        <ErrorMessage>{pwError}</ErrorMessage>
        <JoinButton onClick={handleCheckEmail}>
          <Button
            className={
              !emailError && !pwError && userEmail !== "" && userPw !== ""
                ? "button lg"
                : "disabled button lg"
            }
            onClick={next}
            type="submit"
          >
            다음
          </Button>
        </JoinButton>
      </article>
    </JoinMembershipMobileScreen>
  );
}

export default JoinMembership;
