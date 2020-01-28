import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  image: {
    width: 80,
    marginRight: 20
  },
  container: {
    marginBottom: 30
  }
});

const Workplace = ({ place }) => {
  const { name, position, date, icon } = place;
  const classes = useStyles();

  return (
    <Grid className={classes.container}>
      <Box display="flex" flexDirection="row">
        <img src={icon} className={classes.image} alt={`${name}'s icon`} />
        <Box>
          <Typography variant="body1">{position}</Typography>
          <Typography variant="body1">{name}</Typography>
          <Typography variant="body1">{date}</Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default Workplace;
