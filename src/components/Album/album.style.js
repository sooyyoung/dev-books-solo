import styled from "styled-components";

export const PostWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 8px;
  column-gap: 9px;
  margin: 15px;
  img {
    width: 114px;
    height: 114px;
    object-fit: cover;
    cursor: pointer;
  }
`;
