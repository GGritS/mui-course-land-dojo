import { Box } from "@mui/material";
import React from "react";
import { Header } from "../header";
import { Subscribe } from "../subscribe";
import { Footer } from "../footer";

export const Layout = ({ children }) => {
  return (
    <Box>
      <Header />
      {children}
      <Subscribe />
      <Footer />
    </Box>
  );
};
