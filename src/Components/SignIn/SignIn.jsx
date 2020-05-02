import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import houseImage from '../../Assets/Rentalhouse.jpg'
import Logo from '../../Assets/Group.svg'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { easings } from "react-animation";





function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <b>iWork PLC</b>  {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        marginRight: 300,
        backgroundColor: '#F3FCF4'
    },
    image: {
        backgroundImage: `url(${houseImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        animation: `pop-in ${easings.easeOutQuart} 1000ms forwards`,

    },
    paper: {
        // margin: theme.spacing(8, 4),
        margin: 100,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: '#008060',
        height: 60,
        width: 60,

    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
        color: '#008060'
    },
    submit: {
        backgroundColor: "#008060",
        color: "#FFFFFF",
        margin: theme.spacing(3, 0, 2),
    },
    Logo: {
        height: 200,
        width: 450,
        animation: `fade-in ${easings.easeOutQuart} 5000ms forwards`
    },
    paperContainer: {
        backgroundColor: '#F3FCF4'

    },
    checkbox: {
        marginLeft: 20
    },
    primary: {
        color: '#008060'

    }
}));

export default function SignInSide() {
    const classes = useStyles();

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square className={classes.paperContainer}>

                <div className={classes.paper}>
                    <img src={Logo} className={classes.Logo} alt="" />

                    <Avatar className={classes.avatar}>
                        <ExitToAppIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel className={classes.checkbox}
                            control={<Checkbox value="remember" color='default' />}
                            label="Remember me"
                        />
                        <Grid xs={12} align='center'>
                            <Button
                                type="submit"
                                // fullWidth
                                variant="contained"
                                className={classes.submit}
                            >
                                Sign In
                        </Button>
                        </Grid>

                        <Grid container>
                            <Grid item xs  >
                                <Link className={classes.primary} href="#" variant="caption">
                                    Forgot password?
                        </Link>
                            </Grid>
                            <Grid item>
                                <Link className={classes.primary} href="#" variant="caption">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                        <Box mt={5}>
                            <Copyright />
                        </Box>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
}