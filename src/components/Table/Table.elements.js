import styled from "styled-components";
import { colorVariables, fontVariables, bpVariables } from "../../globalStyle";
import { BsCaretDownFill } from "react-icons/bs";
import Loader from "../Loader/Loader";
export const TableWhrapper = styled.div`
  z-index: 1;
  width: 90%;
  border-radius: 1rem;
  padding: 1rem;
  background: ${colorVariables.primaryNude};
  height: 40vh;
  margin-right: auto;
  margin-left: auto;
  margin-top: 2rem;

  @media screen and (max-width: ${bpVariables.bpMedium}) {
    margin-top: 1rem;
  }
`;
export const WhrapperforScroll = styled.div`
  height: 36vh;
  overflow: hidden;
  overflow-y: scroll;
  display: grid;
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: ${bpVariables.bpMedium}) {
    overflow-x: scroll;
  }
`;
export const TableForData = styled.table`
  border-spacing: 0;
  border-collapse: separate;
  width: 100%;
  text-align: left;
  border-radius: 1rem;
  table-layout: fixed;
  font-size: ${fontVariables.mainDesctop};
  @media screen and (max-width: ${bpVariables.bpMedium}) {
    table-layout: auto;
    font-size: ${fontVariables.mainTab};
  }
`;
export const LoaderWhrapper = styled.div`
  justify-self: center;
  align-self: center;
`;
export const LoaderIcon = styled(Loader)``;

export const TableHeader = styled.thead`
  font-weight: 400;
  @media screen and (max-width: ${bpVariables.bpMedium}) {
    font-weight: 200;
  }
`;

export const TableHeadersTr = styled.tr``;

export const TableHeadersTh = styled.th`
  padding-left: 1rem;
  background: ${colorVariables.primaryDark};
  color: ${colorVariables.primaryWhite};
  width: 9rem;
  position: sticky;
  top: 0;
`;
export const TableCellWrapper = styled.div`
  height: 2rem;
  display: grid;
  grid-template-columns: min-content min-content;
`;
export const TableHeadersСellSpan = styled.span`
  align-self: center;
`;
export const TableHeadersСellIcon = styled(BsCaretDownFill)`
  color: ${({ $sortingField }) =>
    $sortingField ? colorVariables.primaryBright : colorVariables.primaryGrey};
  transform: ${({ $sortingAscending }) =>
    $sortingAscending ? "rotate(180deg)" : "rotate(0deg)"};
  margin-left: 1rem;
  margin-top: 4px;
`;

export const TableBody = styled.tbody``;
export const TableBodyTr = styled.tr`
  height: 3rem;
  background: ${({ $evenIndex }) =>
    $evenIndex ? colorVariables.secondaryGrey : colorVariables.primaryWhite};
`;

export const TableBodyTd = styled.td`
  padding-left: 1rem;
`;
