import styled from 'styled-components';

export const SearchFeedSection = styled.section`
  width: 390px;
  height: 100vh;
  margin: 0 auto;
  background-color: #ffffff;
`;

export const SearchFeedMain = styled.main`
  height: calc(100vh - 48px);
  overflow-x: hidden;
  overflow-y: auto;
`;

export const SearchList = styled.ul`
  margin: 20px 0;

  > li {
    margin: 0 auto;
  }

  > li + li {
    margin-top: 16px;
  }
`;
