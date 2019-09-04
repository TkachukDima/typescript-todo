import { createStore, combineReducers, applyMiddleware} from 'redux';
import itemReducer from './reducers';

export const rootReducer = combineReducers({
    items: itemReducer
})

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, applyMiddleware());