import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import image_learn from "./../../assets/imageslearn.png";
import { styles } from "./styles";
import { Wrapper } from "../../components/wrapper";
import { MyBreadcrumbs } from "../../components/breadcrumbs";
import { CourseDescription } from "../../components/courseDescription";
import { Courses } from "../../components/courses";
import { LearnCourse } from "../../components/learnCourse";
import { CourseContent } from "../../components/courseContent";
import { CourseDetails } from "../../components/courseDetails";
import { CurrentStatus } from "../../components/currentStatus";

export const CoursePage = () => {
  return (
    <Box sx={{ pt: "90px" }}>
      <Wrapper>
        <Box>
          <Typography variant="h1" textAlign="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Typography>
          <MyBreadcrumbs />
        </Box>
        <Box sx={styles.wrapper}>
          <Box sx={styles.wrapperLeftBlock}>
            <Box component="img" src={image_learn} sx={styles.img} />
            <CurrentStatus />
            <CourseDescription />
            <LearnCourse />
            <CourseContent />
          </Box>
          <Box>
            <CourseDetails />
            <Courses />
          </Box>
        </Box>
      </Wrapper>
    </Box>
  );
};
