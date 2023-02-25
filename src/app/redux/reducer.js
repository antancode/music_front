import { combineReducers } from 'redux';
import { musicreducer } from './actionreduser';

export const reducer = combineReducers({
    playsong: musicreducer,
})