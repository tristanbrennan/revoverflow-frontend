import React from 'react';
import { makeStyles, Box, Card } from '@material-ui/core';
import { useHistory } from 'react-router';
import { Question } from '../../../models/question';
import * as fallbackRemote from '../../../remotes/fallback.remote';


const useStyles = makeStyles({
    boxInternal: {
        marginBottom: 5,
        marginTop: 10,
        borderStyle: "solid",
        borderColor: "#f26925",
    },
});

interface FeedBoxComponentProps {
    question: any;
    storeQuestion: any;
    clickQuestion: (question: Question) => void;
}

export const FeedBoxComponent: React.FC<FeedBoxComponentProps> = (props) => {
    const classes = useStyles();
    const history = useHistory();

    const handleRedirectQ = () => {
        props.clickQuestion(props.question);
        localStorage.setItem("questionId", props.question.id);
        history.push('/forum');
    }

    const handleRedirectA = async () => {
        const retrievedQuestion = await fallbackRemote.getQuestionByQuestionId(props.question.questionId);
        localStorage.setItem("questionId", JSON.stringify(retrievedQuestion.id));
        props.clickQuestion(retrievedQuestion);
        history.push('/forum');
    }

    return (
        <Card className={classes.boxInternal}>
            {props.question.questionId ?
                <Box onClick={() => handleRedirectA()} >
                    <p>{props.question.content}</p>
                    <h3>{props.question.userId}</h3>
                    <p>{props.question.creationDate}</p>
                </Box>
                :
                <Box onClick={() => handleRedirectQ()} >
                    <h2>{props.question.title}</h2>
                    <p>{props.question.content}</p>
                    <h3>{props.question.userId}</h3>
                    <p>{props.question.creationDate}</p>
            </Box> }
        </Card>
    )
}


//!Onlick redirect to Forum page and Pass Question Id