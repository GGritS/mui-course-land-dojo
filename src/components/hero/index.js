import React from "react";

import { Box, Button, Card, Link, Typography } from "@mui/material";
import banner_photo from "./../../assets/banner_photo.png";
import eye from "./../../assets/eye.svg";
import bx_bxs_time from "./../../assets/bx_bxs-time.svg";
import el_group from "./../../assets/el_group.svg";
import planet from "./../../assets/planet.svg";
import ant_design_play_circle_filled from "./../../assets/ant-design_play-circle-filled.svg";
import { styles } from "./styles";
import { Wrapper } from "../wrapper";

const cards = [
  { imgSrc: bx_bxs_time, title: "Hours content", content: "60,000+" },
  { imgSrc: el_group, title: "Students", content: "5,000+" },
  { imgSrc: planet, title: "Countries", content: "110+" },
];

export const Hero = () => {
  return (
    <Box sx={styles.hero}>
      <Wrapper>
        <Box sx={styles.info}>
          <Box component="img" sx={styles.imgBanner} src={banner_photo} />
          <Box sx={{ zIndex: 3, position: "relative" }}>
            <Typography variant="h2" sx={styles.title}>
              A revolutionary way to educate.
            </Typography>
            <Typography variant="body1" sx={styles.text}>
              “Online education is electronically supported learning that relies
              on the Internet for teacher/student interaction and the
              distribution of class materials.”
            </Typography>
            <Box sx={styles.wrapperBtn}>
              <Link sx={styles.link}>
                <Box component="img" src={ant_design_play_circle_filled} />
                <Box component="span">What’s null?</Box>
              </Link>
              <Button sx={styles.viewBtn}>
                <Box component="img" src={eye} />
                view courses
              </Button>
            </Box>
          </Box>
        </Box>
        <Box sx={styles.blockCards}>
          {cards.map((card) => (
            <Card sx={styles.card} key={card.title}>
              <Box component="img" src={card.imgSrc} />
              <Box sx={styles.content}>{card.content}</Box>
              <Box sx={styles.subContent}>{card.title}</Box>
            </Card>
          ))}
        </Box>
      </Wrapper>
    </Box>
  );
};
