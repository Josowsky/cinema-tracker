import { simpleActionCreator } from '../action.creators';
import {
  APP_LOADED,
  APP_LOADING,
  APP_SET_MOBILE,
  APP_SET_DESKTOP,
} from './app.constants';

const appLoaded = simpleActionCreator(APP_LOADED);
const appLoading = simpleActionCreator(APP_LOADING);

const appSetMobile = simpleActionCreator(APP_SET_MOBILE);
const appSetDesktop = simpleActionCreator(APP_SET_DESKTOP);

export {
  appLoaded,
  appLoading,
  appSetMobile,
  appSetDesktop,
};
