import styled from "styled-components";
import { colorVariables, fontVariables, boxShadow } from "../../globalStyle";
import { FaSearch } from "react-icons/fa";

export const SearchWhrapper = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 600px;
  margin-right: auto;
  margin-top: 2rem;
  margin-left: auto;
  border-radius: 1rem;
  display: grid;
  grid-template-columns: 1fr min-content;
  font-size: ${fontVariables.mainDesctop};
  box-shadow: ${boxShadow};
`;

export const SearchInput = styled.input`
  display: grid;
  grid-column: 1/2;
  width: 100%;
  height: 3rem;
  border: none;
  border-radius: 1rem 0rem 0rem 1rem;
  background: ${colorVariables.primaryWhite};
  outline: none;
  padding-left: 1rem;
`;

export const SearchIcon = styled(FaSearch)`
  display: grid;
  grid-column: 2/3;
  color: ${colorVariables.primaryBright};
  background: ${colorVariables.primaryDark};
  font-size: 3rem;
  padding: 0.2rem;
  border-radius: 0rem 1rem 1rem 0rem;
  cursor: pointer;
  outline: none;
`;
