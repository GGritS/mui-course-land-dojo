import MuiBreadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { styles } from "./styles";

export const MyBreadcrumbs = () => {
  return (
    <MuiBreadcrumbs sx={styles.breadcrumbs}>
      <Link sx={styles.link}>Home</Link>
      <Link sx={styles.link}>Course</Link>
      <Link sx={styles.link}>Lorem ipsum dolor sit amet</Link>
    </MuiBreadcrumbs>
  );
};
