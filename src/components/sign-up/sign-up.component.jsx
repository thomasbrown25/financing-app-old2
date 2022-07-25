import { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import {
    Grid,
    Form,
    Segment,
    Button,
    Header,
    Message,
    Icon
} from 'semantic-ui-react';

import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth
} from '../../utils/firebase/firebase.utils';

const defaultFormData = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};
const SignUpForm = () => {
    const [formData, setFormData] = useState(defaultFormData);
    const { displayName, email, password, confirmPassword } = formData;

    const resetFormData = () => {
        setFormData(defaultFormData);
    };

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();

        // confirm the password matches
        if (password !== confirmPassword)
            return alert('passwords do not match');

        // see if user is authenticated
        try {
            const { user } = await createAuthUserWithEmailAndPassword(
                email,
                password
            );

            resetFormData();

            // create user document
            await createUserDocumentFromAuth(user, { displayName });
        } catch (err) {
            if (err.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use');
            }
            console.error(err.message);
        }
    };

    const theme = {
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
                    <Icon name='puzzle piece' color={theme.primaryColor} />
                    Register for DevChat
                </Header>
                <Form size='large' onSubmit={onSubmit}>
                    <Segment stacked>
                        <Form.Input
                            fluid
                            name='displayName'
                            value={displayName}
                            icon='user'
                            iconPosition='left'
                            placeholder='Display Name'
                            onChange={onChange}
                            type='text'
                        />
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
                        <Form.Input
                            fluid
                            name='confirmPassword'
                            value={confirmPassword}
                            icon='repeat'
                            iconPosition='left'
                            placeholder='Confirm Password'
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
                            Sign Up
                        </Button>
                    </Segment>
                </Form>
                <Message>
                    Already a user? <Link to='/sign-in'>Login</Link>{' '}
                </Message>
            </Grid.Column>
        </Grid>
    );
};

export default SignUpForm;
