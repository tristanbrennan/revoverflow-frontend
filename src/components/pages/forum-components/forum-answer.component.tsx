import React, { useState } from 'react';
import { makeStyles, Box, FormControlLabel, Modal, Fade, Backdrop, Button, Container, createMuiTheme, ThemeProvider } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import { green } from '@material-ui/core/colors';
import { Answer } from '../../../models/answer';
import * as fallbackRemote from '../../../remotes/fallback.remote';
import { Question } from '../../../models/question';


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

interface ForumAnswerComponentProps {
    answer: Answer;
    selected: boolean;
    setSelected: (selected: boolean) => void;
    acceptAnswer: (answer: Answer) => void;
    question: any;
    storeQuestion: any;
}

export const ForumAnswerComponent: React.FC<ForumAnswerComponentProps> = (props) => {
    const classes = useStyles();
    const [color, setColor] = useState(false)
    const [open, setOpen] = React.useState(false);
    const [currentQuestion, setCurrentQuestion] = useState<Question>({
        id: 0,
        acceptedId: 0,
        title: "",
        content: "",
        creationDate: new Date(),
        status: false,
        userId: 0
    })

    const getCurrentQuestion = async () => {
        const retrievedQuestion = await fallbackRemote.getQuestionByQuestionId(+JSON.parse(JSON.stringify(localStorage.getItem('questionId'))));
        setCurrentQuestion(retrievedQuestion);
    }

    if (currentQuestion.acceptedId === 0) {
        getCurrentQuestion();
    }

    const selectAnswer = async () => {
        if (currentQuestion.acceptedId) {
            return;
        } else {
            if (!props.selected) {
                handleOpen();
                if (!color) {
                    setColor(!color)
                }
                else { setColor(color); }
            } else {
                setColor(color);
            }
        }
    }

    const handleOpen = async () => {
        if (currentQuestion.acceptedId) {
            return;
        } else {
            setOpen(true);
        }
    };

    const handleCloseSubmit = async () => {
        const payload = {
            id: 2,
            acceptedId: props.answer.id,
            title: "test",
            content: "test",
            creationDate: "2012-12-12",
            editDate: null,
            status: false,
            userID: 13
        };

        try {
            await fallbackRemote.updateQuestionAcceptedAnswerId(payload);
            props.acceptAnswer(props.answer);
            localStorage.setItem('answerId', JSON.stringify(props.answer.id));
        } catch {
            alert("You encountered an error")
            return;
        }

        props.setSelected(true);
        setOpen(false);
    };

    const handleCloseCancel = () => {
        setColor(false);
        setOpen(false);
    };

    return (
        <ThemeProvider theme={theme}>
            <Container>
                {currentQuestion.acceptedId !== props.answer.id ?
                    <Box justifyContent="flex-start" display="flex" flexDirection="row" className={classes.boxInternal}>
                        {(currentQuestion.acceptedId === null) ?
                            <Box>
                                <Box justifyContent="flex-start" display="flex">
                                    {color === true ?
                                        <FormControlLabel
                                            control={<DoneIcon className={classes.checkSize} />} label=""
                                            onClick={() => selectAnswer()} style={{ color: green[500] }} />
                                        :
                                        <FormControlLabel
                                            control={<DoneIcon className={classes.checkSize} />} label=""
                                            onClick={() => selectAnswer()} />
                                    }
                                </Box>
                                <Box textAlign="left">
                                    <p>{props.answer.content}</p>
                                    <footer>{props.answer.userId} <br />{props.answer.creationDate}</footer>
                                </Box>
                            </Box>
                            :
                            <Box justifyContent="flex-start" display="flex">
                                <Box>
                                    <FormControlLabel
                                        control={<DoneIcon className={classes.checkSize} />} label=""
                                    />
                                </Box>
                                <Box textAlign="left">
                                    <p>{props.answer.content}</p>
                                    <footer>{props.answer.userId} <br />{props.answer.creationDate}</footer>
                                </Box>
                            </Box>
                        }
                    </Box>
                    :
                    ""
                }

                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={open}
                    // onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={open} >
                        <div className={classes.paper}>
                            <h2 id="transition-modal-title">Confirm Answer Selection</h2>
                            <p id="transition-modal-description">Are you sure this answer wholly answers your question?</p>
                            <Box className={classes.modalInternal}>
                                <Button variant="contained" color="secondary" onClick={handleCloseSubmit} className={classes.buttonInternal} >
                                    Confirm
                        </Button>
                                <Button variant="contained" color="secondary" onClick={handleCloseCancel} className={classes.buttonInternal} >
                                    Cancel
                        </Button>
                            </Box>
                        </div>
                    </Fade>
                </Modal>
            </Container>
        </ThemeProvider>
    )
}