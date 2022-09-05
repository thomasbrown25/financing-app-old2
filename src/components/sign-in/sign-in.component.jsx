import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { gapi } from 'gapi-script';

import { login } from '../../store/user/user.action';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// import GoogleLoginButton from '../google/google-login-button.component';
// import GoogleLogoutButton from '../google/google-logout-button.component';
// import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils';
import { SignInResponse } from './sign-in.styles';

// import { GoogleSignInButton } from '../button/button.component';
// import { SignInResponse } from './sign-in.styles';

// const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;

const defaultFormData = {
    email: '',
    password: ''
};

const theme = createTheme();

function Copyright(props) {
    return (
        <Typography
            variant='body2'
            color='text.secondary'
            align='center'
            {...props}
        >
            {'Copyright © '}
            <Link color='inherit' href='https://mui.com/'>
                Financing App
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const SignInForm = ({ login, user: { currentUser, error } }) => {
    // useEffect(() => {
    //     function start() {
    //         gapi.client.init({
    //             client_id: GOOGLE_CLIENT_ID,
    //             scope: ''
    //         });
    //     }

    //     gapi.load('client:auth2', start);
    // });

    useEffect(() => {
        if (currentUser) navigate('/dashboard');
    });

    const [formData, setFormData] = useState(defaultFormData);
    const { email, password } = formData;
    const navigate = useNavigate();

    // Sign in user with Google Pop-up
    // const SignInWithGoogle = async () => {
    //     signInWithGooglePopup();
    // };

    const resetFormData = () => {
        setFormData(defaultFormData);
    };

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password)
            return alert('Must provide email and password');

        // Sign in user with email and password
        try {
            login(formData);
            resetFormData();
        } catch (err) {
            switch (err.code) {
                case 'auth/wrong-password':
                    alert('Incorrect password');
                    break;

                case 'auth/user-not-found':
                    alert('No account with that email');
                    break;

                default:
                    console.error(err.message);
            }
        }
    };

    return (
        <>
            <ThemeProvider theme={theme}>
                <Container component='main' maxWidth='xs'>
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component='h1' variant='h5'>
                            Sign in
                        </Typography>
                        <Box
                            component='form'
                            onSubmit={onSubmit}
                            noValidate
                            sx={{ mt: 1 }}
                        >
                            <SignInResponse
                                style={{ display: !error && 'none' }}
                            >
                                Your email or password is incorrect. Please try
                                again.
                            </SignInResponse>
                            <TextField
                                onChange={onChange}
                                margin='normal'
                                required
                                fullWidth
                                id='email'
                                label='Email Address'
                                name='email'
                                autoComplete='email'
                                autoFocus
                            />
                            <TextField
                                onChange={onChange}
                                margin='normal'
                                required
                                fullWidth
                                name='password'
                                label='Password'
                                type='password'
                                id='password'
                                autoComplete='current-password'
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value='remember'
                                        color='primary'
                                    />
                                }
                                label='Remember me'
                            />
                            <Button
                                type='submit'
                                fullWidth
                                variant='contained'
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href='#' variant='body2'>
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href={'/sign-up'} variant='body2'>
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    <Copyright sx={{ mt: 8, mb: 4 }} />
                </Container>
            </ThemeProvider>
        </>
    );
};
SignInForm.propTypes = {
    login: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    user: state.user
});

export default connect(mapStateToProps, { login })(SignInForm);
