import {RSAA} from 'redux-api-middleware';
require('dotenv').config();

export const PROJECT_REQUEST = '@@user/PROJECT_REQUEST';
export const PROJECT_SUCCESS = '@@user/PROJECT_SUCCESS';
export const PROJECT_FAILURE = '@@user/PROJECT_FAILURE';

// const localToken = localStorage.getItem('token');

export const fetchProjects = () => ({
    [RSAA]: {
        endpoint: `${process.env.DB_HOST}/projects/`,
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
        types: [
            PROJECT_REQUEST,
            PROJECT_SUCCESS,
            PROJECT_FAILURE
        ]
    }
});