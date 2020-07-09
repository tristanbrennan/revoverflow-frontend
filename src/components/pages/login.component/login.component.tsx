import React from 'react';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import './login.component.css';
import { orange } from '@material-ui/core/colors';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '100ch',
                color: 'orangered'
            },
        },
    }),
);

export const LoginComponent: React.FC = () =>{
    const classes = useStyles();
    return (
        <div className="wrapper">
            <div className="form-wrapper">
                <h3 className="h3">
                    Login
                    </h3>
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Email" variant="outlined" className="loginUsername"/>
            <TextField id="outlined-basic" label="Password" type="password" variant="outlined" className="loginPassword"/>
        </form>
        <div className="logIn">
            <button type="submit" >Log In</button>
            </div>
            
        </div>
        </div>

    )
}