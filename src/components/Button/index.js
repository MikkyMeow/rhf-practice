import { Button as ButtonUI } from "@mui/material";
import styles from "./index.module.css";

export const Button = ({ children, props }) => {
  return (
    <ButtonUI
      fullWidth
      variant="contained"
      color="primary"
      type="submit"
      className={styles.root}
      {...props}
    >
      {children}
    </ButtonUI>
  );
};
