import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import Head from "../containers/Head";
import Ability from "../containers/Ability";
import Footer from "../containers/Footer";

const useStyles = makeStyles({
  container: {
    '&:empty': {
      height: '100%'
    }
  }
})

const Summary = () => {
  const classes = useStyles()
  return (
    <Grid container direction="column" className={classes.container}>
      <Head />
      <Ability />
      <Footer />
    </Grid>
  );
};

export default Summary;
