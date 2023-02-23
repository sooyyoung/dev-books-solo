import styled from "styled-components";

export const Follow = styled.div`
  width: 390px;
  height: 100vh;
  margin: 0 auto;
  background-color: #fff;
  position: relative;
`;

export const FollowWrap = styled.div`
  height: calc(100vh - 108px);
  overflow: auto;
`;

export const FollowUser = styled.ul`
  margin-top: 16px;
  li {
    margin: 0 auto;
  }
  li + li {
    margin: 16px auto;
  }
`;

export const Tabmenu = styled.div`
  position: absolute;
  bottom: 0;
  background-color: #fff;
`;
