import { Box } from "@mui/material";
import React from "react";

const styles = {
  wrapper: {
    maxWidth: "1240px",
    m: "auto",
    p: "20px",
  },
};

export const Wrapper = ({ children }) => {
  return <Box sx={styles.wrapper}>{children}</Box>;
};
