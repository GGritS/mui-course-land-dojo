import React from "react";

import whiteArrow from "./../../assets/chevron-down-white.svg";
import arrow from "./../../assets/chevron-down.svg";
import { styles } from "./styles";
import { Box, Link } from "@mui/material";
import { NavLink } from "react-router-dom";

const pages = [
  {
    title: "home",
    arrow: false,
  },
  {
    title: "about",
    arrow: false,
  },
  {
    title: "course",
    arrow: true,
  },
  {
    title: "page",
    arrow: true,
  },
  {
    title: "blog",
    arrow: false,
  },
  {
    title: "contact",
    arrow: false,
  },
];

export const Navbar = ({ white }) => {
  return (
    <Box sx={styles.navbar}>
      {pages.map((page) => (
        <Link
          key={page.title}
          component={NavLink}
          to={page.title === "home" ? "/" : page.title}
          sx={{
            ...styles.link,
            color: white ? "#fff" : "#000",
            textTransform: "capitalize",
          }}
        >
          {page.title}
          {page.arrow && (
            <Box
              sx={styles.arrow}
              component="img"
              src={white ? whiteArrow : arrow}
            />
          )}
        </Link>
      ))}
    </Box>
  );
};
