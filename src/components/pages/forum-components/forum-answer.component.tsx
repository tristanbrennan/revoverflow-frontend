import React, { useState } from 'react';
import { makeStyles, Box, FormControlLabel, Modal, Fade, Backdrop, Button, Theme, createStyles, Container } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import { green } from '@material-ui/core/colors';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
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
    }),
);

interface ForumAnswerComponentProps {
    username: string;
    title: string;
    body: String;
    selected: boolean;
    setSelected: (selected: boolean) => void;
}

export const ForumAnswerComponent: React.FC<ForumAnswerComponentProps> = (props) => {
    const classes = useStyles();
    const [color, setColor] = useState(false)
    const [open, setOpen] = React.useState(false);

    const selectAnswer = () => {
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

    const handleOpen = () => {
        setOpen(true);
    };

    const handleCloseSubmit = () => {
        props.setSelected(true);
        setOpen(false);
    };

    const handleCloseCancel = () => {
        setColor(false);
        setOpen(false);
    };

    return (
        <Container>
            <Box justifyContent="flex-start" display="flex" flexDirection="row" className={classes.boxInternal}>
                <Box>
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
                    <p>{props.body}</p>
                    <footer>{props.username} <br />01/01/2020</footer>
                </Box>
                < Box />
            </Box>

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
                        <h2 id="transition-modal-title">Transition modal</h2>
                        <p id="transition-modal-description">react-transition-group animates me.</p>
                        <Button variant="contained" color="secondary" onClick={handleCloseSubmit}>
                            submit
                        </Button>
                        <Button variant="contained" color="secondary" onClick={handleCloseCancel}>
                            cancel
                        </Button>
                    </div>
                </Fade>
            </Modal>
        </Container>
    )
}