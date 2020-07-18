import React from 'react';
import { makeStyles, Box, Container, Button, Card, createMuiTheme, ThemeProvider } from '@material-ui/core';


const useStyles = makeStyles({
    boxInternal: {
        marginBottom: 5,
        marginTop: 10,
        borderBottomStyle: "solid",
        borderLeftStyle: "solid",
        borderColor: "#f26925",
        padding: 10
    },
    buttonInternal: {
        color: '#ffffff',
        backgroundColor: '#3498db'
    }
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
    question: any;
    storeQuestion: any;
}

const confirmAnswer = () => {
    //! logic to update the question entity status boolean
    //! attributes points to question owner's user account 
}

export const ForumQuestionComponent: React.FC<ForumQuestionComponentProps> = (props) => {
    const classes = useStyles();
    // const admin = (localStorage.getItem("userId")) && acceptedAnswerId; 
    console.log(props.question)
    const admin = true;

    return (
        <ThemeProvider theme={theme} >
            <Container >
                <Card className={classes.boxInternal}>
                    <Box justifyContent="space-between" display="flex" flexDirection="row" color="primary">
                        {props.storeQuestion ?
                            <Box textAlign="left" >
                                <h2>{props.storeQuestion.title}</h2>
                                <p>{props.storeQuestion.content}</p>
                                <footer>{props.storeQuestion.userId} <br />{props.storeQuestion.creationDate}</footer>
                            </Box>
                            :
                            <Box textAlign="left" >
                                <h2>{props.question.title}</h2>
                                <p>{props.question.content}</p>
                                <footer>{props.question.userId} <br />{props.question.creationDate}</footer>
                            </Box>
                        }
                        <Box>
                            {admin ?
                                <Button variant="contained" color="secondary" onClick={() => confirmAnswer()}>
                                    Confirm
                            </Button>
                                :
                                ""}
                        </Box>
                    </Box>
                </Card>
            </Container>
        </ThemeProvider>
    )
}