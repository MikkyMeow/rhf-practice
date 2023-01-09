import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useData } from "../../context";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../Button";
import { MainContainer } from "../MainContainer";
import { Form } from "../Form";
import { Input } from "../Input";
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^([^0-9]*)$/, "First name shouldn't contain numbers")
    .required("First name is a required field"),
  lastName: yup
    .string()
    .matches(/^([^0-9]*)$/, "Last name shouldn't contain numbers")
    .required("Last name is a required field"),
});

export const Step1 = () => {
  const { setValues, data } = useData();
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: { firstName: data.firstName, lastName: data.lastName },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    navigate("/step-2");
    setValues(data);
  };

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        🐎 Step 1
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          control={control}
          label="First Name"
          name="firstName"
          required
          error={!!errors.firstName}
          helperText={errors?.firstName?.message}
        />
        <Input
          control={control}
          label="Last Name"
          name="lastName"
          required
          error={!!errors.lastName}
          helperText={errors?.lastName?.message}
        />
        <Button>Next</Button>
      </Form>
    </MainContainer>
  );
};
