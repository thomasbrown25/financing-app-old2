import SignInForm from '../../components/sign-in/sign-in.component';

import { AuthenticationContainer } from '../authentication/authentication.styles';

const SignIn = () => {
    return (
        <AuthenticationContainer>
            <SignInForm />
        </AuthenticationContainer>
    );
};

export default SignIn;
