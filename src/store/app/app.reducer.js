import { combineReducers } from 'redux';

import { trueFalseReducerCreator } from '../reducers.creators';
import config from '../../config';
import {
  APP_LOADED,
  APP_LOADING,
  APP_SET_MOBILE,
  APP_SET_DESKTOP,
} from './app.constants';

const isMobile = document.body.clientWidth < config.mobileWidth;

const loadedReducer = trueFalseReducerCreator(false, APP_LOADED, APP_LOADING);
const mobileReducer = trueFalseReducerCreator(isMobile, APP_SET_MOBILE, APP_SET_DESKTOP);

const appReducer = combineReducers({
  isLoaded: loadedReducer,
  isMobile: mobileReducer,
});

export { appReducer };
