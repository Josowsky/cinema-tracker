import { combineEpics } from "redux-observable";
import { authEpic } from "../auth";
import { appEpic } from "../app";

const rootEpic = combineEpics(authEpic, appEpic);

export { rootEpic };
