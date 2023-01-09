import React from "react";
import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

export const Input = ({ control, name, ...rest }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          {...field}
          {...rest}
        />
      )}
    />
  );
};
