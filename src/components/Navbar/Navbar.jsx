import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Buttons/Button";
import {
  Nav,
  ArrowBtn,
  MoreBtn,
  SearchBtn,
  SearchInput,
  MainTitle,
  Title,
} from "./navbar.style";

export const ArrowButton = () => {
  const navigate = useNavigate();
  return (
    <ArrowBtn
      onClick={() => {
        navigate(-1);
      }}
    >
      <span className="a11yHidden">뒤로가기</span>
    </ArrowBtn>
  );
};

export const CommonNav = (props) => {
  return (
    <Nav>
      <ArrowButton />
      <Title>{props.title}</Title>
    </Nav>
  );
};

export const BasicNav = (props) => {
  return (
    <Nav>
      <ArrowButton />
      <MoreBtn onClick={props.onClick}>
        <span className="a11yHidden">더보기</span>
      </MoreBtn>
    </Nav>
  );
};

export const SearchNav = (props) => {
  return (
    <Nav>
      <ArrowButton />
      <SearchInput 
        type="text" 
        placeholder="계정 검색" 
        value={props.keyword}
        onChange={(e) => props.setKeyword(e.target.value)}
      />
    </Nav>
  );
};

export const MainNav = (props) => {
  const navigate = useNavigate();
  return (
    <Nav>
      <MainTitle>{props.title}</MainTitle>
      <SearchBtn
        onClick={() => {
          navigate("/SearchFeed");
        }}
      >
        <span className="a11yHidden">검색하기</span>
      </SearchBtn>
    </Nav>
  );
};

export const UploadNav = (props) => {
  return (
    <Nav>
      <ArrowButton />
      <Button className={props.className} onClick={props.onClick}>
        {props.title}
      </Button>
    </Nav>
  );
};

export const ChatNav = (props) => {
  return (
    <Nav>
      <ArrowButton />
      <Title>{props.title}</Title>
      <MoreBtn onClick={props.onClickBtn}>
        <span className="a11yHidden">더보기</span>
      </MoreBtn>
    </Nav>
  );
};
