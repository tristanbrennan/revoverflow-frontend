import React, { useState, useEffect } from 'react';
import { Box, Container, makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core';
import { ForumAnswerComponent } from './forum-answer.component';
import ForumQuestionComponent from './forum-question.component';
import ForumAcceptedAnswerComponent from './forum-accepted-answer.component';
import { BreadcrumbBarComponent } from '../breadcrumb-bar.component';
import * as fallbackRemote from '../../../remotes/fallback.remote';
import { Answer } from '../../../models/answer';
import { IState } from '../../../reducers';
import { connect } from 'react-redux';
import Pagination from '@material-ui/lab/Pagination';
import { Question } from '../../../models/question';
import { acceptAnswer } from '../../../actions/answer.actions';


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

const drawerWidth = 100;
const useStyles = makeStyles({
    boxInternal: {
        color: "#f26925"
    },
    containerInternal: {
        paddingTop: 10,
        width: `calc(100% - ${drawerWidth}px)`,
    },
    breadcrumbBar: {
        marginTop: 60,
        marginLeft: 20
    }
});

export interface ForumContainerComponentProps {
    storeQuestion: any;
    storeAnswer: any;
    storeAnswers: Answer[];
    acceptAnswer: (answer: Answer) => void;
}

export const ForumContainerComponent: React.FC<ForumContainerComponentProps> = (props) => {
    const classes = useStyles();
    const [selected, setSelected] = useState(false);
    const [answers, setAnswers] = useState<Answer[]>([]);
    const [question, setQuestion] = useState<Question[]>([]);
    const [totalPages, setTotalPages] = useState(0);
    const [page, setPage] = useState(0);
    const [answer, setAnswer] = useState<Answer[]>([]);

    const size = 10;
    let retrievedQuestion: any;
    let retrievedAnswer: any;

    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
        load(value - 1);
    };

    const load = async (page: number) => {
        let retrievedAnswerPageable: any;
        if (props.storeQuestion) {
            retrievedAnswerPageable = await fallbackRemote.getAnswersByQuestionId(props.storeQuestion.id, size, page);
            retrievedQuestion = props.storeQuestion;
        } else {
            retrievedAnswerPageable = await fallbackRemote.getAnswersByQuestionId(+JSON.parse(JSON.stringify(localStorage.getItem('questionId'))), size, page);
            retrievedQuestion = await fallbackRemote.getQuestionByQuestionId(+JSON.parse(JSON.stringify(localStorage.getItem('questionId'))));
        }
        setTotalPages(retrievedAnswerPageable.totalPages);
        setAnswers(retrievedAnswerPageable.content);
        setQuestion([retrievedQuestion]);
    }


    const reload = async () => {
        const reQuestionId = +JSON.parse(JSON.stringify(localStorage.getItem('questionId')))
        try {
            retrievedQuestion = await fallbackRemote.getQuestionByQuestionId(reQuestionId);
            retrievedAnswer = await fallbackRemote.getAnswerByAnswerId(retrievedQuestion.acceptedId);
        } catch {
            return;
        }
        setAnswer([retrievedAnswer]);
    }

    useEffect(() => {
        load(0);
        reload();
    }, [])

    const renderForumQuestionComponents = () => {
        return question.map(question => {
            return (
                <ForumQuestionComponent question={question} />
            )
        })
    }

    const renderForumAcceptedAnswerComponents = () => {
        return answer.map(answer => {
            return (
                <ForumAcceptedAnswerComponent answer={answer} selected={selected} />
            )
        })
    }

    const renderForumAnswerComponents = () => {
        return answers.map(answer => {
            return (
                <ForumAnswerComponent answer={answer} setSelected={setSelected} selected={selected} acceptAnswer={props.acceptAnswer} />
            )
        })
    }

    return (
        <div className={classes.breadcrumbBar}>
            <ThemeProvider theme={theme}>
                <BreadcrumbBarComponent />
                <Container className={classes.containerInternal} >
                    <div style={{ width: '100%' }}>
                        <Box justifyContent="center" display="flex" flexDirection="column">
                            {renderForumQuestionComponents()}
                            {renderForumAcceptedAnswerComponents()}
                            {renderForumAnswerComponents()}
                        </Box>
                    </div>
                </Container>
                <Box display="flex" justifyContent="center" padding={5}>
                    <Pagination size="medium" count={totalPages} page={page} color="secondary" onChange={handlePageChange} />
                </Box>
            </ThemeProvider>
        </div>
    )
}

const mapStateToProps = (state: IState) => {
    return {
        storeQuestion: state.questionState.storeQuestion,
        storeAnswer: state.answerState.storeAnswer,
        storeAnswers: state.answerState.collectedAnswers,
    }
}

const mapDispatchToProps = {
    acceptAnswer,
};

export default connect(mapStateToProps, mapDispatchToProps)(ForumContainerComponent);

    // if (props.storeQuestion && (answers.length === 0)) {
    //     load(0);
    // } else if (!props.storeQuestion && (answers.length === 0)) {
    //     load(0);
    // }

