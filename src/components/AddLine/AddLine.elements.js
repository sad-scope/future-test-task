import styled from "styled-components";
import { colorVariables, Button, bpVariables } from "../../globalStyle";
import { IoClose } from "react-icons/io5";

export const AddLineWrapper = styled.div`
  background: ${colorVariables.primaryNude};
  max-width: 25rem;
  display: grid;
  padding: 1rem;
  margin: 1rem;
  border-radius: 0.5rem;
  row-gap: 1rem;
  margin-right: auto;
  margin-left: auto;
  @media screen and (max-width: ${bpVariables.bpMedium}) {
    margin-top: 2rem;
  }
`;

export const DisableButton = styled(Button)`
  color: ${colorVariables.primaryWhite};
  background: ${colorVariables.primaryGrey};
  cursor: auto;
  margin-top: 1.4rem;
  ${Button};
`;

export const FormButton = styled(Button)`
  color: ${colorVariables.primaryWhite};
  background: ${colorVariables.primaryBright};
`;

export const SubmitButton = styled(Button)`
  margin-top: 1.4rem;
  background: ${colorVariables.primaryBright};
  color: ${colorVariables.primaryWhite};
`;

export const CloseIcon = styled(IoClose)`
  color: ${colorVariables.primaryBright};
  font-size: 2rem;
  cursor: pointer;
  justify-self: end;
`;
