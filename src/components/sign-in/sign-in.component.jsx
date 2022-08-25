import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { gapi } from 'gapi-script';

import { login } from '../../store/user/user.action';

import {
    Grid,
    Form,
    Segment,
    Button,
    Header,
    Message,
    Icon
} from 'semantic-ui-react';

import GoogleLoginButton from '../google/google-login-button.component';
import GoogleLogoutButton from '../google/google-logout-button.component';

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;

const defaultFormData = {
    email: '',
    password: ''
};

const SignInForm = ({ login }) => {
    useEffect(() => {
        function start() {
            gapi.client.init({
                client_id: GOOGLE_CLIENT_ID,
                scope: ''
            });
        }

        gapi.load('client:auth2', start);
    });
    // const currentUser = useSelector(selectCurrentUser);

    // useEffect(() => {
    //     if (currentUser) navigate('/dashboard');
    // });

    const dispatch = useDispatch();

    const [formData, setFormData] = useState(defaultFormData);
    const { email, password } = formData;
    const navigate = useNavigate();

    // Sign in user with Google Pop-up
    const SignInWithGoogle = async () => {
        // dispatch(googleSignInStart());
    };

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
            //resetFormData();
            // if (user) navigate('/dashboard');
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

    const theme = {
        primaryColor: 'blue',
        google: 'google plus'
    };

    return (
        <Grid textAlign='center' verticalAlign='middle' className='app'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header
                    as='h1'
                    icon
                    color={theme.primaryColor}
                    textAlign='center'
                >
                    <Icon name='code branch' color={theme.primaryColor} />
                    Sign In
                </Header>
                <Form size='large' onSubmit={onSubmit}>
                    <Segment stacked>
                        <Form.Input
                            fluid
                            name='email'
                            value={email}
                            icon='mail'
                            iconPosition='left'
                            placeholder='Email Address'
                            onChange={onChange}
                            type='email'
                        />
                        <Form.Input
                            fluid
                            name='password'
                            value={password}
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            onChange={onChange}
                            type='password'
                        />

                        <Button
                            // disabled={''}
                            className={''}
                            color={theme.primaryColor}
                            fluid
                            type='submit'
                            size='large'
                        >
                            Sign in
                        </Button>
                        {/* <GoogleSignInButton
                            // disabled={''}
                            className={''}
                            color={theme.google}
                            fluid
                            type='button'
                            size='large'
                            onClick={SignInWithGoogle}
                        >
                            Sign in with Google
                        </GoogleSignInButton> */}
                        <GoogleLoginButton />
                        <GoogleLogoutButton />
                    </Segment>
                </Form>
                <Message>
                    Don't have an account?{' '}
                    <Link to='/sign-up'>Create Account</Link>{' '}
                </Message>
            </Grid.Column>
        </Grid>
    );
};
SignInForm.propTypes = {
    login: PropTypes.func.isRequired
};

//   const mapStateToProps = (state) => ({
//     isAuthenticated: state.auth.isAuthenticated
//   });

export default connect(null, { login })(SignInForm);
