// import storage from 'redux-persist/es/storage'
// import { createFilter   } from 'redux-persist-transform-filter';
import { persistReducer, persistStore } from 'redux-persist'
import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import {connectRouter, routerMiddleware} from 'connected-react-router'
import createRootReducer from './reducers'
import apiMiddleware from './middleware';
// import rootReducer from './reducers'
import thunk from "redux-thunk";
export const history = createBrowserHistory();

export default function configureStore() {
    // const persistedFilter = createFilter(
    //     'auth', ['access', 'refresh']);
    //
    // const reducer = persistReducer(
    //     {
    //         key: 'polls',
    //         storage: storage,
    //         whitelist: ['auth'],
    //         transforms: [persistedFilter]
    //     },
    //     rootReducer);
  const store = createStore(
    createRootReducer(history),
      // root reducer with router state
    compose(
      applyMiddleware(
         // for dispatching history actions
          apiMiddleware,
          thunk,
          routerMiddleware(history),
          // ... other middlewares ...
      ),
    ),
  );
    // store.subscribe(() => {
    //     console.log('STATE');
    //     console.log(store.getState());
    // });

    persistStore(store);
  return store;
}