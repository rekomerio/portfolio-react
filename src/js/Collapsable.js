import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Collapse from "@material-ui/core/Collapse";
import ExpandMore from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(theme => ({
  expandable: {
    cursor: "pointer",
    "&:hover $expandIcon": {
      opacity: 1
    }
  },
  expandIcon: {
    opacity: 0,
    transition: "all 0.2s"
  }
}));

export default function Collapsable(props) {
  const classes = useStyles();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <React.Fragment>
      <h2
        className={`${classes.expandable} ${props.titleClass}`}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {props.title}
        <ExpandMore
          className={classes.expandIcon}
          style={{ transform: isCollapsed ? "rotate(0deg)" : "rotate(-180deg)" }}
        />
      </h2>
      <Collapse timeout={props.timeout} in={!isCollapsed}>
        {props.children}
      </Collapse>
    </React.Fragment>
  );
}
