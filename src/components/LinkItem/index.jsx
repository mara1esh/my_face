import React from "react";
import Link from "@material-ui/core/Link";
import { ReactSVG } from "react-svg";

const LinkIcon = ({
  icon,
  alt,
  color = "7A50BE",
  size = "large",
  background = false,
  ...props
}) => (
  <Link {...props}>
    <ReactSVG
      beforeInjection={svg => {
        svg.setAttribute(
          "style",
          `fill: #${color}; width: ${
            size === "large" ? 40 : 20
          }px; margin-right: 15px; ${background && 'background-color: white;'}border-radius:4px;`
        );
      }}
      src={icon}
    />
  </Link>
);

export default LinkIcon