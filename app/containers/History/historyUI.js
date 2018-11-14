import styled from 'styled-components';

export const PageWrapper = styled.div`
  flex: 1;
  padding: 3% 5%;
  margin: 0 5%;
  display: flex;
  flex-flow: column wrap;
`;

export const EntriesList = styled.div`
  flex: 1 1 40%;
  background-color: #3c5263;
  border: 3px solid #e17d2e;
  border-radius: 3px;
  margin: 3% 0;
  max-height: 600px;
  overflow-y: scroll;

  .entry:nth-child(odd) {
    background-color: #e5eee9;
    color: #3c5263;
    margin: 0;
    padding: 1% 2%;
  }
  .entry:nth-child(even) {
    background-color: #3c5263;
    color: #e5eee9;
    margin: 0;
    padding: 1% 2%;
  }
`;
