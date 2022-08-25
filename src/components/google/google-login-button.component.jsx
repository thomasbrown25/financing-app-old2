import { GoogleLogin } from 'react-google-login';

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;

const GoogleLoginButton = () => {
    const onSuccess = (res) => {
        console.log('GOOGLE LOGIN SUCCESS! Current user: ', res.profileObj);
        var id_token = res.getAuthResponse().id_token;
        console.log(id_token);
    };

    const onFailure = (res) => {
        console.log('GOOGLE LOGIN FAILED!', res);
    };

    return (
        <div id='signInButton'>
            <GoogleLogin
                clientId={GOOGLE_CLIENT_ID}
                buttonText={'Google Sign In'}
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    );
};

export default GoogleLoginButton;
