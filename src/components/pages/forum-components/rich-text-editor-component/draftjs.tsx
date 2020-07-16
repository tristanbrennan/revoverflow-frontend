import React from 'react';
import { useState } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';
import { Button, createMuiTheme, makeStyles, ThemeProvider, Box, Container, Typography } from '@material-ui/core';


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

const useStyles = makeStyles({
    boxInternal: {
        color: "#f26925"
    },
    containerTool: {
        paddingTop: 100,
        width: "70%",
        display: "flex",
        flexDirection: "column",
    },
    titleTool: {
        borderStyle: "dashed",
        height: "10vh",
        overflowY: "auto"
    },
    editorTool: {
        borderStyle: "dashed",
        height: "40vh",
        overflowY: "auto"
    },
    buttonInternal: {
        padding: 2
    }
});

export const RichTextEditorComponent: React.FC = () => {
    const classes = useStyles();
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const onChange = (editorState: EditorState) => setEditorState(editorState);
    const handleKeyCommand = (command: string, editorState: EditorState) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            onChange(newState);
            return 'handled';
        } else {
            return 'not-handled';
        }
    }

    //INLINE STYLES, consists of these functions, and an array of buttons to map to span button elements
    const buttonVariant = (name: string) => {
        const currentInLineStyle = editorState.getCurrentInlineStyle();
        if (currentInLineStyle.has(name)) {
            return true;
        } else {
            return false;
        }
    }

    const onBoldClick = (event: any) => {
        event.preventDefault();
        onChange(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
    }
    const onItalicClick = (event: any) => {
        event.preventDefault();
        onChange(RichUtils.toggleInlineStyle(editorState, 'ITALIC'));
    }
    const onUnderlineClick = (event: any) => {
        event.preventDefault();
        onChange(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'));
    }
    const onStrikethroughClick = (event: any) => {
        event.preventDefault();
        onChange(RichUtils.toggleInlineStyle(editorState, 'STRIKETHROUGH'));
    }
    const onCodeClick = (event: any) => {
        event.preventDefault();
        onChange(RichUtils.toggleInlineStyle(editorState, 'CODE'));
    }

    const buttons = [
        { function: onBoldClick, name: 'Bold', style: 'BOLD' },
        { function: onItalicClick, name: 'Italic', style: 'ITALIC' },
        { function: onUnderlineClick, name: 'Underline', style: 'UNDERLINE' },
        { function: onStrikethroughClick, name: 'Strikethrough', style: 'STRIKETHROUGH' },
        { function: onCodeClick, name: 'Code', style: 'CODE' }]

    //BLOCK STYLES may go here, unless you work how to put them in their own file and maintain functionality

    return (
        <ThemeProvider theme={theme} >
            <Container className={classes.containerTool}>
                <Typography variant="h4">
                    Ask a Public Question:
            </Typography>
                <Box>
                    <Box justifyContent="center" display="flex">
                        <Box justifyContent="center" display="flex"  >
                            {buttons.map(b =>
                                buttonVariant(b.style) ?
                                    <span className={classes.buttonInternal}>
                                        <Button onMouseDown={b.function} variant='contained' color='primary' size='small' >{b.name}</Button>
                                    </span>
                                    :
                                    <span className={classes.buttonInternal}>
                                        <Button onMouseDown={b.function} size='small' color='secondary' variant='contained' >{b.name} </Button>
                                    </span>)}
                        </Box>
                    </Box >
                    <Typography variant="h4" >
                        Title:
                    </Typography>
                    <Box justifyContent="center" display="flex" flexDirection="column" className={classes.titleTool} >
                        <Editor
                            editorState={editorState}
                            handleKeyCommand={handleKeyCommand}
                            onChange={onChange}
                        />
                    </Box>
                    <Typography variant="h4">
                        Content:
                    </Typography>
                    <Box justifyContent="center" display="flex" flexDirection="column" className={classes.editorTool} >
                        <Editor
                            editorState={editorState}
                            handleKeyCommand={handleKeyCommand}
                            onChange={onChange}
                        />
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}