import Project from './projectReducer';
import webGl from './webGlReducer';
import Tab from './changeTabReducer';
import {combineReducers} from 'redux';

const reducer = combineReducers({
    Project,
    webGl,
    Tab

});

export default reducer;