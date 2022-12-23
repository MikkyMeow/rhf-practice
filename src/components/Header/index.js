import { Typography } from "@mui/material";
import styles from "./index.module.css";

export const Header = () => {
  return (
    <Typography className={styles.root} component="h1" variant="h5">
      The Ultimate Form Challenge
    </Typography>
  );
};
