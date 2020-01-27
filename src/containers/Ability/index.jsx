import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
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

import icoMongoDB from "../../assets/mongodb.svg";
import icoMySQL from "../../assets/mysql.svg";

const useStyles = makeStyles({
    container: {
        marginTop: 30,
    },
    title: {
        paddingBottom: 30
    },
    rest: {
        paddingTop: 30,
        paddingBottom: 30
    },
    restContainer: {
        margin: 'auto',
        marginBottom: 30
    }
})

export default () => {
    const classes = useStyles()
  return (
    <Grid container direction="column" className={classes.container}>
      <Grid item lg={12} sm={12} container direction="column">
        <Typography variant="h2" className={classes.title}>Top skills</Typography>
      </Grid>
      <Grid container item lg={12} sm={12} justify="space-around" alignItems="center">
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
      <Typography variant="h4" className={classes.rest}>Rest skills</Typography>
      <Grid container item lg={10} justify="center" xs={11} className={classes.restContainer}>

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
        item={{ icon: icoTypescript, name: "TypeScript", fillColor: "#294D80" }}
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

      {/* Utils */}
      <Skill item={{ icon: icoGit, name: "Git", fillColor: "#E94F31" }} />
      <Skill
        item={{ icon: icoVSCode, name: "VS Code", fillColor: "#45A8ED" }}
      />
      <Skill
        item={{ icon: icoInvision, name: "Invision", fillColor: "#D6375C" }}
      />
      <Skill item={{ icon: icoAsana, name: "Asana", fillColor: "#F95878" }} />
      <Skill item={{ icon: icoGithub, name: "Github", fillColor: "#F8F8F8" }} />
      </Grid>
    </Grid>
  );
};
