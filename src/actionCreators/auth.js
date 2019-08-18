import {RSAA} from 'redux-api-middleware';
require('dotenv').config();
export const LOGIN_REQUEST = '@@auth/LOGIN_REQUEST';
export const LOGIN_SUCCESS = '@@auth/LOGIN_SUCCESS';
export const LOGIN_FAILURE = '@@auth/LOGIN_FAILURE';
export const TOKEN_REQUEST = '@@auth/TOKEN_REQUEST';
export const TOKEN_RECEIVED = '@@auth/TOKEN_RECEIVED';
export const TOKEN_FAILURE = '@@auth/TOKEN_FAILURE';

export const login = (username, password) => ({
    [RSAA]: {
        // endpoint: '/api/v1/api-token-auth/',
        endpoint: `${process.env.DB_HOST}/api-token-auth/`,
        method: 'POST',
        body: JSON.stringify({username, password}),
        headers: { 'Content-Type': 'application/json' },
        types: [
            LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE
        ],
    }

});

// export const currentUser = (username, password) => ({
//     [RSAA]: {
//         // endpoint: '/api/v1/api-token-auth/',
//         endpoint: 'https://neorion.koslib.dev.intelligems.eu/api/v1/users/',
//         method: 'GET',
//         body: JSON.stringify({username, password}),
//         headers: {'Content-Type': 'application/json'},
//         types: [
//             LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE
//         ]
//     }
// });