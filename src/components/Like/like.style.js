import styled from "styled-components";
import clickedHeart from "../../assets/icon/icon-heart.png";
import unclickedHeart from "../../assets/icon/icon-heart.svg";

export const LikeBtnWrapper = styled.div`
  width: 50px;
  button {
    background-color: #fff;
    width: 20px;
    height: 20px;
    background-size: 20px;
    margin-right: 6px;
    line-height: 10px;
  }
  .likeBtnNum {
    margin-left: 16px;
  }
  .clicked {
    background-image: url(${clickedHeart});
  }
  .unclicked {
    background-image: url(${unclickedHeart});
  }
`;
