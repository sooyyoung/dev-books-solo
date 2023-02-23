import styled from "styled-components";

export const SinglePostWrap = styled.div`
  width: 390px;
  height: 100vh;
  margin: 0 auto;
  background-color: #fff;
  position: relative;
`;

export const SinglePostMain = styled.section`
  height: calc(100vh - 108px);
  overflow: auto;
  overflow-x: hidden;
`;

export const SinglePostContainer = styled.section`
  border-bottom: 1px solid #dbdbdb;
`;

export const PostCommentWrap = styled.ul`
  padding: 4px 16px;
`;

export const CommentModal = styled.div`
  ${(props) => {
    if (props.className) {
      return `position: absolute;
        top: 0;
        width: 390px;
        height: 100vh;`;
    } else {
      return `display: none`;
    }
  }}
`;

export const CommentAlert = styled.div`
  ${(props) => {
    if (!props.className) {
      return `display: none`;
    }
  }}
`;

export const NavModal = styled.div`
  ${(props) => {
    if (!props.className) {
      return `display: none`;
    }
  }}
`;

export const NavAlert = styled.div`
  ${(props) => {
    if (!props.className) {
      return `display: none`;
    }
  }}
`;
