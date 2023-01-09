import { Checkbox, FormControlLabel, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button";
import { Form } from "../Form";
import { Input } from "../Input";
import { MainContainer } from "../MainContainer";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useData } from "../../context";
import parsePhoneNumberFromString from "libphonenumber-js";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("E-mail is not valid")
    .required("E-mail is a required field"),
});

const normalizePhoneNumber = (value) => {
  const phoneNumber = parsePhoneNumberFromString(value);
  if (!phoneNumber) {
    return value;
  }
  return phoneNumber.formatInternational();
};

export const Step2 = () => {
  const navigate = useNavigate();
  const { setValues, data } = useData();
  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: { email: data.email },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const hasPhone = watch("hasPhone");

  const onSubmit = (data) => {
    navigate("/step-3");
    setValues(data);
  };

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        🐎 Step 2
      </Typography>
      <Form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Input
          control={control}
          type="email"
          label="E-mail"
          name="email"
          required
          error={!!errors.email}
          helperText={errors?.email?.message}
        />
        <Controller
          name="hasPhone"
          control={control}
          render={({ field }) => (
            <FormControlLabel
              control={<Checkbox {...field} />}
              label="Do you have a phone?"
            />
          )}
        />
        {hasPhone && (
          <Input
            control={control}
            type="tel"
            label="Phone"
            name="phone"
            onChange={(e) => {
              e.target.value = normalizePhoneNumber(e.target.value);
            }}
          />
        )}
        <Button>Next</Button>
      </Form>
    </MainContainer>
  );
};
