import styled from "styled-components";

export const ProductsWrap = styled.div`
  width: 390px;
  height: 208px;
  padding: 0 16px 0 16px;
  overflow: scroll;
  .disabledProdPopup {
    display: none;
  }
  .hidden {
    display: none;
  }
`;

export const ProductsTitle = styled.h2`
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
`;

export const ProductsItem = styled.div`
  background-color: #fff;
  font-family: "Noto Sans KR", sans-serif;
  display: flex;
`;

export const ProductText = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  margin-top: 6px;
`;

export const ProductPrice = styled.p`
  font-size: 12px;
  font-weight: 700;
  line-height: 15px;
  margin-top: 4px;
  color: #f26e22;
`;

export const ProductImg = styled.img`
  height: 90px;
  width: 140px;
  border-radius: 8px;
  border: 0.5px solid #dbdbdb;
  margin: 16px 10px 0 0;
  object-fit: cover;
`;
