import { GoogleLogout } from 'react-google-login';

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;

const GoogleLogoutButton = () => {
    const onSuccess = (res) => {
        console.log('GOOGLE LOGOUT SUCCESS! Current user: ', res);
    };

    return (
        <div id='signOutButton'>
            <GoogleLogout
                clientId={GOOGLE_CLIENT_ID}
                buttonText={'Google Sign Out'}
                onSuccess={onSuccess}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    );
};

export default GoogleLogoutButton;
