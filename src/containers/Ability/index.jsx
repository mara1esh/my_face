import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Grow from "@material-ui/core/Grow";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";

import Skill from "../../components/Skill";

import icoJS from "../../assets/javascript.svg";
import icoReact from "../../assets/react.svg";
import icoRedux from "../../assets/redux.svg";

import icoGraphQL from "../../assets/graphql.svg";
import icoRestAPI from "../../assets/semaphoreci.svg";

import icoTypescript from "../../assets/typescript.svg";
import icoHTML from "../../assets/html5.svg";
import icoCSS from "../../assets/css3.svg";
import icoSCSS from "../../assets/sass.svg";

import icoGit from "../../assets/git.svg";
import icoWebpack from "../../assets/webpack.svg";
import icoVSCode from "../../assets/visualstudiocode.svg";
import icoInvision from "../../assets/invision.svg";
import icoAsana from "../../assets/asana.svg";
import icoGithub from "../../assets/github.svg";
import icoMaterialUI from "../../assets/material-ui.svg";
import icoBootstrap from "../../assets/bootstrap.svg";

import icoMongoDB from "../../assets/mongodb.svg";
import icoMySQL from "../../assets/mysql.svg";

const useStyles = makeStyles({
  container: {
    marginTop: 30
  },
  title: {
    paddingBottom: 30
  },
  rest: {
    paddingTop: 30,
    paddingBottom: 30
  },
  restContainer: {
    margin: "auto",
    marginBottom: 30
  }
});

export default () => {
  const classes = useStyles();
  const [showTitle, setTitle] = useState(false)
  const [showSkills, setSkills] = useState(false);
  const [showOtherSkills, setOtherSkills] = useState(false);

  setTimeout(() => setTitle(true), 1300);
  setTimeout(() => setSkills(true), 1500);
  setTimeout(() => setOtherSkills(true), 1600);
  return (
    <Grid container direction="column" className={classes.container}>
      <Grid item lg={12} sm={12} container direction="column">
        <Grow in={showTitle}>
        <Typography variant="h2" className={classes.title}>
          Top skills
        </Typography>
        </Grow>
      </Grid>
      <Slide direction="up" in={showSkills} mountOnEnter unmountOnExit timeout={1000}>
      <Grid
        container
        item
        lg={12}
        sm={12}
        justify="space-around"
        alignItems="center"
      >
        <Skill
          item={{ icon: icoJS, name: "JavaScript", fillColor: "yellow" }}
          size="60"
        />
        <Skill
          item={{ icon: icoReact, name: "React", fillColor: "#5ED4F3" }}
          size="60"
        />
        <Skill
          item={{ icon: icoRedux, name: "Redux", fillColor: "#7A50BE" }}
          size="60"
        />
      </Grid>
      </Slide>
      <Grow in={showTitle}>
      <Typography variant="h4" className={classes.rest} timeout={2000}>
        Other skills
      </Typography>
      </Grow>
      <Slide direction="up" in={showOtherSkills} mountOnEnter unmountOnExit timeout={1500}>
      <Grid
        container
        item
        lg={10}
        justify="center"
        xs={11}
        className={classes.restContainer}
      >
        {/* Client-server connect*/}
        <Skill
          item={{
            icon: icoGraphQL,
            name: "Apollo GraphQL",
            fillColor: "#E534AB"
          }}
        />
        <Skill
          item={{ icon: icoRestAPI, name: "REST API", fillColor: "#66AD3E" }}
        />

        {/* Secondary */}
        <Skill
          item={{
            icon: icoTypescript,
            name: "TypeScript",
            fillColor: "#294D80"
          }}
        />
        <Skill
          item={{ icon: icoWebpack, name: "Webpack", fillColor: "#A8C5F1" }}
        />

        {/* Db */}
        <Skill item={{ icon: icoMySQL, name: "MySQL", fillColor: "#007D7D" }} />
        <Skill
          item={{ icon: icoMongoDB, name: "MongoDB", fillColor: "#66AD3E" }}
        />

        {/* Other */}
        <Skill item={{ icon: icoHTML, name: "HTML", fillColor: "#E54C20" }} />
        <Skill item={{ icon: icoCSS, name: "CSS", fillColor: "#0060AC" }} />
        <Skill item={{ icon: icoSCSS, name: "SCSS", fillColor: "#C86196" }} />
        <Skill item={{ icon: icoMaterialUI, name: "Material - UI", fillColor: "#1975D2" }} />
        <Skill item={{ icon: icoBootstrap, name: "Bootstrap", fillColor: "#563D7C" }} />

        {/* Utils */}
        <Skill item={{ icon: icoGit, name: "Git", fillColor: "#E94F31" }} />
        <Skill
          item={{ icon: icoVSCode, name: "VS Code", fillColor: "#45A8ED" }}
        />
        <Skill
          item={{ icon: icoInvision, name: "Invision", fillColor: "#D6375C" }}
        />
        <Skill item={{ icon: icoAsana, name: "Asana", fillColor: "#F95878" }} />
        <Skill
          item={{ icon: icoGithub, name: "Github", fillColor: "#F8F8F8" }}
        />
      </Grid>
      </Slide>
    </Grid>
  );
};
