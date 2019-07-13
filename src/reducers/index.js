import Project from './projectReducer';
import webGl from './webGlReducer';
import {combineReducers} from 'redux';

const reducer = combineReducers({
    Project,
    webGl

});

export default reducer;