import { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
    Grid,
    Form,
    Segment,
    Button,
    Header,
    Message,
    Icon
} from 'semantic-ui-react';
import { register } from '../../store/user/user.action';

const defaultFormData = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
};
const SignUpForm = ({ register }) => {
    const [formData, setFormData] = useState(defaultFormData);
    const { username, email, password, confirmPassword } = formData;

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

        try {
            // call register action
            console.log('calling register action');
            register(formData);

            // resetFormData();

            // if user is authenticated, redirect to dashboard
        } catch (err) {
            if (err.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use');
            }
            console.error(err.message);
        }
    };

    return (
        <Grid textAlign='center' verticalAlign='middle' className='app'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h1' icon color={'blue'} textAlign='center'>
                    <Icon name='puzzle piece' />
                    Register
                </Header>
                <Form size='large' onSubmit={onSubmit}>
                    <Segment stacked>
                        <Form.Input
                            fluid
                            name='username'
                            value={username}
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
                            disabled={false}
                            className={''}
                            color={'blue'}
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

SignUpForm.propTypes = {
    register: PropTypes.func.isRequired
};

//   const mapStateToProps = (state) => ({
//     isAuthenticated: state.auth.isAuthenticated
//   });

export default connect(null, { register })(SignUpForm);
