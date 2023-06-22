import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './session'
import gamesReducer from './games';
import commentsReducer from './comments';
import cartReducer from './cart';
import orderReducer from './orders';
import newsReducer from './news';

const rootReducer = combineReducers({
  session,
  games: gamesReducer,
  comments: commentsReducer,
  cart: cartReducer,
  orders: orderReducer,
  news: newsReducer
});


let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
