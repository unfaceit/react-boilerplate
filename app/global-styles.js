import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    display: flex;
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  h1,h2,h3,h4,h5 {
    color: #5F7AA3;
  }

  a {
  flex: 1 1 fit-content;
  align-self: flex-end;
  background-color: lightblue;
  border: 1px darkblue solid;
  border-radius: 2px;
  margin: 2px;
  padding: 5px;
  text-decoration: none;
  color: #3C5263;
  }

  a: hover {
    background: #0E4571;
    color: #E5EEE9;
  }
`;

export default GlobalStyle;
