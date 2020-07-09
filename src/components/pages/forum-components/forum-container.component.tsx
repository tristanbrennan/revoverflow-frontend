import React from 'react';
import { Grid, makeStyles, Box, Container } from '@material-ui/core';
import { ForumBoxComponent } from './forum-box.component';


const useStyles = makeStyles({
    containerRoot: {
        display: "flex",
    },
    answerRoot: {
        flexGrow: 1,
        position: "absolute",
        width: "330%",
        height: "20vh",
        top: "15vh",
        left: "10vw",
        display: "flex",
        flexDirection: "column"
    },
});

const dataQ = ['Yuri', 'What is the Formula for Concentrated Dark matter?', 'I have been wondering for the longest time, does anyone know the formula for concentrated dark matter?']
const PostsA: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const PostsQ: any[] = [1];
const dataA = ['Michel', 'If you are a Zigerion do not read beyond this point', 'two parts plutonic quarks (pink) and one part cesium (green)']



export const ForumContainerComponent: React.FC = () => {
    const classes = useStyles();

    const renderForumAnswerComponents = () => {
        return PostsA.map(post => {
            return (
                <Grid item xs={3}>
                    <ForumBoxComponent username={dataA[0]} title={dataA[1]} body={dataA[2]} />
                </Grid>
            )
        })
    }

    const renderForumQuestionComponents = () => {
        return PostsQ.map(post => {
            return (
                <Grid item xs={3}>
                    <ForumBoxComponent username={dataQ[0]} title={dataQ[1]} body={dataQ[2]} />
                </Grid>
            )
        })
    }


    return (
        <Container className={classes.containerRoot}>
            <Box className={classes.answerRoot}>
                {renderForumQuestionComponents()}
                {renderForumAnswerComponents()}
            </Box>
        </Container>
    )
}