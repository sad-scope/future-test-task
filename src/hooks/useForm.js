import { useState, useEffect, useCallback } from "react";

const useForm = (values, setValues, validate) => {
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitForm = useCallback(() => {
    setIsSubmitted(true);
  }, []);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const changeHandlerAddress = (e) => {
    const { name, value } = e.target;
    setValues((prevState) => ({
      ...prevState,
      address: {
        ...prevState.address,
        [name]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      submitForm();
    }
  }, [errors, submitForm, isSubmitting]);

  return {
    handleSubmit,
    errors,
    isSubmitted,
    changeHandler,
    setIsSubmitted,
    changeHandlerAddress,
  };
};

export default useForm;
