import styled from "styled-components";
import { colorVariables, Button, bpVariables } from "../../globalStyle";

export const DataSizeWhrapper = styled.div`
  z-index: 1;
  width: 100%;
  display: grid;
  grid-area: dataSize;
  align-self: center;
  justify-self: center;
  background: ${colorVariables.primaryNude};
  max-width: 25rem;
  border-radius: 0.5rem;
  padding: 1rem;
  row-gap: 1rem;
  @media screen and (max-width: ${bpVariables.bpMedium}) {
    margin-right: auto;
    margin-left: auto;
    font-size: 0.7rem;
  }
`;

export const DataSizeSelectionSpan = styled.span`
  justify-self: center;
`;
export const DataSizeSelectionWhrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2rem;
  justify-self: center;
`;
export const DataSizeSelectionButton = styled(Button)`
  background: ${colorVariables.primaryBright};
  color: ${colorVariables.primaryWhite};
  ${Button}
  @media screen and (max-width: ${bpVariables.bpMedium}) {
    font-size: 0.7rem;
  }
`;
