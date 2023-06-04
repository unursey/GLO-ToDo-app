import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";
import { Theme } from "../models/themes";

export const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  ${normalize}
  
  * {
    box-sizing: border-box;
  }

  body {
    transition: background-color .2s;
    background-color: ${({ theme }) => theme.colors.bgSecondary};
    padding: 50px 0 0 0;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 1.429;
    color: black;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }

  .container-error {
    background-image: url(../../assets/images/cat.avif);
    min-height: 400px;
    background-position: bottom;
  }
`