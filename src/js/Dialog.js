import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { projects } from "./Content";

const useStyles = makeStyles(theme => ({
  paper: {
    backgroundColor: "#171717"
  },
  title: {
    color: "#8561c5"
  },
  contentText: {
    color: "#949696"
  },
  link: {
    color: "#949696",

    "&:hover": {
      color: "#764bc1"
    }
  },
  button: {
    color: "#8561c5"
  }
}));

export default function AlertDialog(props) {
  const classes = useStyles();
  const { isOpen, close, tag } = props; // Close is a function
  const matchingProjects = projects.filter(project => project.technologies.includes(tag));

  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={close}
        classes={{ paper: classes.paper }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" className={classes.title}>
          {tag}
        </DialogTitle>
        <DialogContent>
          {matchingProjects.length ? (
            matchingProjects.map((project, i) => (
              <div>
                <Link className={classes.link} to={project.url}>
                  {project.title}
                </Link>
              </div>
            ))
          ) : (
            <DialogContentText className={classes.contentText}>
              Content coming soon
            </DialogContentText>
          )}
        </DialogContent>
        <DialogActions>
          <Button classes={{ root: classes.button }} onClick={close} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
