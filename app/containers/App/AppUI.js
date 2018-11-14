import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

// grid-template-columns: 25px repeat(6, auto) 25px;
// grid-template-rows: 10px repeat(6, auto) 10px;

export const Logo = styled.h1`
  grid-area: 1 / 1 / 2 / 8;
`;
