import styled from 'styled-components';

export const PageWrapper = styled.div`
  flex: 1;
  padding: 3% 5%;
  margin: 0 5%;
  display: flex;
  flex-flow: column wrap;
`;

export const Form = styled.form`
  flex: 1;
  display: flex;
  flex-flow: column wrap;
`;

export const Label = styled.label`
  flex: 1;
  color: #5f7aa3;
`;

export const TextArea = styled.input`
  flex: 4;
  height: 30%;
  background-color: #3c5263;
  color: #e5eee9;
  align-content: left;
  border: 3px solid #e17d2e;
  border-radius: 5px;
  border-opacity: 0.7;
`;
