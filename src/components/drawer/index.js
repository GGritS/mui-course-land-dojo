import React from "react";
import MuiDrawer from "@mui/material/Drawer";
import { Box, IconButton } from "@mui/material";
import close from "./../../assets/close.svg";
import { Navbar } from "../navbar";

export const Drawer = ({ open, onClose }) => {
  return (
    <MuiDrawer
      anchor="left"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: "100%",
          zIndex: 4,
        },
      }}
    >
      <Box sx={{ p: "20px" }}>
        <IconButton onClick={onClose} sx={{ p: 0 }}>
          <Box component="img" src={close} />
        </IconButton>
        <Box sx={{ mt: "24px" }}>
          <Navbar />
        </Box>
      </Box>
    </MuiDrawer>
  );
};
