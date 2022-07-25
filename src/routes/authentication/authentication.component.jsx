import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import SignIn from '../../components/sign-in/sign-in.component';

import { AuthenticationContainer } from './authentication.styles';

const Authentication = () => {
    return (
        <AuthenticationContainer>
            <SignIn />
        </AuthenticationContainer>
    );
};

export default Authentication;
