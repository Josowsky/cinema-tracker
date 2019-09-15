import styled, { createGlobalStyle } from "styled-components";

import { accentColor4 } from "./shared/constants/constants.style";

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
  }

  html {
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    min-height: 100vh;
    font-family: "Lato", sans-serif;
    background: ${accentColor4};
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const AppContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`;
