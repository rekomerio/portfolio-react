import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import { projects } from "./Content";
import MyChips from "./ProjectWithChips";

const useStyles = makeStyles(theme => ({
  paper: {
    backgroundColor: "#171717",
    minWidth: 350
  },
  title: {
    color: "#8561c5"
  },
  contentText: {
    color: "#949696"
  },
  button: {
    color: "#8561c5"
  }
}));

export default function AlertDialog(props) {
  const classes = useStyles();
  const { isOpen, close, tag } = props; // Close is a function
  const matchingProjects = projects.filter(project => project.tags.includes(tag));

  function setTag(tag) {
    props.setTag({ open: true, tag: tag });
  }

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
          <div className={classes.projects}>
            {matchingProjects.length ? (
              <MyChips selected={tag} projects={matchingProjects} setTag={setTag} />
            ) : (
              <DialogContentText className={classes.contentText}>
                Content coming soon
              </DialogContentText>
            )}
          </div>
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
