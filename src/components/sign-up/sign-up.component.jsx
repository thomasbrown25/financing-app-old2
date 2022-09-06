import { useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

// Material UI
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Actions
import { register } from '../../store/user/user.action';
import { SignInResponse } from '../sign-in/sign-in.styles';
import { useEffect } from 'react';

const defaultFormData = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: ''
};

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
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

const SignUpForm = ({ register, user: { currentUser, error } }) => {
    const [formData, setFormData] = useState(defaultFormData);
    const { firstname, lastname, email, password, confirmPassword } = formData;
    const [signupError, setSignupError] = useState();

    const navigate = useNavigate();

    useEffect(() => {
        if (currentUser) navigate('/dashboard');
    });

    const resetFormData = () => {
        setFormData(defaultFormData);
    };

    const onChange = (e) => {
        setSignupError(null);
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        if (!firstname || !lastname || !email || !password) {
            return setSignupError('Please enter all the required fields');
        }

        // confirm the password matches
        if (password !== confirmPassword)
            return alert('passwords do not match');

        try {
            // call register action
            console.log('calling register action');
            register(formData);

            resetFormData();

            // if user is authenticated, redirect to dashboard
        } catch (err) {
            if (err.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use');
            }
            console.error(err.message);
        }
    };

    return (
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
                        {/* <LockOutlinedIcon /> */}
                    </Avatar>
                    <Typography component='h1' variant='h5'>
                        Sign up
                    </Typography>
                    <Box
                        component='form'
                        noValidate
                        onSubmit={onSubmit}
                        sx={{ mt: 3 }}
                    >
                        <SignInResponse
                            style={{
                                display: !signupError && !error && 'none'
                            }}
                        >
                            {signupError || error}
                        </SignInResponse>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    onChange={onChange}
                                    autoComplete='given-name'
                                    name='firstname'
                                    required
                                    fullWidth
                                    id='firstname'
                                    label='First Name'
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    onChange={onChange}
                                    required
                                    fullWidth
                                    id='lastname'
                                    label='Last Name'
                                    name='lastname'
                                    autoComplete='family-name'
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    onChange={onChange}
                                    required
                                    fullWidth
                                    id='email'
                                    label='Email Address'
                                    name='email'
                                    autoComplete='email'
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    onChange={onChange}
                                    required
                                    fullWidth
                                    name='password'
                                    label='Password'
                                    type='password'
                                    id='password'
                                    autoComplete='new-password'
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    onChange={onChange}
                                    required
                                    fullWidth
                                    name='confirmPassword'
                                    label='Confirm Password'
                                    type='password'
                                    id='confirmPassword'
                                    autoComplete='new-password'
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            value='allowExtraEmails'
                                            color='primary'
                                        />
                                    }
                                    label='I want to receive inspiration, marketing promotions and updates via email.'
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type='submit'
                            fullWidth
                            variant='contained'
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent='flex-end'>
                            <Grid item>
                                <Link href={'/sign-in'} variant='body2'>
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
};

SignUpForm.propTypes = {
    register: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    user: state.user
});

export default connect(mapStateToProps, { register })(SignUpForm);
