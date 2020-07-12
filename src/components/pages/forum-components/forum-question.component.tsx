import React from 'react';
import { makeStyles, Box, Container, Button, createMuiTheme, ThemeProvider, Card } from '@material-ui/core';


const useStyles = makeStyles({
    boxInternal: {
        marginBottom: 5,
        marginTop: 10,
        borderBottomStyle: "solid",
        borderColor: "#f26925",
        padding: 10
    },
});

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#f26925',
        },
        secondary: {
            main: '#3498db',
        },
    },
});

interface ForumQuestionComponentProps {
    username: string;
    title: string;
    body: String;
}

export const ForumQuestionComponent: React.FC<ForumQuestionComponentProps> = (props) => {
    const classes = useStyles();

    return (
        <Container >
            <Card className={classes.boxInternal}>
                <ThemeProvider theme={theme} >
                    <Box justifyContent="space-between" display="flex" flexDirection="row" color="primary">
                        <Box textAlign="left" >
                            <h2>{props.title}</h2>
                            <p>{props.body}</p>
                            <footer>{props.username} <br />01/01/2020</footer>
                        </Box>
                        <Box  >
                            <Button variant="contained" color="secondary" >  
                                Confirm Answer
                            </Button>
                        </Box>
                    </Box>
                </ThemeProvider>
            </Card>
        </Container>
    )
}

//!Make button visible when isAdmin is true