import React from 'react';
import { Box, makeStyles, createMuiTheme, Container } from '@material-ui/core';
import { orange } from '@material-ui/core/colors';
import { useHistory } from 'react-router';


const useStyles = makeStyles({
    boxInternal: {
    borderStyle: "dashed",  
    minHeight: 200,
    },
});

interface FeedBoxComponentProps {
    username: string;
    title: string;
    body: String;
}

export const FeedBoxComponent: React.FC<FeedBoxComponentProps> = (props) => {
    const classes = useStyles();
    const history = useHistory();

    const handleRedirect = () => {
        history.push('/forum');
    }

    return (
        <div className={classes.boxInternal} onClick={() => handleRedirect()} >
            <h2>{props.title}</h2>
            <p>{props.body}</p>
            <h3>{props.username}</h3>
            <h2>{props.title}</h2>
        </div>

    )
}


//!Onlick  redirect to Forum page and Pass Question Id