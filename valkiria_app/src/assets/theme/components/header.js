const componentStyles = (theme) => ({
  header: {
    position: "relative",
    background:
      "linear-gradient(87deg,#CC86C2,#FE959A)",
    paddingBottom: "8rem",
    paddingTop: "3rem",
    [theme.breakpoints.up("md")]: {
      paddingTop: "8rem",
    },
  },
  containerRoot: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: "39px",
      paddingRight: "39px",
    },
  },
});

export default componentStyles;
