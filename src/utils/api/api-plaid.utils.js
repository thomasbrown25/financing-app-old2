import { api } from './api';

export const sendPublicTokenToServer = async (publicToken) => {
    return await api.post('/api/plaid/fetch_access_token', publicToken);
};
