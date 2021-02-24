import styled from "styled-components";
import {
  colorVariables,
  Button,
  bpVariables,
  fontVariables,
} from "../../globalStyle";
import { MdKeyboardArrowLeft } from "react-icons/md";

export const PaginationWhrapper = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-top: 2rem;
  margin: 1rem;
  display: grid;
  align-self: end;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-self: center;
`;
export const PaginationButton = styled(Button)`
  width: auto;
  margin-left: 0.3rem;

  background: ${({ $activePage }) =>
    $activePage ? colorVariables.primaryWhite : colorVariables.primaryBright};
  color: ${({ $activePage }) =>
    $activePage ? colorVariables.primaryDark : colorVariables.primaryWhite};
  @media screen and (max-width: ${bpVariables.bpMedium}) {
    font-size: ${fontVariables.mainTab};
  }
`;

export const PaginationIconLeft = styled(MdKeyboardArrowLeft)`
  font-size: 2rem;
  cursor: pointer;
  color: ${colorVariables.primaryBright};
`;

export const PaginationIcon = styled(MdKeyboardArrowLeft)`
  transform: ${({ $right }) => ($right ? "rotate(180deg)" : "rotate(0deg)")};
  font-size: 2rem;
  cursor: pointer;
  color: ${colorVariables.primaryBright};
  margin-left: ${({ $right }) => ($right ? "0.3rem" : "none")};
`;
