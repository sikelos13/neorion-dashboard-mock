import {
    USER_REQUEST,
    USER_SUCCESS,
    USER_FAILURE
} from '../actionCreators/user';

const initialState = {
    username: "No-User",
    loading: false,
    error: null
};

export default function usersReducer(state = initialState, action) {
    switch(action.type) {
        case USER_REQUEST:

            // Mark the state as "loading" so we can show a spinner or something
            // Also, reset any errors. We're starting fresh.
            return {
                ...state,
                loading: true,
                error: null
            };

        case USER_SUCCESS:
            // All done: set loading "false".
            // Also, replace the items with the ones from the server
            return {
                ...state,
                loading: false,
                username: action.payload.username
            };

        case USER_FAILURE:
            // The request failed. It's done. So set loading to "false".
            // Save the error, so we can display it somewhere.
            // Since it failed, we don't have items to display anymore, so set `items` empty.
            //
            // This is all up to you and your app though:
            // maybe you want to keep the items around!
            // Do whatever seems right for your use case.
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                username: "No-User"
            };

        default:
            // ALWAYS have a default case in a reducer
            return state;
    }
}

// export const usersReducer = (state) => state.username;