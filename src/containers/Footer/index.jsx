import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";

import Socials from "../Socials";

const useStyles = makeStyles({
  container: {
    backgroundColor: "#323232",
    paddingBottom: 20
  },
  socials: {
    paddingTop: 20,
    "@media (min-width:780px)": {
      display: "none"
    }
  },
  love: {
    paddingTop: 20,
    marginLeft: -15
  },
  copy: {
      paddingTop: 10,
      marginLeft: -15
  }
});

export default () => {
  const classes = useStyles();
  const [showFooter, setFooter] = useState(false)

  setTimeout(() => setFooter(true), 1800);

  return (
    <Slide in={showFooter} direction="up" timeout={1500}  mountOnEnter unmountOnExit>
    <Grid
      container
      direction="column"
      alignItems="center"
      className={classes.container}
    >
      <Box display="flex" flexGrow={1} className={classes.socials}>
        <Socials size="small" />
      </Box>
      <Box display="flex" flexGrow={1} className={classes.love}>
        Made w/{"  "} ❤️ to JS
      </Box>
      <Box display="flex" flexGrow={1} className={classes.copy}>
      © {new Date().getFullYear() }
      </Box>
    </Grid>
    </Slide>
  );
};
