import {isRSAA, apiMiddleware, RSAA} from 'redux-api-middleware';
// import apiAuthInjector from "apiAuthInjector"
// import { TOKEN_RECEIVED } from './actionCreators/auth'
import { accessToken } from './reducers'
const localToken = localStorage.getItem('token');

export function createApiMiddleware() {

    return ({ dispatch, getState }) => {
        const rsaaMiddleware = apiMiddleware({dispatch, getState});
        // const authActionMiddleware = apiAuthInjector();
        return (next) => (action) => {

            // Check if this action is a redux-api-middleware action.
            // if (callApi) {
            //     // Inject the Authorization header from localStorage.
            //     callApi.headers = Object.assign({}, callApi.headers, {
            //         Authorization: `Token ${localToken}` || '',
            //     })
            // }
            // const nextCheckPostoned = (nextAction) => {
            //     // Run postponed actions after token refresh
            //     if (nextAction.type === TOKEN_RECEIVED) {
            //         next(nextAction);
            //         postponedRSAAs.forEach((postponed) => {
            //             rsaaMiddleware(next)(postponed)
            //         });
            //         postponedRSAAs = []
            //     } else {
            //         next(nextAction)
            //     }
            // };

            if(isRSAA(action)) {
                const callApi = action[RSAA];

                const state = getState(),
                    token = accessToken(state);

                if(token) {
                    callApi.headers = Object.assign({}, callApi.headers, {
                        Authorization: `Token ${token}` || '',
                    })
                }


                return rsaaMiddleware(next)(action);
            }

            return next(action);
        }
    }
}

export default createApiMiddleware();