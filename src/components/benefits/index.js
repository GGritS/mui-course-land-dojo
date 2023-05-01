import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import photo_group from "../../assets/Group.png";
import photo_1 from "../../assets/group1.svg";
import photo_2 from "../../assets/group2.svg";
import photo_3 from "../../assets/group3.svg";
import { styles } from "./styles";

const info = [
  {
    imgSrc: photo_1,
    title: "Online Degrees",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,",
  },
  {
    imgSrc: photo_2,
    title: "Short courses",
    text: "Lorem ipsum dolor sit amet, consectetur",
  },
  {
    imgSrc: photo_3,
    title: "Expert Traning",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,",
  },
];

export const Benefits = () => {
  return (
    <Box sx={styles.benefits}>
      <Box sx={styles.wrapper}>
        <Box sx={styles.info}>
          <Box
            component="img"
            src={photo_group}
            sx={{ width: "100%", maxWidth: "575px" }}
          />
          <Box>
            <Typography variant="h2" sx={styles.title}>
              Benifits from our online learning
            </Typography>
            <Box sx={{ mt: "30px" }}>
              {info.map((item, index) => (
                <Box sx={styles.boxInfoItem} key={`${item.text}_${index}`}>
                  <Box component="img" src={item.imgSrc} />
                  <Box>
                    <Typography sx={styles.boxInfoItemTitle}>
                      {item.title}
                    </Typography>
                    <Typography sx={styles.boxInfoItemText}>
                      {item.text}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
