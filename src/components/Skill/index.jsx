import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { ReactSVG } from "react-svg";

const Skill = ({ item, size = 20 }) => {
  const variant = size > 25 ? "h4" : "body1";
  const xsSize = size > 25 ? 8 : 6;
  const align = size > 25 ? "center" : "flex-start";
  return (
    <Grid container item sm={3} xs={xsSize} lg={2} md={3} alignItems={align}>
      <ReactSVG
        src={item.icon}
        beforeInjection={svg => {
          svg.setAttribute(
            "style",
            `fill: ${item.fillColor}; width: ${size}px; margin-right: 15px; margin-bottom: 10px`
          );
        }}
      />
      <Typography variant={variant}>{item.name}</Typography>
    </Grid>
  );
};

export default Skill;
