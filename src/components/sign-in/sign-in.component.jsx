import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    signInWithGooglePopup,
    // createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword
} from '../../utils/firebase/firebase.utils';

import {
    Grid,
    Form,
    Segment,
    Button,
    Header,
    Message,
    Icon
} from 'semantic-ui-react';

const defaultFormData = {
    email: '',
    password: ''
};

const SignInForm = () => {
    const [formData, setFormData] = useState(defaultFormData);
    const { email, password } = formData;
    const navigate = useNavigate();

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
            const { user } = await signInAuthUserWithEmailAndPassword(
                email,
                password
            );

            resetFormData();
            if (user) navigate('/dashboard');
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

    // Sign in user with Google Pop-up
    const SignInWithGoogle = async () => {
        await signInWithGooglePopup();
    };

    let theme = {
        primaryColor: 'primary',
        secondaryColor: ''
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
                    Login to DevChat
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
                            disabled={''}
                            className={''}
                            color={theme.primaryColor}
                            fluid
                            size='large'
                        >
                            Sign In
                        </Button>
                    </Segment>
                </Form>
                <Message>
                    Don't have an account?{' '}
                    <Link to='/register'>Create Account</Link>{' '}
                </Message>
            </Grid.Column>
        </Grid>
    );
};

export default SignInForm;
