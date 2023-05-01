import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import logo from "../../assets/logo.svg";

import { styles } from "./styles";

const footerInfo = [
  {
    list: ["about", "Parteners", "careers", "Teaching Center"],
    title: "Company",
  },
  {
    list: ["Classroom courses", "Video Courses", "Offline Courses"],
    title: "categories",
  },
  { list: ["contact us", "site feedback"], title: "support" },
  { list: ["Privacy", "Help", "Contact"], title: "get in touch" },
];
const navItems = ["About", "Careers", "Resource center", "Guides"];

export const Footer = () => {
  return (
    <Box sx={styles.footer}>
      <Box sx={styles.wrapper}>
        <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
          {footerInfo.map((footerItem, index) => (
            <Grid
              item
              xs={6}
              sm={4}
              md={3}
              key={`${footerItem.title}+${index}`}
            >
              <Typography variant="h3">{footerItem.title}</Typography>
              <List>
                {footerItem.list.map((item, index) => {
                  return (
                    <ListItem sx={styles.itemList} key={index}>
                      {item}
                    </ListItem>
                  );
                })}
              </List>
              {footerItem.title === "get in touch" ? (
                <Box sx={styles.links}>
                  <IconButton>
                    <InstagramIcon sx={styles.icon} />
                  </IconButton>
                  <IconButton>
                    <TwitterIcon sx={styles.icon} />
                  </IconButton>
                  <IconButton>
                    <FacebookIcon sx={styles.icon} />
                  </IconButton>
                </Box>
              ) : (
                ""
              )}
            </Grid>
          ))}
        </Grid>
        <Box sx={styles.copyrightBlock}>
          <Typography sx={styles.logo}>
            <Box component="img" src={logo} />
          </Typography>
          <Typography sx={styles.copyrightText}>
            Copyright © 2022 Turitor. All Right Reserved.
          </Typography>
          <Box sx={styles.nav}>
            {navItems.map((item, index) => {
              return (
                <Button key={index} sx={styles.linkBtn}>
                  {item}
                </Button>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
