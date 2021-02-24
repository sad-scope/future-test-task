import React, { useState, useEffect } from "react";
import useForm from "../../hooks/useForm";
import validate from "./validate";
import { InputComponent } from "../index";
import {
  AddLineWrapper,
  SubmitButton,
  CloseIcon,
  FormButton,
  DisableButton,
} from "./AddLine.elements";
import {
  firstNameObj,
  lastNameObj,
  zipObj,
  emailObj,
  cityObj,
  stateObj,
  streetAddressObj,
  descriptionObj,
  phoneObj,
} from "./Data";

function AddLine({ form, setForm, setState, initialForm }) {
  const [showForm, setShowForm] = useState(false);
  const [isEmptyInputs, setIsEmptyInputs] = useState(true);
  const {
    handleSubmit,
    errors,
    isSubmitted,
    changeHandler,
    changeHandlerAddress,
    setIsSubmitted,
  } = useForm(form, setForm, validate);

  const showFormHandler = (e) => {
    e.preventDefault();
    setShowForm(!showForm);
  };

  useEffect(() => {
    if (
      form.firstName &&
      form.lastName &&
      form.email &&
      form.phone &&
      form.address.streetAddress &&
      form.address.city &&
      form.address.state &&
      form.address.zip &&
      form.description
    )
      setIsEmptyInputs(false);
    else {
      setIsEmptyInputs(true);
    }
  }, [form]);

  useEffect(() => {
    if (isSubmitted) {
      setState((prevState) => [...prevState, form]);
      setForm(initialForm);
      setShowForm(false);
      window.scrollTo(0, 0);
    }

    return () => {
      if(isSubmitted)
      setIsSubmitted(false);
    };
  }, [
    isSubmitted,
    setState,
    setForm,
    form,
    setIsSubmitted,
    initialForm,
    setShowForm,
  ]);

  return (
    <AddLineWrapper>
      {!showForm && (
        <FormButton onClick={showFormHandler}>Добавить Пользователя</FormButton>
      )}

      {showForm && (
        <>
          <CloseIcon onClick={showFormHandler} />
          <InputComponent
            value={form.firstName}
            onChange={changeHandler}
            {...firstNameObj}
            error={errors.firstName}
          />
          <InputComponent
            value={form.lastName}
            onChange={changeHandler}
            {...lastNameObj}
            error={errors.lastName}
          />
          <InputComponent
            value={form.email}
            onChange={changeHandler}
            {...emailObj}
            error={errors.email}
          />
          <InputComponent
            value={form.phone}
            onChange={changeHandler}
            {...phoneObj}
            error={errors.phone}
          />
          <InputComponent
            value={form.address.city}
            onChange={changeHandlerAddress}
            {...cityObj}
            error={errors.city}
          />
          <InputComponent
            value={form.address.state}
            onChange={changeHandlerAddress}
            {...stateObj}
            error={errors.state}
          />
          <InputComponent
            value={form.address.streetAddress}
            onChange={changeHandlerAddress}
            {...streetAddressObj}
            error={errors.streetAddress}
          />
          <InputComponent
            value={form.address.zip}
            onChange={changeHandlerAddress}
            {...zipObj}
            error={errors.zip}
          />
          <InputComponent
            value={form.description}
            onChange={changeHandler}
            {...descriptionObj}
            error={errors.description}
          />
          {isEmptyInputs && <DisableButton>Добавить</DisableButton>}
          {!isEmptyInputs && (
            <SubmitButton onClick={handleSubmit}> Добавить </SubmitButton>
          )}
        </>
      )}
    </AddLineWrapper>
  );
}

export default AddLine;
