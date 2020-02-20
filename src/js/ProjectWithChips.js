import React from "react";
import Chip from "@material-ui/core/Chip";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    link: {
        color: "#949696",

        "&:hover": {
            color: "#764bc1"
        }
    },

    project: {
        margin: "1rem 0"
    },
    chips: {
        maxWidth: 350,
        "& > div": {
            margin: theme.spacing(0.5),
            backgroundColor: "#008394",
            color: "#fff",

            "&:hover": {
                backgroundColor: "#673ab7"
            },
            "&:active": {
                backgroundColor: "#673ab7"
            }
        }
    }
}));

export default function MyChips(props) {
    const { selected, projects, setTag } = props;
    const classes = useStyles();

    return (
        <div>
            {projects.map((project, i) => (
                <div className={classes.project} key={i}>
                    <Link className={classes.link} to={project.url}>
                        {project.title}
                    </Link>
                    <hr />
                    <div className={classes.chips}>
                        {project.tags.map((tag, j) => (
                            <Chip
                                onClick={() => setTag(tag)}
                                label={tag}
                                style={{ backgroundColor: tag === selected ? "#482880" : "" }}
                                key={j}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
