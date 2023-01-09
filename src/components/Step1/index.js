import { MainContainer } from "../MainContainer";
import { Typography } from "@mui/material";
import { Form } from "../Form";
import { Input } from "../Input";
import { useForm } from "react-hook-form";
import { Button } from "../Button";

export const Step1 = () => {
  const formMethods = useForm({ mode: "onBlur" });
  const { handleSubmit, control } = formMethods;

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        🐎 Step 1
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input control={control} label="First Name" name="firstName" />
        <Input control={control} label="Last Name" name="lastName" />
        <Button>sef</Button>
      </Form>
    </MainContainer>
  );
};
