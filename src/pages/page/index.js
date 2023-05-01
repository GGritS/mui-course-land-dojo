import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { Wrapper } from "../../components/wrapper";
import { MyBreadcrumbs } from "../../components/breadcrumbs";
import { AllCategories } from "../../components/allCategories";
import { CurrentlyFeatured } from "../../components/curentlyFeautured";
import { SelectOrder } from "../../components/selectOrder";
import { styles } from "./styles";

export const Page = () => {
  return (
    <Box sx={{ pt: "90px" }}>
      <Wrapper>
        <Box>
          <Typography variant="h1" textAlign="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Typography>
          <MyBreadcrumbs />
          <CurrentlyFeatured />
        </Box>
        <Box sx={styles.wrapper}>
          <AllCategories />
          <SelectOrder />
        </Box>
      </Wrapper>
    </Box>
  );
};
