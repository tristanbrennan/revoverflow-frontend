import React from 'react';
import { makeStyles, Box, FormControlLabel, Container, createMuiTheme, ThemeProvider } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import { green } from '@material-ui/core/colors';


const useStyles = makeStyles({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: "#ffffff",
        border: '2px solid #000',
        padding: 20
    },
    checkSize: {
        width: 50,
        height: 50,
    },
    boxInternal: {
        marginBottom: 5,
        marginTop: 30,
        paddingBottom: 10,
        borderBottomStyle: "dotted",
        borderColor: "#f26925",
    },
    modalInternal: {
        display: "flex",
        justifyContent: "space-evenly"

    },
    buttonInternal: {
        color: '#ffffff',
        backgroundColor: '#3498db',
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

interface ForumAcceptedAnswerComponentProps {
    answer: any;
    storeAnswer: any;
    selected: boolean;
    question: any;
    storeQuestion: any;
}

export const ForumAcceptedAnswerComponent: React.FC<ForumAcceptedAnswerComponentProps> = (props) => {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Box justifyContent="flex-start" display="flex" flexDirection="row" className={classes.boxInternal}>
                    <Box>
                        {(props.answer.id === +JSON.parse(JSON.stringify(localStorage.getItem('answerId')))) ?
                            <Box>
                                {props.storeAnswer ?
                                    <Box>
                                        <FormControlLabel
                                            control={<DoneIcon className={classes.checkSize} />} label=""
                                            style={{ color: green[500] }} />
                                        <Box textAlign="left">
                                            <p>{props.storeAnswer.content}</p>
                                            <footer>{props.storeAnswer.userId} <br />{props.storeAnswer.creationDate}</footer>
                                        </Box>
                                    </Box>
                                    :
                                    <Box>
                                        <FormControlLabel
                                            control={<DoneIcon className={classes.checkSize} />} label=""
                                            style={{ color: green[500] }} />
                                        <Box textAlign="left">
                                            <p>{props.answer.content}</p>
                                            <footer>{props.answer.userId} <br />{props.answer.creationDate}</footer>
                                        </Box>
                                    </Box>
                                }
                            </Box>
                            :
                            <br />
                        }
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}