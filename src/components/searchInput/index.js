import { IconButton, Paper } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const styles = {
  paper: {
    p: "2px 4px",
    alineItems: "center",
    width: "275px",
    display: { xs: "none", lg: "flex" },
  },
  inputBase: {
    ml: "1",
    flex: 1,
  },
};

export const SearchInput = () => {
  return (
    <Paper component="form" sx={styles.paper}>
      <InputBase
        placeholder="Search"
        // InputBase={{ "arial-labels": "search" }}
        // inputProps={{ "arial-labels": "search" }}
        sx={styles.inputBase}
      />
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};
