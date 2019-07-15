import Project from './projectReducer';
import webGl from './webGlReducer';
import Tab from './changeTabReducer';
import Location from './locationReducer';
import {combineReducers} from 'redux';

const reducer = combineReducers({
    Project,
    webGl,
    Tab,
    Location

});

export default reducer;