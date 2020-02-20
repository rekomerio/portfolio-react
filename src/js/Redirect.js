import React, { useEffect, useState } from "react";
import Fab from "@material-ui/core/Fab";
import { makeStyles } from "@material-ui/core/styles";
import Send from "@material-ui/icons/Send";
import Cancel from "@material-ui/icons/Cancel";

export default function Redirect({ to }) {
    const classes = useStyles();
    const [timer, setTimer] = useState(5);

    useEffect(() => {
        const interval = setInterval(() => setTimer(state => Math.max(state - 1, 0)), 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (timer <= 0) {
            redirect(to);
        }
    }, [timer, to]);

    function redirect(url) {
        window.location.assign(url);
    }

    function goBack() {
        window.history.back();
    }

    return (
        <div id="about" className="content deep-dark left">
            <div className="general redirect">
                <h3 className="cyan-font">You are being redirected in {timer}</h3>
                <p>
                    <a className="link" href={to}>
                        {to}
                    </a>
                </p>
                <div className="actions">
                    <Fab className={classes.cancel} variant="extended" onClick={goBack}>
                        Cancel
                        <Cancel />
                    </Fab>
                    <Fab
                        className={classes.confirm}
                        variant="extended"
                        onClick={() => setTimer(0)}
                    >
                        Let's go
                        <Send />
                    </Fab>
                </div>
            </div>
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    cancel: {
        backgroundColor: "#482880",
        color: "white",
        "&:hover": {
            backgroundColor: "#8561c5"
        }
    },
    confirm: {
        marginLeft: "2rem",
        backgroundColor: "#008394",
        color: "white",
        "&:hover": {
            backgroundColor: "#33c9dc"
        }
    }
}));
