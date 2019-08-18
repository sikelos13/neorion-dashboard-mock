import {RSAA} from 'redux-api-middleware';
require('dotenv').config();

export const USER_REQUEST = '@@user/USER_REQUEST';
export const USER_SUCCESS = '@@user/USER_SUCCESS';
export const USER_FAILURE = '@@user/USER_FAILURE';

// const localToken = localStorage.getItem('token');

export const fetchUsers = () => ({
    [RSAA]: {
        endpoint: `${process.env.DB_HOST}/users/me`,
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
        types: [
            USER_REQUEST,
            USER_SUCCESS,
            USER_FAILURE
        ]
    }
});

