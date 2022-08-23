import api from './api';

// store our JWT in LS and set axios headers if we do have a token

const setAuthToken = (token) => {
    if (token) {
        api.defaults.headers.common['bearer'] = token;
        console.log(api.defaults.headers);
        localStorage.setItem('token', token);
    } else {
        // delete api.defaults.headers.common['bearer'];
        // localStorage.removeItem('token');
    }
};

export default setAuthToken;
