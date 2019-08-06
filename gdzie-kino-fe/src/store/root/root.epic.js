import { combineEpics } from 'redux-observable';
import { filmsEpic } from '../films';
import { authEpic } from '../auth';
import { appEpic } from '../app';

const rootEpic = combineEpics(
  authEpic,
  filmsEpic,
  appEpic,
);

export { rootEpic };
