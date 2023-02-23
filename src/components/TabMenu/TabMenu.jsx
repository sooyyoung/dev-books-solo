import React from "react";
import { Wrapper, Menu, NavStyle } from "./tabMenu.style";

export default function TabMenu() {
  return (
    <>
      <Wrapper>
        <Menu>
          <NavStyle to="/HomeFeed" homefeed={"homefeed"}>
            홈
          </NavStyle>
        </Menu>
        <Menu>
          <NavStyle to="/chatFeed" chatfeed={"chatfeed"}>
            채팅
          </NavStyle>
        </Menu>
        <Menu>
          <NavStyle to="/PostUpload" postupload={"postupload"}>
            게시물 작성
          </NavStyle>
        </Menu>
        <Menu>
          <NavStyle to="/myProfile" myprofile={"myprofile"}>
            프로필
          </NavStyle>
        </Menu>
      </Wrapper>
    </>
  );
}
