import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Hidden from "@material-ui/core/Hidden";
import Grow from "@material-ui/core/Grow";
import Slide from "@material-ui/core/Slide";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import Workplace from "../../components/Workplace";
import Socials from "../Socials";

import icoTangram from "../../assets/tangram_logo.jpg";
import icoInRecovery from "../../assets/inrecovery_logo.png";
import icoMe from "../../assets/me.jpg";
import icoStep from "../../assets/step.jpeg";
import icoMNTU from "../../assets/mntu.jpg";

const useStyles = makeStyles({
  title: {
    marginBottom: 40
  },
  Experience: {
    marginTop: 30
  },
  contact: {
    height: 20,
    backgroundColor: "red"
  },
  myImage: {
    borderRadius: 4,
    height: "100%"
  },
  button: {
    backgroundColor: "#fff",
    width: "max-content",
    "&:hover": {
      backgroundColor: "#45A8ED",
      color: "#fff"
    }
  },
  reversed: {
    transform: "rotate(180deg)"
  }
});

export default () => {
  const classes = useStyles();
  const [showDetails, setDetails] = useState(false);
  const [showImage, setImage] = useState(false);
  const [showExperiance, setExperiance] = useState(false);

  const [value, setValue] = useState("experience");

  const handleChange = () => {
    if (value === "experience") setValue("education");
    else setValue("experience");
  };

  setTimeout(() => setImage(true), 1100);
  setTimeout(() => setDetails(true), 1200);
  setTimeout(() => setExperiance(true), 1300);

  const Experience = () => (
    <>
      <Typography variant="h2">Experience</Typography>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.Experience}
      >
        <Workplace
          place={{
            icon: icoInRecovery,
            name: "InRecovery",
            position: "JavaScript developer",
            date: "Aug 2019 - Present"
          }}
        />
        <Workplace
          place={{
            icon: icoTangram,
            name: "Tangram",
            position: "Front-end developer",
            date: "Apr 2019 - Aug 2019"
          }}
        />
      </Grid>
    </>
  );

  const Education = () => (
    <>
      <Typography variant="h2">Education</Typography>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.Experience}
      >
        <Workplace
          place={{
            icon: icoMNTU,
            name: "ISTU",
            position: "Computer engenireeng",
            date: "Sep 2019 - Jul 2022"
          }}
        />
        <Workplace
          place={{
            icon: icoStep,
            name: "Step",
            position: "Program development",
            date: "Mar 2017 - Jan 2020"
          }}
        />
      </Grid>
    </>
  );

  const DisplayContent = () =>
    value === "experience" ? <Experience /> : <Education />;

  const DispayButtonContent = () =>
    value === "experience" ? (
      <>
        Education <ArrowRightAltIcon fontSize="large" />
      </>
    ) : (
      <>
        <ArrowRightAltIcon fontSize="large" className={classes.reversed} />
        Experience
      </>
    );

  return (
    <>
      <Typography className={classes.title} variant="h1">
        Overview
      </Typography>
      <Grid container spacing={4} justify="center">
        <Slide
          direction="right"
          in={showDetails}
          mountOnEnter
          unmountOnExit
          timeout={2600}
        >
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
        <Slide
          direction="left"
          mountOnEnter
          unmountOnExit
          in={showExperiance}
          timeout={1500}
        >
          <Grid
            item
            container
            lg={4}
            sm={3}
            xs={12}
            md={4}
            direction="column"
            justify="center"
            alignItems="center"
          >
            <DisplayContent />
            <Button className={classes.button} onClick={handleChange}>
              <DispayButtonContent />
            </Button>
          </Grid>
        </Slide>
      </Grid>
    </>
  );
};
