import React from 'react';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
    boxInternal: {
        borderStyle: "dashed",
        minHeight: 200,
    },
});

interface ForumBoxComponentProps {
    username: string;
    title: string;
    body: String;
}

export const ForumBoxComponent: React.FC<ForumBoxComponentProps> = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.boxInternal}  >
            <h2>{props.title}</h2>
            <p>{props.body}</p>
            <h3>{props.username}</h3>
            <h2>{props.title}</h2>
        </div>
    )
}