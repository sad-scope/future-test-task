import React from "react";
import { InputWrapper, Input, Label, Error } from "./InputComponent.elements";

function InputComponent({
  label,
  placeholder,
  type,
  name,
  onChange,
  value,
  error,
  mask,
  maskPlaceholder,
}) {
  return (
    <InputWrapper>
      <Label>{label}</Label>
      <Input
        placeholder={placeholder}
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        mask={mask}
        maskPlaceholder={maskPlaceholder}
      />

      {error && <Error>{error}</Error>}
    </InputWrapper>
  );
}

export default InputComponent;
