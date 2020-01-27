import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles } from "@material-ui/core/styles";

import LinkIcon from "../../components/LinkItem";
import Workplace from "../../components/Workplace";

import icoGithub from "../../assets/github.svg";
import icoProtonmail from "../../assets/protonmail.svg";
import icoLinkedin from "../../assets/linkedin.svg";
import icoTelegram from "../../assets/telegram.svg";

import icoTangram from "../../assets/tangram_logo.jpg";
import icoInRecovery from "../../assets/inrecovery_logo.png";

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
  }
});

export default () => {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.title} variant="h1">
        WooHoo
      </Typography>
      <Grid container spacing={4} justify="center">
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
          <Typography variant="h4">
            Valerii Shelihan
          </Typography>
          <Typography variant="h4">
            21 y.o.
          </Typography>
          <Typography variant="h4">
            Kyiv 🇺🇦
          </Typography>
          <Hidden smDown>
            <Box display="flex" justifyContent="center" mt={4}>
              <LinkIcon
                icon={icoLinkedin}
                color="1A72B6"
                background
                href="https://ua.linkedin.com/in/valerii-shelihan-111392156?trk=people_directory"
                rel="noopener noreferrer"
                target="_blank"
              />
              <LinkIcon
                icon={icoGithub}
                color="fff"
                href="https://github.com/mara1esh"
                rel="noopener noreferrer"
                target="_blank"
              />
              <LinkIcon
                icon={icoProtonmail}
                href="mailto:mara1esh@protonmail.com"
                color="fff"
              />
              <LinkIcon
                icon={icoTelegram}
                color="30A5D8"
                href="tg://resolve?domain=mara1esh"
              />
            </Box>
          </Hidden>
        </Grid>
        <Grid item lg={4} sm={8} xs={6} md={5}>
          <img
            style={{ width: "100%" }}
            src="data:image/png;base64,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"
            alt="my_avatar"
          />
        </Grid>

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
          <Typography variant="h2">
            Experiance
          </Typography>
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
                date: "Aug 2019 - ???"
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
