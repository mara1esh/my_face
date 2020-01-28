import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Hidden from "@material-ui/core/Hidden";
import Grow from "@material-ui/core/Grow";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";

import Workplace from "../../components/Workplace";
import Socials from "../Socials";

import icoTangram from "../../assets/tangram_logo.jpg";
import icoInRecovery from "../../assets/inrecovery_logo.png";
import icoMe from "../../assets/me.jpg";

const useStyles = makeStyles({
  title: {
    marginBottom: 40
  },
  experiance: {
    marginTop: 30
  },
  contact: {
    height: 20,
    backgroundColor: "red"
  },
  myImage: {
    borderRadius: 4,
    height: "100%"
  }
});

export default () => {
  const classes = useStyles();
  const [showDetails, setDetails] = useState(false);
  const [showImage, setImage] = useState(false);
  const [showExperiance, setExperiance] = useState(false);

  setTimeout(() => setImage(true), 1100);
  setTimeout(() => setDetails(true), 1200);
  setTimeout(() => setExperiance(true), 1300);

  return (
    <>
      <Typography className={classes.title} variant="h1">
        Overview
      </Typography>
      <Grid container spacing={4} justify="center">
        <Slide direction="right" in={showDetails} mountOnEnter unmountOnExit timeout={2600}>
          <Grid
            item
            container
            direction="column"
            lg={4}
            sm={4}
            xs={4}
            md={4}
            justify="center"
          >
            <Typography variant="h4">Valerii Shelihan</Typography>
            <Typography variant="h4">21 y.o.</Typography>
            <Typography variant="h4">Kyiv 🇺🇦</Typography>
            <Hidden smDown>
              <Box display="flex" justifyContent="center" mt={4}>
                <Socials size="large" />
              </Box>
            </Hidden>
            
          </Grid>
        </Slide>
        <Grid item lg={4} sm={8} xs={6} md={5}>
          <Grow in={showImage} timeout={1500}>
            <img className={classes.myImage} src={icoMe} alt="my_avatar" />
          </Grow>
        </Grid>
        <Slide direction="left" mountOnEnter unmountOnExit in={showExperiance} timeout={1500}>
          <Grid
            item
            container
            lg={4}
            sm={3}
            xs={12}
            md={4}
            direction="column"
            justify="center"
          >
            <Typography variant="h2">Experiance</Typography>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              className={classes.experiance}
            >
              <Workplace
                place={{
                  icon: icoTangram,
                  name: "Tangram",
                  position: "Front-end developer",
                  date: "Apr 2019 - Aug 2019"
                }}
              />
              <Workplace
                place={{
                  icon: icoInRecovery,
                  name: "InRecovery",
                  position: "JavaScript developer",
                  date: "Aug 2019 - Present"
                }}
              />
            </Grid>
          </Grid>
        </Slide>
      </Grid>
    </>
  );
};
