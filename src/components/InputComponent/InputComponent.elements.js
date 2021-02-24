import styled from "styled-components";
import { colorVariables } from "../../globalStyle";
import InputMask from "react-input-mask";
export const InputWrapper = styled.div`
  display: grid;
`;

export const Label = styled.span`
  padding-left: 0.5rem;
`;

export const Input = styled(InputMask)`
  outline: none;
  border: none;
  background: ${colorVariables.primaryWhite};
  border-radius: 1rem;
  padding-left: 0.5rem;
  height: 2rem;
`;

export const Error = styled.span`
  color: red;
  padding-left: 0.5rem;
`;
