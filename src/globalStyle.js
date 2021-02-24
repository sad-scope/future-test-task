import styled, { createGlobalStyle } from "styled-components";

export const colorVariables = {
  backgroundPrimary: " #f7f3ed",
  backgroundSecondary: "#efe7dc",
  primaryDark: "#3C3934",
  primaryWhite: "#fcfcfc",
  primaryNude: "#E4D5BE",
  primaryGrey: "#8E8D8A",
  primaryBright: "#00917D",
  secondaryGrey: " #f2f2f2",
};

export const boxShadow = " 3px 12px 13px -3px rgba(34, 60, 80, 0.35)";

export const fontVariables = {
  mainDesctop: "1rem",
  mainTab: "0.5rem",
};

export const bpVariables = {
  bpMedium: "970px",
};

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  &::-webkit-scrollbar {
    display: none;
  }
}
body{
  background: ${colorVariables.backgroundPrimary};
  background: linear-gradient(145deg, ${colorVariables.backgroundSecondary} 12%, ${colorVariables.backgroundPrimary} 100%);
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  font-weight: 400;
  line-height: 1.6;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

`;

export const PaginnationAndDataSizeContainer = styled.div`
  z-index: 1;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  border-radius: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "pagination dataSize";
  @media screen and (max-width: ${bpVariables.bpMedium}) {
    grid-template-columns: 1fr;
    grid-template-areas: "dataSize" "pagination";
  }
`;

export const Button = styled.button`
  outline: none;
  border: none;
  border-radius: 1rem;
  padding: 0rem 1rem 0rem 1rem;
  height: 2rem;
  cursor: pointer;
`;

export default GlobalStyle;
