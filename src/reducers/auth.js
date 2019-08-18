import * as auth from '../actionCreators/auth'

const localToken = localStorage.getItem('token');
let initialState = {
    access: undefined,
    errors: {},
};

if (localToken) {
    initialState.access = {
        token: localToken
    }
}


export default (state=initialState, action) => {
    switch(action.type) {
        case auth.LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                access: {
                    token: action.payload.token,
                },
                errors: {}
            }
        case auth.TOKEN_RECEIVED:
            return {
                ...state,
                access: {
                    token: action.payload.token,
                }
            }

        case auth.LOGIN_FAILURE:
        case auth.TOKEN_FAILURE:
            return {
                access: undefined,
                refresh: undefined,
                errors: action.payload.response || {'non_field_errors': action.payload.statusText},
            }
        default:
            return state
    }
}


export function accessToken(state) {
    if (state.access) {
        return  state.access.token
    }
}

export function isAccessTokenExpired(state) {
    if (state.access && state.access.exp) {
        return 1000 * state.access.exp - (new Date()).getTime() < 5000
    }
    return true
}

// export function refreshToken(state) {
//     if (state.refresh) {
//         return  state.refresh.token
//     }
// }

export function isRefreshTokenExpired(state) {
    return !state.access;

}

export function isAuthenticated(state) {
    return !isRefreshTokenExpired(state)
}

export function errors(state) {
    return  state.errors
}