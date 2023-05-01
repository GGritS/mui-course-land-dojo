export const styles = {
  wrapper: (theme) => ({
    pt: "24px",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      pt: "96px",
      gap: "15px",
    },
  }),
  wrapperLeftBlock: (theme) => ({
    [theme.breakpoints.up("md")]: {
      maxWidth: "717px",
    },
  }),
  img: {
    width: "100%",
    minHeight: "396px",
    objectFit: "cover",
  },
};
