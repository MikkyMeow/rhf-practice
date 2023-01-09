import { Container } from "@mui/material";
import styles from "./index.module.css";

export const MainContainer = ({ children, ...props }) => {
  return (
    <Container
      className={styles.root}
      container="main"
      maxWidth="xs"
      {...props}
    >
      {children}
    </Container>
  );
};
