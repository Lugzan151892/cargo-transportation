import { combineReducers } from 'redux';
import { cargoReducer } from "./reducers/cargo";


export const rootReducer = combineReducers({
    cargo: cargoReducer
});
