import React from "react";
import Grid from "@material-ui/core/Grid";

import "./styles.scss";

import Head from "../containers/Head";
import Ability from "../containers/Ability";
import Footer from "../containers/Footer";

const Summary = () => {
  return (
    <Grid container direction="column">
      <Head />
      <Ability />
      <Footer />
    </Grid>
  );
};

export default Summary;
