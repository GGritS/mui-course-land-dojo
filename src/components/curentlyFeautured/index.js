import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import approve from "../../assets/aprove.svg";
import close_item from "../../assets/close-item-list.svg";
import { styles } from "./styles";

const featureCourseCards = [
  {
    title: "Basic Pack",
    functions: [
      { title: "3 HD video lessons & tutorials", isApproved: true },
      { title: "1 Official exam", isApproved: true },
      { title: "100 Practice questions", isApproved: true },
      { title: "1 Month subscriptions", isApproved: true },
      { title: "1 Free book", isApproved: true },
      { title: "Practice quizes & assignments", isApproved: false },
      { title: "In depth explanations", isApproved: false },
      { title: " Personal instructor Assitance", isApproved: false },
    ],
  },
  {
    title: "Standard Pack",
    functions: [
      { title: "3 HD video lessons & tutorials", isApproved: true },
      { title: "1 Official exam", isApproved: true },
      { title: "100 Practice questions", isApproved: true },
      { title: "1 Month subscriptions", isApproved: true },
      { title: "1 Free book", isApproved: true },
      { title: "Practice quizes & assignments", isApproved: true },
      { title: "In depth explanations", isApproved: false },
      { title: " Personal instructor Assitance", isApproved: false },
    ],
  },
  {
    title: "Premium Pack",
    functions: [
      { title: "3 HD video lessons & tutorials", isApproved: true },
      { title: "1 Official exam", isApproved: true },
      { title: "100 Practice questions", isApproved: true },
      { title: "1 Month subscriptions", isApproved: true },
      { title: "1 Free book", isApproved: true },
      { title: "Practice quizes & assignments", isApproved: true },
      { title: "In depth explanations", isApproved: true },
      { title: " Personal instructor Assitance", isApproved: true },
    ],
  },
];

export const CurrentlyFeatured = () => {
  return (
    <Box sx={{ pt: "96px" }}>
      <Typography variant="h1" textAlign="center">
        featured course
      </Typography>
      <Typography variant="h2" textAlign="center" sx={styles.subTitle}>
        curntly featured
      </Typography>

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        sx={{ justifyContent: "center" }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {featureCourseCards.map((cardItem, cardIndex) => (
          <Grid
            item
            xs={4}
            sm={4}
            md={4}
            key={`${cardItem.title}_${cardIndex}`}
          >
            <Card sx={styles.card}>
              <Typography sx={styles.titleCard}>{cardItem.title}</Typography>
              <Divider sx={styles.dividerCard} />
              <List>
                {cardItem.functions.map((item, index) => (
                  <ListItem sx={styles.listItem} key={`${item.title}_${index}`}>
                    <Box
                      component="img"
                      src={item.isApproved ? approve : close_item}
                    />
                    {item.title}
                  </ListItem>
                ))}
              </List>
              <Typography sx={styles.price}>$000</Typography>
              <Button sx={styles.btnCard}>Purchase Course</Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
