import {RSAA} from 'redux-api-middleware';
require('dotenv').config();

export const TICKET_REQUEST = '@@user/TICKET_REQUEST';
export const TICKET_SUCCESS = '@@user/TICKET_SUCCESS';
export const TICKET_FAILURE = '@@user/TICKET_FAILURE';

// const localToken = localStorage.getItem('token');

export const fetchTickets = () => ({
    [RSAA]: {
        endpoint: `${process.env.DB_HOST}/tickets/`,
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
        types: [
            TICKET_REQUEST,
            TICKET_SUCCESS,
            TICKET_FAILURE
        ]
    }
});
export const saveTicket = (data) => ({
    [RSAA]: {
        endpoint: `${process.env.DB_HOST}/tickets/`,
        method: 'POST',
        body: data,
        headers: { 'Content-Type': 'application/json'},
        types: [
            TICKET_REQUEST,
            TICKET_SUCCESS,
            TICKET_FAILURE
        ]
    }
});

export const onRowClick = (ticketId) => ({
    // meta: {
    //     transition: {
    //         path: `/ticket/${ticketId}/edit`
    //     }
    // }

});
